import React from 'react';
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <MapPin className="h-6 w-6 text-blue-500" />
              <span className="text-white text-xl font-bold">Hajri</span>
            </div>
            <p className="text-gray-400 mb-6">
              Revolutionizing attendance tracking with advanced geolocation technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-blue-500 transition">About Us</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-blue-500 transition">Features</Link></li>
              <li><Link to="/solutions" className="text-gray-400 hover:text-blue-500 transition">Solutions</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-blue-500 transition">Pricing</Link></li>
              <li><Link to="/resources" className="text-gray-400 hover:text-blue-500 transition">Resources</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-6">Support</h3>
            <ul className="space-y-4">
              <li><Link to="/contact" className="text-gray-400 hover:text-blue-500 transition">Help Center</Link></li>
              <li><Link to="/resources" className="text-gray-400 hover:text-blue-500 transition">Documentation</Link></li>
              <li><Link to="/resources" className="text-gray-400 hover:text-blue-500 transition">API Reference</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-blue-500 transition">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-500" />
                <span className="text-gray-400">support@hajri.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-500" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Hajri. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-500 text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-blue-500 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-blue-500 text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;