import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, MapPin, Phone, Facebook, Youtube, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navItems = [
        { name: 'Services', hasDropdown: true },
        { name: 'At SEVA', hasDropdown: true },
        { name: 'Providers', hasDropdown: true },
        { name: 'Media', hasDropdown: true },
        { name: 'Locations', hasDropdown: true },
        { name: 'Sports Medicine', hasDropdown: true },
        { name: 'Sports Performance', hasDropdown: true },
        { name: 'Contact Us', hasDropdown: true },
    ];

    return (
        <header className={`sticky top-0 left-0 right-0 z-50 transition-colors duration-300 -mt-40 ${scrolled ? 'bg-white shadow' : 'bg-transparent'}`}>
            {/* Top Bar */}
            <div className={`transition-colors duration-300 ${scrolled ? 'text-black' : 'text-white'}`}>
                <div className="max-w-5xl ml-auto px-4 sm:px-6 lg:px-8 ">
                    <div className="flex items-center justify-between py-2.5 text-base">
                        <div className={`flex items-center space-x-6 ${scrolled ? 'text-black' : 'text-white'}`}>
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
                                <span>(212) 974-7252</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className={`font-bold text-lg px-5 py-2 rounded transition-colors ${scrolled ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-purple-600 hover:bg-purple-700 text-white'}`}>PAY BILL ONLINE</button>
                            <button className={`font-bold text-lg px-5 py-2 rounded transition-colors ${scrolled ? 'bg-purple-800 hover:bg-purple-900 text-white' : 'bg-purple-600 hover:bg-purple-800 text-white'}`}>REQUEST AN APPOINTMENT</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="">
                <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between py-4">
                        {/* Logo */}
                        <div className="flex items-center">
                            <div className={scrolled ? 'text-black' : 'text-white'}>
                                <div className="flex items-center space-x-2">
                                    <div className={`w-12 h-12 ${scrolled ? 'bg-purple-100' : 'bg-white/20'} rounded-full flex items-center justify-center`}>
                                        <div className="text-2xl font-bold">S</div>
                                    </div>
                                    <div>
                                        <div className="text-xl font-bold">SEVA PT</div>
                                        <div className="text-sm opacity-90">the wellness den</div>
                                        <div className="text-xs font-semibold tracking-wider">ADPT</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <div key={item.name} className="relative group">
                                    {item.name === 'Services' ? (
                                        <>
                                            <button className={`flex items-center space-x-1 transition-colors py-2 font-medium ${scrolled ? 'text-black hover:text-purple-700' : 'text-white hover:text-purple-300'}`}>
                                                <span>{item.name}</span>
                                                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                                            </button>
                                            <div className="absolute left-0 mt-2 w-56 bg-white rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                                                <Link to="/what-we-offer" className="block px-6 py-3 text-gray-800 hover:bg-purple-50 hover:text-purple-700 transition-colors">What We Offer</Link>
                                                <Link to="/what-we-treat" className="block px-6 py-3 text-gray-800 hover:bg-purple-50 hover:text-purple-700 transition-colors">What We Treat</Link>
                                            </div>
                                        </>
                                    ) : (
                                        <button className={`flex items-center space-x-1 transition-colors py-2 font-medium ${scrolled ? 'text-black hover:text-purple-700' : 'text-white hover:text-purple-300'}`}>
                                            <span>{item.name}</span>
                                            {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                                        </button>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className={`lg:hidden ${scrolled ? 'text-black' : 'text-white'}`}
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
                                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition-colors">
                                    PAY BILL ONLINE
                                </button>
                                <button className="w-full bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded transition-colors">
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
