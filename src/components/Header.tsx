import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, MapPin, Phone, Facebook, Youtube, Instagram } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
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

    return (
        <header className={`sticky top-0 left-0 right-0 z-50 transition-colors duration-300 ${headerBg}`}>
            {/* Top Bar */}
            <div className={`transition-colors pt-5 duration-300 ${textColor}`}>
                <div className="max-w-3xl ml-auto px-4 sm:px-6 lg:px-8 ">
                    <div className="flex items-center justify-between py-2.5 text-base">
                        <div className={`flex items-center space-x-6 ${textColor}`}>
                            <div className="flex items-center space-x-4">
                                <Facebook className="w-5 h-5 hover:text-purple-300 cursor-pointer transition-colors" />
                                <Youtube className="w-5 h-5 hover:text-purple-300 cursor-pointer transition-colors" />
                                <Instagram className="w-5 h-5 hover:text-purple-300 cursor-pointer transition-colors" />
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
                                className={`font-bold text-lg px-5 py-2 rounded transition-colors ${isHome ? (scrolled ? 'bg-purple-800 hover:bg-purple-900 text-white' : 'bg-purple-600 hover:bg-purple-800 text-white') : 'bg-purple-800 hover:bg-purple-900 text-white'}`}
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
                        {/* Logo */}
                        <Link to='/' className="flex items-center">
                            <div className={textColor}>
                                <div className="flex items-center space-x-2">
                                    <div>
                                        <img
                                            src={logoSrc}
                                            className='w-40 ml-20 -mt-20'
                                        />
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <div key={item.name} className="relative group">
                                    {item.name === 'Services' ? (
                                        <>
                                            <button className={`flex items-center space-x-1 transition-colors py-2 font-medium ${textColor.replace('text-', 'text-')} hover:text-purple-700`}>
                                                <span>{item.name}</span>
                                                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                                            </button>
                                            <div className="absolute left-0 mt-2 w-56 bg-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                                                <Link to="/what-we-offer" className="block px-6 py-3 text-gray-800 hover:bg-purple-50 hover:text-purple-700 transition-colors">What We Offer</Link>
                                                <Link to="/what-we-treat" className="block px-6 py-3 text-gray-800 hover:bg-purple-50 hover:text-purple-700 transition-colors">What We Treat</Link>
                                            </div>
                                        </>
                                    ) : item.name === 'At SEVA' ? (
                                        <>
                                            <button className={`flex items-center space-x-1 transition-colors py-2 font-medium ${textColor.replace('text-', 'text-')} hover:text-purple-700`}>
                                                <span>{item.name}</span>
                                                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                                            </button>
                                            <div className="absolute left-0 mt-2 w-56 bg-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                                                <Link to="/reviews" className="block px-6 py-3 text-gray-800 hover:bg-purple-50 hover:text-purple-700 transition-colors">Reviews</Link>
                                                <Link to="/faq" className="block px-6 py-3 text-gray-800 hover:bg-purple-50 hover:text-purple-700 transition-colors">FAQ</Link>
                                                <Link to="/about" className="block px-6 py-3 text-gray-800 hover:bg-purple-50 hover:text-purple-700 transition-colors">Tips and articles</Link>
                                            </div>
                                        </>
                                    ) : item.name === 'Locations' ? (
                                        <button
                                            onClick={handleLocationsClick}
                                            className={`flex items-center space-x-1 transition-colors py-2 font-medium ${textColor.replace('text-', 'text-')} hover:text-purple-700`}
                                        >
                                            <span>{item.name}</span>
                                        </button>
                                    ) : item.name === 'Contact Us' ? (
                                        <Link to='/contact'

                                            className={`flex items-center space-x-1 transition-colors py-2 font-medium ${textColor.replace('text-', 'text-')} hover:text-purple-700`}
                                        >
                                            <span>{item.name}</span>
                                        </Link>
                                    )

                                        : (
                                            <button className={`flex items-center space-x-1 transition-colors py-2 font-medium ${textColor.replace('text-', 'text-')} hover:text-purple-700`}>
                                                <span>{item.name}</span>
                                                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                                            </button>
                                        )}
                                </div>
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className={`lg:hidden ${textColor}`}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden bg-white/95 backdrop-blur-md">
                        <div className="px-4 py-4 space-y-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    className="block w-full text-left text-gray-800 hover:text-purple-600 py-2 font-medium"
                                >
                                    {item.name}
                                </button>
                            ))}
                            <div className="pt-4 space-y-2">
                                <button
                                    onClick={handleAppointmentClick}
                                    className="w-full bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded transition-colors"
                                >
                                    REQUEST AN APPOINTMENT
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
