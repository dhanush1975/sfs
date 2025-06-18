
import React from 'react';

interface HeaderProps {
  onBookMeeting?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookMeeting }) => {
  const handleNavClick = (section: string) => {
    console.log(`Navigate to ${section}`);
  };

  const handleBookMeeting = () => {
    if (onBookMeeting) {
      onBookMeeting();
    } else {
      console.log('Book a meeting clicked');
    }
  };

  return (
    <header className="bg-white w-full pt-[13px] px-4 sm:px-6 lg:px-8">
      <nav className="flex w-full max-w-7xl items-center justify-between mx-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/fe54aceb0cc448d8a698709588f64afc/95f0edaf107469d9eea8a410483c42eaf7ce70c3?placeholderIfAbsent=true"
          alt="Surabhi Financial Services Logo"
          className="aspect-[1.12] object-contain w-20 sm:w-24 lg:w-[102px] shrink-0"
        />
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-[49px] text-lg xl:text-xl text-black font-medium">
          <button 
            className="hover:text-[rgba(68,64,175,1)] transition-colors cursor-pointer"
            onClick={() => handleNavClick('home')}
            aria-label="Navigate to Home"
          >
            Home
          </button>
          <button 
            className="hover:text-[rgba(68,64,175,1)] transition-colors cursor-pointer"
            onClick={() => handleNavClick('services')}
            aria-label="Navigate to Services"
          >
            Services
          </button>
          <button 
            className="hover:text-[rgba(68,64,175,1)] transition-colors cursor-pointer"
            onClick={() => handleNavClick('events')}
            aria-label="Navigate to Events"
          >
            Events
          </button>
          <button 
            className="hover:text-[rgba(68,64,175,1)] transition-colors cursor-pointer"
            onClick={() => handleNavClick('about')}
            aria-label="Navigate to About Us"
          >
            About Us
          </button>
          <button 
            className="hover:text-[rgba(68,64,175,1)] transition-colors cursor-pointer"
            onClick={() => handleNavClick('contact')}
            aria-label="Navigate to Contact Us"
          >
            Contact US
          </button>
          <button
            className="bg-[rgba(68,64,175,1)] hover:bg-[rgba(58,54,165,1)] text-white px-3 lg:px-4 py-2 lg:py-2.5 rounded-[25px] transition-colors cursor-pointer text-base lg:text-xl"
            onClick={handleBookMeeting}
            aria-label="Book a Meeting"
          >
            Book a Meeting
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden bg-[rgba(68,64,175,1)] hover:bg-[rgba(58,54,165,1)] text-white px-4 py-2 rounded-[25px] transition-colors cursor-pointer text-sm"
          onClick={handleBookMeeting}
          aria-label="Book a Meeting"
        >
          Book Meeting
        </button>
      </nav>
    </header>
  );
};
