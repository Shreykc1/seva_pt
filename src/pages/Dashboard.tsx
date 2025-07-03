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



function StatCard({ title, value, icon, color }: { title: string, value: string | number, icon: React.ReactNode, color: string }) {
    return (
        <Card className="flex-1 min-w-[180px] shadow-xl border border-orange-200 bg-white">
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
    const navigate = useNavigate();

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
            const start = new Date(`${msg.day}T${msg.time}`);
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

    const handleComplete = async (id: string) => {
        setMessages(prev => prev.filter(msg => msg.id !== id));
        await deleteDocument('contactMessages', id);
    };

    return (
        <div className="flex min-h-screen bg-white to-orange-100 w-full">
            {/* Main Content */}
            <div className="flex-1 flex flex-col min-h-screen relative">
                {/* Header */}
                <header className="flex items-center justify-between px-12 py-2 bg-white m-10 rounded-lg shadow-lg border border-orange-200 relative z-10">
                    <div className="flex items-center gap-6">
                        <h2 className='h-10 w-10 bg-orange-500 flex justify-center items-center text-white rounded-full font-bold text-lg'>
                            D
                        </h2>
                        <div className=''>
                            <div className="font-bold text-lg text-orange-700">Dr. Dipti Shah</div>
                            <Badge className="mt-0 rounded-full bg-orange-400 text-[10px] ">Online</Badge>
                        </div>
                    </div>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="outline" onClick={() => {
                                    localStorage.removeItem('isAuthenticated');
                                    localStorage.removeItem('userEmail');
                                    navigate('/signin');
                                }}>Logout <LogOut /></Button>
                            </TooltipTrigger>
                            <TooltipContent>Logout</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </header>
                {/* Stat Cards - Overlap header */}
                <div className="mt-0 px-12">
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-stretch">
                        {loading ? (
                            Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-32 w-full" />)
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
                <div className="flex-1 px-8 pb-8 pt-8 mx-auto w-full">

                    <Tabs defaultValue="messages" className="w-full">
                        <div className="flex items-center justify-between mb-6 mx-6">
                            <TabsList className="rounded-lg bg-orange-50 shadow">
                                <TabsTrigger value="messages" className="rounded-lg data-[state=active]:bg-orange-500 data-[state=active]:text-white">Messages</TabsTrigger>
                                <TabsTrigger value="calendar" className="rounded-lg data-[state=active]:bg-orange-500 data-[state=active]:text-white">Calendar</TabsTrigger>
                            </TabsList>
                            <Button
                                variant="outline"
                                className="ml-4 flex-shrink-0 relative"
                                onClick={handleCopyTemplate}
                                disabled={selectedRow === null}
                            >
                                {copiedIndex === selectedRow ? 'Copied!' : 'Copy Msg Template'}
                            </Button>
                        </div>
                        <TabsContent value="messages">
                            <Card className="shadow-2xl border border-orange-200 bg-white/95 mx-5 rounded-2xl overflow-hidden">
                                <CardHeader>
                                    <CardTitle>Contact Messages</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {loading ? (
                                        <Skeleton className="h-40 w-full" />
                                    ) : (
                                        <div className="overflow-x-auto">
                                            <Table className="min-w-full text-sm">
                                                <TableHeader>
                                                    <TableRow className="bg-orange-50 sticky top-0 z-10">
                                                        <TableHead className="font-bold text-orange-700 px-6 py-3">Name</TableHead>
                                                        <TableHead className="font-bold text-orange-700 px-6 py-3">Email</TableHead>
                                                        <TableHead className="font-bold text-orange-700 px-6 py-3">Service</TableHead>
                                                        <TableHead className="font-bold text-orange-700 px-6 py-3">Date</TableHead>
                                                        <TableHead className="font-bold text-orange-700 px-6 py-3">Message</TableHead>
                                                        <TableHead className="font-bold text-orange-700 px-6 py-3 text-center">Finished</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    {messages.map((msg, i) => (
                                                        <TableRow
                                                            key={msg.id}
                                                            className={`transition-all duration-200 bg-white hover:shadow-lg hover:bg-orange-50 ${selectedRow === i ? 'ring-2 ring-orange-400' : ''}`}
                                                            style={{ cursor: 'pointer' }}
                                                            onClick={() => handleRowSelect(i)}
                                                        >
                                                            <TableCell className="px-6 py-3 font-semibold text-orange-600">{msg.name}</TableCell>
                                                            <TableCell className="px-6 py-3 text-gray-700">
                                                                <button
                                                                    className="hover:text-orange-500 focus:outline-none"
                                                                    onClick={e => { e.stopPropagation(); handleCopyEmail(msg.email, i); }}
                                                                    title="Copy email"
                                                                    type="button"
                                                                >
                                                                    {msg.email}
                                                                </button>
                                                                {copiedEmailIndex === i && (
                                                                    <span className="ml-2 text-xs text-orange-500 font-semibold">Copied!</span>
                                                                )}
                                                            </TableCell>
                                                            <TableCell className="px-6 py-3 text-orange-500 font-medium">{msg.service}</TableCell>
                                                            <TableCell className="px-6 py-3 text-gray-500">
                                                                {msg.day && msg.time
                                                                    ? new Date(`${msg.day}T${msg.time}`).toLocaleString()
                                                                    : '—'}
                                                            </TableCell>
                                                            <TableCell className="px-6 py-3 max-w-xs truncate text-gray-800" title={msg.message}>{msg.message}</TableCell>
                                                            <TableCell className="px-6 py-3 text-center">
                                                                <button
                                                                    className="text-green-600 hover:text-green-800 focus:outline-none"
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
                            <Card className="shadow-xl border border-orange-200 bg-white/90 mx-5 ">
                                <CardHeader>
                                    <CardTitle>Calendar</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CalendarView events={calendarEvents} />
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
