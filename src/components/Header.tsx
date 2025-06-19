
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
    <header className="bg-white w-full py-2 lg:py-3 px-4 sm:px-6 lg:px-8 shadow-sm">
      <nav className="flex w-full max-w-7xl items-center justify-between mx-auto">
        {/* Logo - Responsive sizing */}
        <div className="flex-shrink-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/fe54aceb0cc448d8a698709588f64afc/95f0edaf107469d9eea8a410483c42eaf7ce70c3?placeholderIfAbsent=true"
            alt="Surabhi Financial Services Logo"
            className="aspect-[1.12] object-contain w-14 sm:w-16 md:w-20 lg:w-[90px]"
          />
        </div>
        
        {/* Desktop Navigation - Hidden on tablet and mobile */}
        <div className="hidden xl:flex items-center gap-6 text-base text-black font-medium">
          {navigationItems.map((item) => (
            <button 
              key={item.key}
              className="hover:text-[rgba(68,64,175,1)] transition-colors cursor-pointer whitespace-nowrap py-1 px-1"
              onClick={() => handleNavClick(item.key)}
              aria-label={`Navigate to ${item.label}`}
            >
              {item.label}
            </button>
          ))}
          <button
            className="bg-[rgba(68,64,175,1)] hover:bg-[rgba(58,54,165,1)] text-white px-4 py-2 rounded-[25px] transition-colors cursor-pointer text-base font-medium whitespace-nowrap ml-2"
            onClick={handleBookMeeting}
            aria-label="Book a Meeting"
          >
            Book a Meeting
          </button>
        </div>

        {/* Tablet and Mobile Navigation */}
        <div className="flex xl:hidden items-center gap-2">
          {/* Book Meeting Button - Always visible */}
          <button
            className="bg-[rgba(68,64,175,1)] hover:bg-[rgba(58,54,165,1)] text-white px-3 sm:px-4 py-2 rounded-[25px] transition-colors cursor-pointer text-sm sm:text-base font-medium whitespace-nowrap"
            onClick={handleBookMeeting}
            aria-label="Book a Meeting"
          >
            Book Meeting
          </button>

          {/* Mobile Menu Trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5 text-[rgba(68,64,175,1)]" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Navigation Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-2 mt-6">
                {navigationItems.map((item) => (
                  <button
                    key={item.key}
                    className="text-left text-lg font-medium p-3 hover:bg-gray-100 rounded-md transition-colors"
                    onClick={() => handleNavClick(item.key)}
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  className="bg-[rgba(68,64,175,1)] hover:bg-[rgba(58,54,165,1)] text-white px-6 py-3 rounded-[25px] transition-colors cursor-pointer text-lg font-medium mt-4"
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
