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
    <header className="bg-white w-full pt-[13px]">
      <nav className="flex w-full max-w-[1389px] items-stretch gap-5 text-xl text-black font-medium flex-wrap justify-between ml-2.5 max-md:max-w-full mx-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/fe54aceb0cc448d8a698709588f64afc/95f0edaf107469d9eea8a410483c42eaf7ce70c3?placeholderIfAbsent=true"
          alt="Surabhi Financial Services Logo"
          className="aspect-[1.12] object-contain w-[102px] shrink-0 max-w-full"
        />
        <div className="flex gap-[40px_49px] flex-wrap my-auto max-md:max-w-full">
          <button 
            className="mt-3.5 hover:text-[rgba(68,64,175,1)] transition-colors cursor-pointer"
            onClick={() => handleNavClick('home')}
            aria-label="Navigate to Home"
          >
            Home
          </button>
          <button 
            className="mt-3.5 hover:text-[rgba(68,64,175,1)] transition-colors cursor-pointer"
            onClick={() => handleNavClick('services')}
            aria-label="Navigate to Services"
          >
            Services
          </button>
          <button 
            className="mt-3.5 hover:text-[rgba(68,64,175,1)] transition-colors cursor-pointer"
            onClick={() => handleNavClick('events')}
            aria-label="Navigate to Events"
          >
            Events
          </button>
          <button 
            className="mt-3.5 hover:text-[rgba(68,64,175,1)] transition-colors cursor-pointer"
            onClick={() => handleNavClick('about')}
            aria-label="Navigate to About Us"
          >
            About Us
          </button>
          <button 
            className="mt-3.5 hover:text-[rgba(68,64,175,1)] transition-colors cursor-pointer"
            onClick={() => handleNavClick('contact')}
            aria-label="Navigate to Contact Us"
          >
            Contact US
          </button>
          <button
            className="self-stretch bg-[rgba(68,64,175,1)] hover:bg-[rgba(58,54,165,1)] gap-2.5 text-white p-2.5 rounded-[25px] transition-colors cursor-pointer"
            onClick={handleBookMeeting}
            aria-label="Book a Meeting"
          >
            Book a Meeting
          </button>
        </div>
      </nav>
    </header>
  );
};
