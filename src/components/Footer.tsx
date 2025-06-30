
import React from 'react';
import { Camera, Contact } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-amber-500 font-bold text-xl">
              <Camera size={24} />
              <span>PORTFOLIO</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Capturing moments, creating memories. Professional photography and videography services.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-500">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Wedding Photography</li>
              <li>Event Videography</li>
              <li>Portrait Sessions</li>
              <li>Commercial Projects</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-500">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>info@portfolio.com</p>
              <p>+1 (555) 123-4567</p>
              <p>New York, NY</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
