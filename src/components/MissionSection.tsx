
import React from 'react';

export const MissionSection: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="text-black text-3xl sm:text-4xl lg:text-5xl xl:text-[64px] font-medium mt-8 lg:mt-[60px] text-center leading-tight">
        Feel Confident in Your Financial Future
      </header>
      <p className="text-black text-base sm:text-lg lg:text-xl font-normal mt-6 lg:mt-[35px] text-center max-w-5xl mx-auto">
        We are a mission-driven financial services team dedicated to helping
        families build lasting generational wealth and take charge of their
        financial future. With a deep belief that no family should be left
        behind, we provide education, tools, and strategies that empower
        individuals from all walks of life to achieve financial independence and
        security for generations to come
      </p>
      <div className="bg-white w-full max-w-6xl mt-6 lg:mt-[22px] pt-6 lg:pt-[34px] pb-4 lg:pb-[13px] px-6 lg:px-[76px] rounded-[95px_7px_95px_10px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-5 items-center lg:items-stretch">
          <div className="w-full lg:w-[27%] text-center lg:text-left">
            <h2 className="text-black font-normal">
              <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-[64px] font-medium">
                Our Mission
              </span>
            </h2>
          </div>
          <div className="w-full lg:w-[73%]">
            <div className="bg-[rgba(242,245,253,1)] text-base sm:text-lg lg:text-2xl text-black font-normal w-full px-6 lg:px-[62px] py-6 lg:py-[35px] rounded-[55px_0px_73px_0px] text-center lg:text-left">
              Empowering families to build generational wealth and take control
              of their financial future — with a commitment that no family is
              ever left behind.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
