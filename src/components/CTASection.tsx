import React from 'react';

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
    <section className="w-full mt-[100px] rounded-[0px_0px_0px_0px] max-md:mt-10 max-w-[1400px] mx-auto px-4">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-6/12 max-md:w-full max-md:ml-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/fe54aceb0cc448d8a698709588f64afc/60103076882e8963e14d4262fca55f6bae21b98b?placeholderIfAbsent=true"
            alt="Financial planning consultation"
            className="aspect-[1.28] object-contain w-full shadow-[0px_4px_4px_6px_rgba(0,0,0,0.25)] grow rounded-[60px] max-md:max-w-full max-md:mt-[21px]"
          />
        </div>
        <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col self-stretch items-stretch text-black font-normal my-auto max-md:max-w-full max-md:mt-10">
            <h2 className="text-5xl max-md:max-w-full max-md:text-[40px]">
              Ready to Plan with confidence?
            </h2>
            <p className="text-2xl ml-[19px] mt-[45px] max-md:max-w-full max-md:mt-10">
              Schedule a free consultation today and take the first step
              toward clarity, security, and long-term peace of mind.
            </p>
            <button
              className="self-center bg-[rgba(68,64,175,1)] hover:bg-[rgba(58,54,165,1)] gap-2.5 text-xl text-white font-medium mt-[21px] p-2.5 rounded-[25px] transition-colors cursor-pointer"
              onClick={handleBookMeeting}
              aria-label="Book a Meeting"
            >
              Book a Meeting
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
