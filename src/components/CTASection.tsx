
import React from 'react';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  onBookMeeting?: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onBookMeeting }) => {
  const handleBookMeeting = () => {
    if (onBookMeeting) {
      onBookMeeting();
    } else {
      console.log('Book a meeting clicked');
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-18 lg:mt-[100px]">
  <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 items-center">
    
    {/* Image - stays on left */}
    <div className="w-full lg:w-1/2 order-2 lg:order-1">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/fe54aceb0cc448d8a698709588f64afc/60103076882e8963e14d4262fca55f6bae21b98b?placeholderIfAbsent=true"
        alt="Financial planning consultation"
        className="aspect-[1.28] object-contain w-full shadow-[0px_4px_4px_6px_rgba(0,0,0,0.25)] rounded-[60px]"
      />
    </div>

    {/* Text - on right with more left padding */}
    <div className="w-full lg:w-1/2 order-1 lg:order-2">
      <div className="flex w-full flex-col items-stretch text-black font-normal text-center lg:text-left pl-6 sm:pl-12 lg:pl-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight">
          Ready to Plan with confidence?
        </h2>
        <p className="text-base sm:text-lg lg:text-2xl mt-6">
          Schedule a free consultation today and take the first step
          toward clarity, security, and long-term peace of mind.
        </p>
        <Link to ='/book-meeting'>
          <button
          className="self-center lg:self-start bg-[rgba(68,64,175,1)] hover:bg-[rgba(58,54,165,1)] text-base sm:text-lg lg:text-xl text-white font-medium mt-6 px-6 py-3 rounded-[25px] transition-colors cursor-pointer"
          onClick={() => console.log('Book meeting')}
          >
          Book a Meeting
          </button>
          </Link>
      </div>
    </div>

  </div>
</section>



  );
};
