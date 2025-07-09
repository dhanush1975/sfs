
import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`w-full flex flex-col items-center text-black py-6 px-4 sm:px-6 mt-16 ${className}`}>
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 text-center mb-6">
          Surabhi Financial Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Contact Us Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-700">
                Email: <a href="mailto:info@surabhifinsvs.com" className="hover:text-blue-600 hover:underline transition-colors">info@surabhifinsvs.com</a>
              </p>
              <p className="text-sm text-gray-700">
                Phone: <a href="tel:+1-555-123-4567" className="hover:text-blue-600 hover:underline transition-colors">+1 (555) 123-4567</a>
              </p>
            </div>
          </div>

          {/* Social Media and Copyright Section */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Follow Us</h3>
            <div className="flex items-center justify-center md:justify-end gap-4 mb-4">
              <a 
                href="https://www.instagram.com/surabhifinsvs/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full shadow hover:shadow-md transition-all duration-300 hover:scale-105 group"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-700 group-hover:text-pink-600" />
              </a>

              <a 
                href="https://www.linkedin.com/company/surabhi-financial-services/about/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full shadow hover:shadow-md transition-all duration-300 hover:scale-105 group"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-700 group-hover:text-blue-600" />
              </a>

              <a 
                href="https://www.facebook.com/profile.php?id=61577701412200"
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full shadow hover:shadow-md transition-all duration-300 hover:scale-105 group"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-700 group-hover:text-blue-500" />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gray-300 mt-6"></div>

        <p className="text-xs text-gray-600 mt-4 text-center">
          © 2025 Surabhi Financial Services. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
