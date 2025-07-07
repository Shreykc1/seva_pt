import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchDocuments, deleteDocument } from '../functions/crud';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../components/ui/table';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';
import { Skeleton } from '../components/ui/skeleton';
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '../components/ui/tooltip';
import { PanelLeft, LogOut, BarChart2, Mail, Users, CheckCircle2 } from 'lucide-react';
import { Calendar as BigCalendar, dateFnsLocalizer } from 'react-big-calendar';
import { format } from 'date-fns/format';
import { parse } from 'date-fns/parse';
import { startOfWeek } from 'date-fns/startOfWeek';
import { getDay } from 'date-fns/getDay';
import { enUS } from 'date-fns/locale/en-US';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Moon, Sun } from 'lucide-react';


function StatCard({ title, value, icon, color }: { title: string, value: string | number, icon: React.ReactNode, color: string }) {
    return (
        <Card className="flex-1 min-w-[180px] shadow-xl border border-orange-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
                <span className={`rounded-full p-2 ${color} bg-opacity-20`}>{icon}</span>
            </CardHeader>
            <CardContent>
                <div className="text-3xl font-bold text-orange-600 drop-shadow-lg">{value}</div>
            </CardContent>
        </Card>
    );
}


const locales = {
    'en-US': enUS,
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 0 }),
    getDay,
    locales,
});

function CalendarView({ events }: { events: any[] }) {
    const [selectedEvent, setSelectedEvent] = useState<any | null>(null);
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleSelectEvent = (event: any) => {
        setSelectedEvent(event);
        setDialogOpen(true);
    };

    return (
        <div className="p-2 bg-white rounded-lg shadow relative">
            <BigCalendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                views={['month', 'week', 'day']}
                popup
                eventPropGetter={() => ({ style: { backgroundColor: '#fb923c', color: 'white', borderRadius: 6 } })}
                onSelectEvent={handleSelectEvent}
            />
            {dialogOpen && selectedEvent && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                    <Card className="w-full max-w-md mx-auto p-6 relative">
                        <button
                            className="absolute top-2 right-2 text-gray-400 hover:text-orange-500 text-xl font-bold"
                            onClick={() => setDialogOpen(false)}
                            aria-label="Close"
                        >
                            ×
                        </button>
                        <CardHeader>
                            <CardTitle className="text-lg text-orange-700">Appointment Details</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                <div><span className="font-semibold">Patient:</span> {selectedEvent.title}</div>
                                <div><span className="font-semibold">Start:</span> {selectedEvent.start.toLocaleString()}</div>
                                <div><span className="font-semibold">End:</span> {selectedEvent.end.toLocaleString()}</div>
                                {selectedEvent.message && (
                                    <div><span className="font-semibold">Message:</span> {selectedEvent.message}</div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    );
}



const Dashboard = () => {
    const [messages, setMessages] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
    const [selectedRow, setSelectedRow] = useState<number | null>(null);
    const [copiedEmailIndex, setCopiedEmailIndex] = useState<number | null>(null);
    const [rescheduleDialogOpen, setRescheduleDialogOpen] = useState(false);
    const [rescheduleDate, setRescheduleDate] = useState('');
    const [rescheduleTime, setRescheduleTime] = useState('');
    const [rescheduleAmPm, setRescheduleAmPm] = useState<'AM' | 'PM'>('AM');
    const [copiedRescheduleIndex, setCopiedRescheduleIndex] = useState<number | null>(null);
    const navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    useEffect(() => {
        // Only inject once
        if (document.getElementById('calendar-darkmode-style')) return;
        const style = document.createElement('style');
        style.id = 'calendar-darkmode-style';
        style.innerHTML = `
      .dark .rbc-calendar,
      .dark .rbc-month-view,
      .dark .rbc-header,
      .dark .rbc-date-cell,
      .dark .rbc-day-bg,
      .dark .rbc-time-content,
      .dark .rbc-timeslot-group,
      .dark .rbc-time-header-content,
      .dark .rbc-time-header,
      .dark .rbc-time-view {
        background-color: #18181b !important;
        color: #fbbf24 !important;
        border-color: #27272a !important;
      }
      .dark .rbc-off-range {
        color: #52525b !important;
      }
      .dark .rbc-today {
        background-color: #27272a !important;
      }
      .dark .rbc-event {
        background-color: #fb923c !important;
        color: #fff !important;
      }
      .dark .rbc-toolbar button {
        color: #fbbf24 !important;
      }
      .dark .rbc-toolbar button.rbc-active {
        background: #fb923c !important;
        color: #fff !important;
      }
    `;
        document.head.appendChild(style);
    }, []);

    // Protect dashboard: redirect if not authenticated
    useEffect(() => {
        if (localStorage.getItem('isAuthenticated') !== 'true') {
            navigate('/signin');
        }
    }, [navigate]);

    useEffect(() => {
        fetchDocuments('contactMessages').then(setMessages).finally(() => setLoading(false));
    }, []);

    // Convert messages to calendar events
    const calendarEvents = messages
        .filter(msg => msg.day && msg.time)
        .map(msg => {
            // Parse 12-hour time with AM/PM (e.g., '02:30 PM')
            let start;
            if (/am|pm/i.test(msg.time)) {
                // Format: 'HH:MM AM/PM'
                const [timePart, ampm] = msg.time.split(' ');
                let [hour, minute] = timePart.split(':').map(Number);
                if (ampm.toUpperCase() === 'PM' && hour < 12) hour += 12;
                if (ampm.toUpperCase() === 'AM' && hour === 12) hour = 0;
                start = new Date(`${msg.day}T${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`);
            } else {
                // Fallback for 24-hour or other formats
                start = new Date(`${msg.day}T${msg.time}`);
            }
            const end = new Date(start.getTime() + 60 * 60 * 1000); // 1 hour duration
            return {
                title: `${msg.name} (${msg.service})`,
                start,
                end,
                allDay: false,
                message: msg.message,
            };
        });
    const MESSAGE_TEMPLATE = (
        name: string,
        date: string,
        time: string
    ) => `Hello ${name},\n\nThank you for reaching out to SEVA Physical Therapy. We have received your message and have booked your appointment for ${date} at ${time}.\n\nBest regards,\nDr. Dipti Shah`;

    const RESCHEDULE_TEMPLATE = (
        name: string,
        date: string,
        time: string
    ) => `Hello ${name},\n\nWe would like to reschedule your appointment. Please let us know if you are available for the new proposed time: ${date} at ${time}.\n\nIf this does not work for you, please suggest an alternative.\n\nBest regards,\nDr. Dipti Shah`;

    const handleCopyEmail = async (email: string, idx: number) => {
        await navigator.clipboard.writeText(email);
        setCopiedEmailIndex(idx);
        setTimeout(() => setCopiedEmailIndex(null), 1500);
    };

    const handleRowSelect = (idx: number) => {
        setSelectedRow(idx);
    };

    const handleCopyTemplate = async () => {
        if (selectedRow === null) return;
        const msg = messages[selectedRow];
        // Format date and time
        let dateStr = '';
        let timeStr = '';
        if (msg.day && msg.time) {
            const dt = new Date(`${msg.day}T${msg.time}`);
            dateStr = dt.toLocaleDateString();
            timeStr = dt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        } else if (msg.createdAt?.toDate) {
            const dt = msg.createdAt.toDate();
            dateStr = dt.toLocaleDateString();
            timeStr = dt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        }
        const filled = MESSAGE_TEMPLATE(msg.name, dateStr, timeStr);
        await navigator.clipboard.writeText(filled);
        setCopiedIndex(selectedRow);
        setTimeout(() => setCopiedIndex(null), 1500);
    };

    const handleReschedule = () => {
        setRescheduleDialogOpen(true);
    };

    const handleRescheduleCopy = async () => {
        if (selectedRow === null) return;
        const msg = messages[selectedRow];
        let dateStr = rescheduleDate;
        let timeStr = rescheduleTime;
        if (dateStr && timeStr) {
            // Convert 12h time + AM/PM to 24h for Date object
            let [hour, minute] = timeStr.split(':').map(Number);
            if (rescheduleAmPm === 'PM' && hour < 12) hour += 12;
            if (rescheduleAmPm === 'AM' && hour === 12) hour = 0;
            const dt = new Date(`${dateStr}T${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`);
            dateStr = dt.toLocaleDateString();
            timeStr = dt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
        }
        const filled = RESCHEDULE_TEMPLATE(msg.name, dateStr, timeStr);
        await navigator.clipboard.writeText(filled);
        setCopiedRescheduleIndex(selectedRow);
        setTimeout(() => setCopiedRescheduleIndex(null), 1500);
        setRescheduleDialogOpen(false);
        setRescheduleDate('');
        setRescheduleTime('');
        setRescheduleAmPm('AM');
    };

    const handleComplete = async (id: string) => {
        setMessages(prev => prev.filter(msg => msg.id !== id));
        await deleteDocument('contactMessages', id);
    };

    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950 to-orange-100 w-full">
            {/* Main Content */}
            <div className="flex-1 flex flex-col min-h-screen relative">
                {/* Header */}
                <header className="flex flex-col sm:flex-row items-center justify-between px-2 sm:px-6 md:px-12 py-3 bg-white dark:bg-gray-900 m-2 sm:m-6 md:m-12 rounded-lg shadow-lg border border-orange-200 dark:border-gray-800 relative z-10 gap-4 sm:gap-0">
                    <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto justify-center sm:justify-start">
                        <h2 className='h-8 w-8 bg-orange-500 flex justify-center items-center text-white rounded-full font-bold text-lg'>
                            D
                        </h2>
                        <div>
                            <div className="font-bold text-lg text-orange-700 dark:text-orange-300">Dr. Dipti Shah</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="outline"
                                        onClick={() => setDarkMode(dm => !dm)}
                                        className="w-10 h-10 flex items-center justify-center"
                                        aria-label="Toggle dark mode"
                                    >
                                        {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>{darkMode ? 'Light Mode' : 'Dark Mode'}</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="outline" onClick={() => {
                                        localStorage.removeItem('isAuthenticated');
                                        localStorage.removeItem('userEmail');
                                        navigate('/signin');
                                    }} className="w-full sm:w-auto">Logout <LogOut /></Button>
                                </TooltipTrigger>
                                <TooltipContent>Logout</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </header>
                {/* Stat Cards - Overlap header */}
                <div className="mt-0 px-2 sm:px-6 md:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 justify-center items-stretch">
                        {loading ? (
                            Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-32 w-full dark:bg-gray-800" />)
                        ) : (
                            <>
                                <StatCard title="Total Messages" value={messages.length} icon={<Mail className="w-7 h-7 text-orange-500" />} color="text-orange-500" />
                                <StatCard title="New Today" value={messages.filter(m => (m.createdAt?.toDate ? m.createdAt.toDate().toDateString() : m.createdAt?.toDateString?.()) === new Date().toDateString()).length} icon={<Users className="w-7 h-7 text-orange-500" />} color="text-orange-500" />
                                <StatCard title="Unique Patients" value={new Set(messages.map(m => m.email)).size} icon={<BarChart2 className="w-7 h-7 text-orange-500" />} color="text-orange-500" />
                                <StatCard title="Avg. Msg/Day" value={Math.round(messages.length / 7)} icon={<BarChart2 className="w-7 h-7 text-orange-500" />} color="text-orange-500" />
                            </>
                        )}
                    </div>
                </div>
                {/* Tabs: Messages & Calendar */}
                <div className="flex-1 px-1 sm:px-4 md:px-8 pb-8 pt-4 sm:pt-8 mx-auto w-full">

                    <Tabs defaultValue="messages" className="w-full">
                        <div className="flex flex-col md:flex-row items-center justify-between mb-4 md:mb-6 mx-2 md:mx-6 gap-2 md:gap-0">
                            <TabsList className="rounded-lg bg-orange-50 dark:bg-gray-800 shadow w-full md:w-auto mb-2 md:mb-0">
                                <TabsTrigger value="messages" className="rounded-lg data-[state=active]:bg-orange-500 data-[state=active]:text-white">Messages</TabsTrigger>
                                <TabsTrigger value="calendar" className="rounded-lg data-[state=active]:bg-orange-500 data-[state=active]:text-white">Calendar</TabsTrigger>
                            </TabsList>
                            {selectedRow !== null && (
                                <div className="flex gap-2 w-full md:w-auto">
                                    <Button
                                        variant="outline"
                                        className="flex-1 md:ml-4 flex-shrink-0 relative dark:bg-gray-800 dark:text-orange-300"
                                        onClick={handleCopyTemplate}
                                    >
                                        {copiedIndex === selectedRow ? 'Copied!' : 'Copy Msg Template'}
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="flex-1 flex-shrink-0 relative dark:bg-gray-800 dark:text-orange-300"
                                        onClick={handleReschedule}
                                    >
                                        {copiedRescheduleIndex === selectedRow ? 'Copied!' : 'Ask for Reschedule'}
                                    </Button>
                                </div>
                            )}
                        </div>
                        {rescheduleDialogOpen && (
                            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-2">
                                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4 sm:p-8 w-full max-w-md relative">
                                    <button
                                        className="absolute top-2 right-2 text-gray-400 hover:text-orange-500 text-xl font-bold"
                                        onClick={() => setRescheduleDialogOpen(false)}
                                        aria-label="Close"
                                    >
                                        ×
                                    </button>
                                    <h2 className="text-xl font-bold mb-4 text-orange-700 dark:text-orange-300">Select New Date & Time</h2>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 dark:text-gray-200 mb-2">Date</label>
                                        <input
                                            type="date"
                                            className="border rounded px-3 py-2 w-full dark:bg-gray-800 dark:text-orange-200 dark:border-gray-700"
                                            value={rescheduleDate}
                                            onChange={e => setRescheduleDate(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-gray-700 dark:text-gray-200 mb-2">Time</label>
                                        <div className="flex gap-2">
                                            <input
                                                type="number"
                                                min="1"
                                                max="12"
                                                className="border rounded px-3 py-2 w-20 dark:bg-gray-800 dark:text-orange-200 dark:border-gray-700"
                                                value={rescheduleTime.split(':')[0] || ''}
                                                onChange={e => {
                                                    let hour = e.target.value.replace(/[^0-9]/g, '');
                                                    if (hour.length > 2) hour = hour.slice(0, 2);
                                                    setRescheduleTime(hour + ':' + (rescheduleTime.split(':')[1] || '00'));
                                                }}
                                                placeholder="HH"
                                            />
                                            <span className="self-center">:</span>
                                            <input
                                                type="number"
                                                min="0"
                                                max="59"
                                                className="border rounded px-3 py-2 w-20 dark:bg-gray-800 dark:text-orange-200 dark:border-gray-700"
                                                value={rescheduleTime.split(':')[1] || ''}
                                                onChange={e => {
                                                    let min = e.target.value.replace(/[^0-9]/g, '');
                                                    if (min.length > 2) min = min.slice(0, 2);
                                                    setRescheduleTime((rescheduleTime.split(':')[0] || '12') + ':' + min);
                                                }}
                                                placeholder="MM"
                                            />
                                            <select
                                                className="border rounded px-2 py-2 dark:bg-gray-800 dark:text-orange-200 dark:border-gray-700"
                                                value={rescheduleAmPm}
                                                onChange={e => setRescheduleAmPm(e.target.value as 'AM' | 'PM')}
                                            >
                                                <option value="AM">AM</option>
                                                <option value="PM">PM</option>
                                            </select>
                                        </div>
                                    </div>
                                    <Button
                                        variant="outline"
                                        className="w-full dark:bg-gray-800 dark:text-orange-300"
                                        onClick={handleRescheduleCopy}
                                        disabled={!rescheduleDate || !rescheduleTime}
                                    >
                                        Copy Reschedule Message
                                    </Button>
                                </div>
                            </div>
                        )}
                        <TabsContent value="messages">
                            <Card className="shadow-2xl border border-orange-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900 mx-1 sm:mx-5 rounded-2xl overflow-x-auto">
                                <CardHeader>
                                    <CardTitle className="dark:text-orange-200">Contact Messages</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {loading ? (
                                        <Skeleton className="h-40 w-full dark:bg-gray-800" />
                                    ) : (
                                        <div className="overflow-x-auto w-full">
                                            <Table className="min-w-[700px] text-sm">
                                                <TableHeader>
                                                    <TableRow className="bg-orange-50 dark:bg-gray-800 sticky top-0 z-10">
                                                        <TableHead className="font-bold text-orange-700 dark:text-orange-300 px-2 sm:px-6 py-3">Name</TableHead>
                                                        <TableHead className="font-bold text-orange-700 dark:text-orange-300 px-2 sm:px-6 py-3">Email</TableHead>
                                                        <TableHead className="font-bold text-orange-700 dark:text-orange-300 px-2 sm:px-6 py-3">Service</TableHead>
                                                        <TableHead className="font-bold text-orange-700 dark:text-orange-300 px-2 sm:px-6 py-3">Date</TableHead>
                                                        <TableHead className="font-bold text-orange-700 dark:text-orange-300 px-2 sm:px-6 py-3">Message</TableHead>
                                                        <TableHead className="font-bold text-orange-700 dark:text-orange-300 px-2 sm:px-6 py-3 text-center">Finished</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    {messages.map((msg, i) => (
                                                        <TableRow
                                                            key={msg.id}
                                                            className={`transition-all duration-200 bg-white dark:bg-gray-950 hover:shadow-lg hover:bg-orange-50 dark:hover:bg-gray-800 ${selectedRow === i ? 'bg-orange-100 dark:bg-gray-800 ring-2 ring-orange-400' : ''}`}
                                                            style={{ cursor: 'pointer' }}
                                                            onClick={() => handleRowSelect(i)}
                                                        >
                                                            <TableCell className="px-2 sm:px-6 py-3 font-semibold text-orange-600 dark:text-orange-300">{msg.name}</TableCell>
                                                            <TableCell className="px-2 sm:px-6 py-3 text-gray-700 dark:text-orange-200">
                                                                <button
                                                                    className="hover:text-orange-500 dark:hover:text-orange-300 focus:outline-none"
                                                                    onClick={e => { e.stopPropagation(); handleCopyEmail(msg.email, i); }}
                                                                    title="Copy email"
                                                                    type="button"
                                                                >
                                                                    {msg.email}
                                                                </button>
                                                                {copiedEmailIndex === i && (
                                                                    <span className="ml-2 text-xs text-orange-500 dark:text-orange-300 font-semibold">Copied!</span>
                                                                )}
                                                            </TableCell>
                                                            <TableCell className="px-2 sm:px-6 py-3 text-orange-500 dark:text-orange-300 font-medium">{msg.service}</TableCell>
                                                            <TableCell className="px-2 sm:px-6 py-3 text-gray-500 dark:text-orange-200">
                                                                {msg.day && msg.time
                                                                    ? (() => {
                                                                        let dateObj;
                                                                        if (/am|pm/i.test(msg.time)) {
                                                                            const [timePart, ampm] = msg.time.split(' ');
                                                                            let [hour, minute] = timePart.split(':').map(Number);
                                                                            if (ampm.toUpperCase() === 'PM' && hour < 12) hour += 12;
                                                                            if (ampm.toUpperCase() === 'AM' && hour === 12) hour = 0;
                                                                            dateObj = new Date(`${msg.day}T${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`);
                                                                        } else {
                                                                            dateObj = new Date(`${msg.day}T${msg.time}`);
                                                                        }
                                                                        return dateObj.toLocaleString();
                                                                    })()
                                                                    : '—'}
                                                            </TableCell>
                                                            <TableCell className="px-2 sm:px-6 py-3 max-w-xs truncate text-gray-800 dark:text-orange-200" title={msg.message}>{msg.message}</TableCell>
                                                            <TableCell className="px-2 sm:px-6 py-3 text-center">
                                                                <button
                                                                    className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 focus:outline-none"
                                                                    title="Mark as complete"
                                                                    onClick={e => { e.stopPropagation(); handleComplete(msg.id); }}
                                                                    type="button"
                                                                >
                                                                    <CheckCircle2 className="w-6 h-6" />
                                                                </button>
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="calendar">
                            <Card className="shadow-xl border border-orange-200 dark:border-gray-800 bg-white/90 dark:bg-gray-900 mx-1 sm:mx-5 ">
                                <CardHeader>
                                    <CardTitle className="dark:text-orange-200">Calendar</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="overflow-x-auto">
                                        <CalendarView events={calendarEvents} />
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>


                </div>
            </div>
        </div>
    );
};

export default Dashboard;
