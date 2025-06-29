import React from 'react';
import { MapPin, Phone, Mail, Facebook, Youtube, Instagram, Clock } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    'About Us', 'Services', 'Locations', 'Providers', 'Sports Medicine', 'Contact'
  ];

  const services = [
    'Physical Therapy', 'Sports Medicine', 'Wellness Programs', 'Group Classes', 
    'Sports Performance', 'Injury Prevention'
  ];

  const locations = [
    'Manhattan - Midtown', 'Brooklyn - Park Slope', 'Queens - Astoria',
    'Manhattan - Upper East Side', 'Bronx - Riverdale', 'Staten Island - St. George'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                <div className="text-lg font-bold">C</div>
              </div>
              <div>
                <div className="text-lg font-bold">CYNERGY</div>
                <div className="text-sm opacity-75">the wellness den</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Providing personalized, one-on-one physical therapy and wellness services 
              across New York City for over 15 years.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
              <Youtube className="w-6 h-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
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
                  <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
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
                <Phone className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">(212) 974-7252</p>
                  <p className="text-sm text-gray-400">Main Line</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">info@cynergypt.com</p>
                  <p className="text-sm text-gray-400">General Inquiries</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Mon-Fri: 7AM-8PM</p>
                  <p className="text-gray-300">Sat: 8AM-4PM</p>
                  <p className="text-sm text-gray-400">Most Locations</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Cynergy Physical Therapy. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
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