import React from 'react';

interface HeroSectionProps {
  onRSVP?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onRSVP }) => {
  const handleRSVP = () => {
    if (onRSVP) {
      onRSVP();
    } else {
      console.log('RSVP clicked');
    }
  };

  return (
    <section className="flex flex-col self-stretch relative min-h-[885px] w-full text-2xl text-white font-normal justify-center px-[61px] py-[124px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/fe54aceb0cc448d8a698709588f64afc/647a2a6a75ec85010f3bd88d1e287e2ad27c1514?placeholderIfAbsent=true"
        alt="Hero background"
        className="absolute h-full w-full object-cover inset-0"
      />
      <article className="relative bg-[rgba(0,0,0,0.55)] flex w-[515px] max-w-full flex-col items-stretch -mb-7 pl-[57px] pr-4 pt-[13px] pb-[35px] rounded-[40px] max-md:mb-2.5 max-md:pl-5">
        <header className="text-[32px] font-bold ml-[35px] max-md:ml-2.5">
          UPCOMING EVENT
        </header>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/fe54aceb0cc448d8a698709588f64afc/70e5a4333f8002e58a62bfca9acf9e4a449e72c4?placeholderIfAbsent=true"
          alt="Upcoming event"
          className="aspect-[1.79] object-contain w-full mt-[43px] max-md:max-w-full max-md:mt-10"
        />
        <div className="self-center mt-[26px]">
          Tempe, Arizona
        </div>
        <p className="ml-[25px] mt-[29px] max-md:ml-2.5">
          Event - information here.
        </p>
        <button
          className="bg-[rgba(103,106,199,1)] hover:bg-[rgba(93,96,189,1)] self-center flex items-center gap-2.5 justify-center mt-[100px] p-2.5 rounded-[48px] max-md:mt-10 transition-colors cursor-pointer"
          onClick={handleRSVP}
          aria-label="RSVP for the event"
        >
          <span className="self-stretch my-auto">
            RSVP Here
          </span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/fe54aceb0cc448d8a698709588f64afc/ba6d367d03aa07092595e3fcb3c7dc3929290204?placeholderIfAbsent=true"
            alt="RSVP arrow"
            className="aspect-[0.87] object-contain w-[52px] self-stretch shrink-0 my-auto"
          />
        </button>
      </article>
    </section>
  );
};
