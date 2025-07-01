import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, MapPin, Phone, Facebook, Youtube, Instagram } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [atSevaOpen, setAtSevaOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === '/';

    useEffect(() => {
        if (!isHome) return;
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [isHome]);

    const handleLocationsClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            navigate('/');
            // Wait for navigation to complete, then scroll
            setTimeout(() => {
                const element = document.getElementById('location');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', });
                }
            }, 100);
        } else {
            const element = document.getElementById('location');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const handleAppointmentClick = () => {
        navigate('/contact#form');
        if (window.innerWidth <= 768) {
            window.location.href = 'tel:732-986-6576';
        }
    };

    const navItems = [
        { name: 'Services', hasDropdown: true },
        { name: 'At SEVA', hasDropdown: true },
        { name: 'Locations', hasDropdown: false, link: '/#location' },
        { name: 'Contact Us', hasDropdown: false, link: '/contact' },
    ];

    // Determine header and text styles
    const headerBg = isHome ? (scrolled ? 'bg-white shadow' : 'bg-transparent') : 'bg-white shadow';
    const textColor = isHome ? (scrolled ? 'text-black' : 'text-white') : 'text-black';
    const logoSrc = isHome ? (scrolled ? '/logo.png' : '/logo-clear.png') : '/logo.png';

    // Helper for active link
    const isActive = (path: string) => {
        if (path === '/') return location.pathname === '/';
        if (path.startsWith('/#')) return location.hash === path.replace('/', '');
        return location.pathname === path;
    };

    return (
        <header className={`sticky top-0 left-0 right-0 z-50 transition-colors duration-300 ${headerBg}`}>
            {/* Top Bar - hidden on mobile */}
            <div className={`transition-colors pt-5 duration-300 ${textColor} hidden lg:block`}>
                <div className="max-w-3xl ml-auto px-4 sm:px-6 lg:px-8 ">
                    <div className="flex items-center justify-between py-2.5 text-base">
                        <div className={`flex items-center space-x-6 ${textColor}`}>
                            <div className="flex items-center space-x-4">
                                <Facebook className="w-5 h-5 hover:text-orange-300 cursor-pointer transition-colors" />
                                <Youtube className="w-5 h-5 hover:text-orange-300 cursor-pointer transition-colors" />
                                <Instagram className="w-5 h-5 hover:text-orange-300 cursor-pointer transition-colors" />
                            </div>
                            <div className="flex items-center space-x-1">
                                <MapPin className="w-4 h-4" />
                                <span>Based in NY</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <Phone className="w-4 h-4" />
                                <span>732-986-6576</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={handleAppointmentClick}
                                className={`font-bold text-lg px-5 py-2 rounded transition-colors ${isHome ? (scrolled ? 'bg-orange-800 hover:bg-orange-900 text-white' : 'bg-orange-600 hover:bg-orange-800 text-white') : 'bg-orange-800 hover:bg-orange-900 text-white'}`}
                            >
                                REQUEST AN APPOINTMENT
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="">
                <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between py-4">
                        {/* Logo - always visible, left-aligned on mobile */}
                        <Link to='/' className="flex items-center">
                            <div className={textColor}>
                                <div className="flex items-center space-x-2">
                                    <div>
                                        <img
                                            src={logoSrc}
                                            className='w-32 md:w-40 ml-0 md:ml-20 md:-mt-20 mt-0'
                                        />
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-8">
                            
                            <div className="relative group">
                                <button className={`flex items-center space-x-1 transition-colors py-2 font-medium ${isActive('/what-we-offer') || isActive('/what-we-treat') ? 'text-orange-700 font-bold underline underline-offset-4' : textColor.replace('text-', 'text-')} hover:text-orange-700`}>
                                    <span>Services</span>
                                    <ChevronDown className="w-4 h-4" />
                                </button>
                                <div className="absolute left-0 mt-2 w-56 bg-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                                    <Link to="/what-we-offer" className={`block px-6 py-3 text-gray-800 hover:bg-orange-50 hover:text-orange-700 transition-colors ${isActive('/what-we-offer') ? 'text-orange-700 font-bold underline underline-offset-4' : ''}`}>What We Offer</Link>
                                    <Link to="/what-we-treat" className={`block px-6 py-3 text-gray-800 hover:bg-orange-50 hover:text-orange-700 transition-colors ${isActive('/what-we-treat') ? 'text-orange-700 font-bold underline underline-offset-4' : ''}`}>What We Treat</Link>
                                </div>
                            </div>
                            <div className="relative group">
                                <button className={`flex items-center space-x-1 transition-colors py-2 font-medium ${isActive('/reviews') || isActive('/faq') ? 'text-orange-700 font-bold underline underline-offset-4' : textColor.replace('text-', 'text-')} hover:text-orange-700`}>
                                    <span>At SEVA</span>
                                    <ChevronDown className="w-4 h-4" />
                                </button>
                                <div className="absolute left-0 mt-2 w-56 bg-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                                    <Link to="/reviews" className={`block px-6 py-3 text-gray-800 hover:bg-orange-50 hover:text-orange-700 transition-colors ${isActive('/reviews') ? 'text-orange-700 font-bold underline underline-offset-4' : ''}`}>Reviews</Link>
                                    <Link to="/faq" className={`block px-6 py-3 text-gray-800 hover:bg-orange-50 hover:text-orange-700 transition-colors ${isActive('/faq') ? 'text-orange-700 font-bold underline underline-offset-4' : ''}`}>FAQ</Link>
                                </div>
                            </div>
                            <Link
                                to="/#location"
                                className={`flex items-center space-x-1 transition-colors py-2 font-medium ${location.hash === '#location' ? 'text-orange-700 font-bold underline underline-offset-4' : textColor.replace('text-', 'text-')} hover:text-orange-700`}
                            >
                                <span>Locations</span>
                            </Link>
                            <Link
                                to="/contact"
                                className={`flex items-center space-x-1 transition-colors py-2 font-medium ${isActive('/contact') ? 'text-orange-700 font-bold underline underline-offset-4' : textColor.replace('text-', 'text-')} hover:text-orange-700`}
                            >
                                <span>Contact Us</span>
                            </Link>
                        </nav>

                        {/* Hamburger for mobile only */}
                        <button
                            className="block lg:hidden text-3xl p-2 focus:outline-none"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <Menu className="w-7 h-7" />
                        </button>
                    </div>
                </div>

                {/* Sidebar for mobile */}
                {isMenuOpen && (
                    <>
                        {/* Overlay */}
                        <div
                            className="fixed inset-0 bg-black bg-opacity-40 z-50"
                            onClick={() => setIsMenuOpen(false)}
                        />
                        {/* Sidebar */}
                        <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 flex flex-col p-6 animate-slide-in">
                            <button
                                className="self-end mb-8 text-gray-700 hover:text-orange-600"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <X className="w-7 h-7" />
                            </button>
                            <nav className="flex flex-col space-y-6 mt-4">
                                <Link
                                    to="/"
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`text-lg font-medium transition-colors ${isActive('/') ? 'text-orange-700 font-bold underline underline-offset-4' : 'text-gray-800'} hover:text-orange-600`}
                                >
                                    Home
                                </Link>
                                {/* Services Dropdown */}
                                <div>
                                    <button
                                        className="flex items-center justify-between w-full text-lg font-medium text-gray-800 hover:text-orange-600 transition-colors"
                                        onClick={() => setServicesOpen((v) => !v)}
                                    >
                                        <span>Services</span>
                                        <ChevronDown className={`w-5 h-5 ml-2 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {servicesOpen && (
                                        <div className="ml-4 mt-2 flex flex-col space-y-2">
                                            <Link
                                                to="/what-we-offer"
                                                onClick={() => setIsMenuOpen(false)}
                                                className={`text-base transition-colors ${isActive('/what-we-offer') ? 'text-orange-700 font-bold underline underline-offset-4' : 'text-gray-700'} hover:text-orange-600`}
                                            >
                                                What We Offer
                                            </Link>
                                            <Link
                                                to="/what-we-treat"
                                                onClick={() => setIsMenuOpen(false)}
                                                className={`text-base transition-colors ${isActive('/what-we-treat') ? 'text-orange-700 font-bold underline underline-offset-4' : 'text-gray-700'} hover:text-orange-600`}
                                            >
                                                What We Treat
                                            </Link>
                                        </div>
                                    )}
                                </div>
                                {/* At SEVA Dropdown */}
                                <div>
                                    <button
                                        className="flex items-center justify-between w-full text-lg font-medium text-gray-800 hover:text-orange-600 transition-colors"
                                        onClick={() => setAtSevaOpen((v) => !v)}
                                    >
                                        <span>At SEVA</span>
                                        <ChevronDown className={`w-5 h-5 ml-2 transition-transform ${atSevaOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {atSevaOpen && (
                                        <div className="ml-4 mt-2 flex flex-col space-y-2">
                                            <Link
                                                to="/reviews"
                                                onClick={() => setIsMenuOpen(false)}
                                                className={`text-base transition-colors ${isActive('/reviews') ? 'text-orange-700 font-bold underline underline-offset-4' : 'text-gray-700'} hover:text-orange-600`}
                                            >
                                                Reviews
                                            </Link>
                                            <Link
                                                to="/faq"
                                                onClick={() => setIsMenuOpen(false)}
                                                className={`text-base transition-colors ${isActive('/faq') ? 'text-orange-700 font-bold underline underline-offset-4' : 'text-gray-700'} hover:text-orange-600`}
                                            >
                                                FAQ
                                            </Link>
                                        </div>
                                    )}
                                </div>
                                {/* Other links */}
                                <Link
                                    to="/#location"
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`text-lg font-medium transition-colors ${location.hash === '#location' ? 'text-orange-700 font-bold underline underline-offset-4' : 'text-gray-800'} hover:text-orange-600`}
                                >
                                    Locations
                                </Link>
                                <Link
                                    to="/contact"
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`text-lg font-medium transition-colors ${isActive('/contact') ? 'text-orange-700 font-bold underline underline-offset-4' : 'text-gray-800'} hover:text-orange-600`}
                                >
                                    Contact Us
                                </Link>
                                <button
                                    onClick={() => { setIsMenuOpen(false); handleAppointmentClick(); }}
                                    className="mt-8 bg-orange-700 hover:bg-orange-800 text-white px-4 py-3 rounded-lg font-bold text-lg transition-colors"
                                >
                                    REQUEST AN APPOINTMENT
                                </button>
                            </nav>
                        </div>
                        <style>{`
                            @keyframes slide-in {
                                from { transform: translateX(100%); }
                                to { transform: translateX(0); }
                            }
                            .animate-slide-in {
                                animation: slide-in 0.3s ease-out;
                            }
                        `}</style>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
