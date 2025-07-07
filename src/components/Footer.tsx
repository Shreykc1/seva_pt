import React from 'react';
import { MapPin, Phone, Mail, Facebook, Youtube, Instagram, Clock } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    'What We Offer', 'What We Treat', 'Reviews', 'FAQ', 'Locations', 'Contact'
  ];

  const services = [
    'Physical Therapy', 'Massage Therapy', 'Wellness'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                <div className="text-lg font-bold">S</div>
              </div>
              <div>
                <div className="text-lg font-bold">SEVA</div>
                <div className="text-sm opacity-75">Physical Therapy</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Providing personalized, one-on-one physical therapy and wellness services
              across New York City for over 5 years.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
              <Youtube className="w-6 h-6 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <div className='-mt-1'>
                  <a href="tel:732-986-6576" className="text-gray-300">732-986-6576</a>
                  <p className="text-sm text-gray-400">Main Line</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <div className='-mt-1'>
                  <a href="mailto:sevaptny@gmail.com" className="text-gray-300">sevaptny@gmail.com</a>
                  <p className="text-sm text-gray-400">General Inquiries</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <div className='-mt-1'>
                  <p className="text-gray-300">Mon-Fri: 11AM-7PM</p>
                  <p className="text-gray-300">Sat: 10AM-3PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 SEVA Physical Therapy. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                HIPAA Notice
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
