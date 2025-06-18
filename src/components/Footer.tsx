
import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[rgba(234,242,254,1)] self-stretch flex w-full flex-col items-center text-black mt-16 lg:mt-[166px] pt-16 pb-12 lg:pt-20 lg:pb-16 px-4 sm:px-6 lg:px-20">
      <div className="flex w-full max-w-4xl flex-col items-center text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-800">
          Surabhi Financial Services
        </h2>
        
        <div className="flex items-center gap-6 mt-8 lg:mt-12">
          <a 
            href="#" 
            className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 group"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="w-6 h-6 text-gray-700 group-hover:text-pink-600 transition-colors" />
          </a>
          <a 
            href="#" 
            className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 group"
            aria-label="Connect with us on LinkedIn"
          >
            <Linkedin className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
          </a>
        </div>
        
        <div className="w-24 h-px bg-gray-400 mt-8 lg:mt-12"></div>
        
        <p className="text-sm font-medium text-gray-600 mt-6 lg:mt-8 tracking-wide">
          © 2025 Surabhi Financial Services. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
