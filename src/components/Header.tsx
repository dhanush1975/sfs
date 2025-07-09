import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

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
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (section: string) => {
    switch (section) {
      case 'home':
        navigate('/');
        break;
      case 'services':
        navigate('/services');
        break;
      case 'about':
        navigate('/Aboutus');
        break;
      case 'contact':
        navigate('/Contact');
        break;
      default:
        console.log(`Navigate to ${section}`);
    }
    setIsOpen(false);
  };

  const handleBookMeeting = () => {
    navigate('book-meeting');
    setIsOpen(false);
  };

  const baseItems = [
    { label: 'Home', key: 'home' },
    { label: 'Services', key: 'services' },
    { label: 'About Us', key: 'about' },
    // { label: 'Contact Us', key: 'contact' },
  ];

  const navigationItems =
    location.pathname === '/contact'
      ? baseItems.filter((item) => item.key !== 'contact')
      : baseItems;

  return (
    <header className="bg-white w-full py-0.5 lg:py-1 px-4 sm:px-5 lg:px-6 shadow-sm">
      <nav className="flex w-full max-w-7xl items-center justify-between mx-auto">
        {/* Logo with responsive layout */}
        <Link to="/" className="flex-shrink-0 flex items-center">
          <div className="relative">
            <img
              src="/logo/logo.png"
              alt="Surabhi Financial Services Logo"
              className="h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-auto object-contain cursor-pointer transition-all duration-300 hover:scale-105"
            />
          </div>
        </Link>

        {/* Desktop + Tablet Navigation */}
        <div className="hidden md:flex items-center gap-6 text-base text-black font-medium">
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

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          {/* Book Meeting Button (mobile) */}
          <button
            className="bg-[rgba(68,64,175,1)] hover:bg-[rgba(58,54,165,1)] text-white px-3 sm:px-4 py-2 rounded-[25px] transition-colors cursor-pointer text-sm sm:text-base font-medium whitespace-nowrap"
            onClick={handleBookMeeting}
            aria-label="Book a Meeting"
          >
            Book Meeting
          </button>

          {/* Hamburger Menu */}
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