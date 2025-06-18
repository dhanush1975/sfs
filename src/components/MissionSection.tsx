import React from 'react';

export const MissionSection: React.FC = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4">
      <header className="text-black text-[64px] font-medium mt-[89px] text-center max-md:max-w-full max-md:text-[40px] max-md:mt-10">
        Feel Confident in Your Financial Future
      </header>
      <p className="text-black text-xl font-normal mt-[35px] text-center max-w-[1200px] mx-auto max-md:max-w-full">
        We are a mission-driven financial services team dedicated to helping
        families build lasting generational wealth and take charge of their
        financial future. With a deep belief that no family should be left
        behind, we provide education, tools, and strategies that empower
        individuals from all walks of life to achieve financial independence and
        security for generations to come
      </p>
      <div className="bg-white w-[1385px] max-w-full mt-[22px] pt-[34px] pb-[13px] px-[76px] rounded-[95px_7px_95px_10px] max-md:px-5 mx-auto">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[27%] max-md:w-full max-md:ml-0">
            <h2 className="text-black text-2xl font-normal self-stretch my-auto max-md:mt-10">
              <span className="text-[64px] font-medium">
                Our Mission
              </span>
            </h2>
          </div>
          <div className="w-[73%] ml-5 max-md:w-full max-md:ml-0">
            <div className="rotate-[0.009754590676089286rad] bg-[rgba(242,245,253,1)] grow text-2xl text-black font-normal w-full px-[62px] py-[35px] rounded-[55px_0px_73px_0px] max-md:max-w-full max-md:mt-10 max-md:px-5">
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
