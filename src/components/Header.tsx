
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

interface HeaderProps {
  onBookMeeting?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookMeeting }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (section: string) => {
    console.log(`Navigate to ${section}`);
    setIsOpen(false); // Close mobile menu when nav item is clicked
  };

  const handleBookMeeting = () => {
    if (onBookMeeting) {
      onBookMeeting();
    } else {
      console.log('Book a meeting clicked');
    }
    setIsOpen(false); // Close mobile menu when button is clicked
  };

  const navigationItems = [
    { label: 'Home', key: 'home' },
    { label: 'Services', key: 'services' },
    { label: 'Events', key: 'events' },
    { label: 'About Us', key: 'about' },
    { label: 'Contact US', key: 'contact' },
  ];

  return (
    <header className="bg-white w-full py-4 lg:py-6 px-4 sm:px-6 lg:px-8 shadow-sm">
      <nav className="flex w-full max-w-7xl items-center justify-between mx-auto">
        {/* Logo - Responsive sizing */}
        <div className="flex-shrink-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/fe54aceb0cc448d8a698709588f64afc/95f0edaf107469d9eea8a410483c42eaf7ce70c3?placeholderIfAbsent=true"
            alt="Surabhi Financial Services Logo"
            className="aspect-[1.12] object-contain w-16 sm:w-20 md:w-24 lg:w-[102px]"
          />
        </div>
        
        {/* Desktop Navigation - Hidden on tablet and mobile */}
        <div className="hidden xl:flex items-center gap-10 text-lg text-black font-medium">
          {navigationItems.map((item) => (
            <button 
              key={item.key}
              className="hover:text-[rgba(68,64,175,1)] transition-colors cursor-pointer whitespace-nowrap py-2 px-1"
              onClick={() => handleNavClick(item.key)}
              aria-label={`Navigate to ${item.label}`}
            >
              {item.label}
            </button>
          ))}
          <button
            className="bg-[rgba(68,64,175,1)] hover:bg-[rgba(58,54,165,1)] text-white px-6 py-3 rounded-[25px] transition-colors cursor-pointer text-lg font-medium whitespace-nowrap ml-4"
            onClick={handleBookMeeting}
            aria-label="Book a Meeting"
          >
            Book a Meeting
          </button>
        </div>

        {/* Tablet and Mobile Navigation */}
        <div className="flex xl:hidden items-center gap-4">
          {/* Book Meeting Button - Always visible */}
          <button
            className="bg-[rgba(68,64,175,1)] hover:bg-[rgba(58,54,165,1)] text-white px-4 sm:px-5 py-2.5 rounded-[25px] transition-colors cursor-pointer text-sm sm:text-base font-medium whitespace-nowrap"
            onClick={handleBookMeeting}
            aria-label="Book a Meeting"
          >
            Book Meeting
          </button>

          {/* Mobile Menu Trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="p-2.5 hover:bg-gray-100 rounded-md transition-colors"
                aria-label="Open navigation menu"
              >
                <Menu className="h-6 w-6 text-[rgba(68,64,175,1)]" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Navigation Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-3 mt-8">
                {navigationItems.map((item) => (
                  <button
                    key={item.key}
                    className="text-left text-lg font-medium p-4 hover:bg-gray-100 rounded-md transition-colors"
                    onClick={() => handleNavClick(item.key)}
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  className="bg-[rgba(68,64,175,1)] hover:bg-[rgba(58,54,165,1)] text-white px-6 py-4 rounded-[25px] transition-colors cursor-pointer text-lg font-medium mt-6"
                  onClick={handleBookMeeting}
                >
                  Book a Meeting
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};
