
import React from 'react';

export const MissionSection: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-50 rounded-full opacity-30 -z-10"></div>
        <div className="absolute top-20 right-1/3 w-24 h-24 bg-purple-50 rounded-full opacity-40 -z-10"></div>
        
        <header className="text-black text-3xl sm:text-4xl lg:text-5xl xl:text-[64px] font-medium mt-8 lg:mt-[60px] text-center leading-tight">
          Feel Confident in Your 
          <span className="block text-blue-600">Financial Future</span>
        </header>
        
        <div className="flex justify-center mt-4">
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>
        
        <p className="text-gray-700 text-base sm:text-lg lg:text-xl font-normal mt-8 lg:mt-10 text-center max-w-5xl mx-auto leading-relaxed">
        "Our vision is to lead a financial revolution in North America by addressing the root causes that prevent families from achieving financial stability and prosperity"
        </p>
        
        <div className="bg-white w-full max-w-6xl mt-12 lg:mt-16 pt-8 lg:pt-12 pb-6 lg:pb-8 px-6 lg:px-[76px] rounded-[95px_7px_95px_10px] mx-auto shadow-lg border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 items-center lg:items-stretch">
            <div className="w-full lg:w-[35%] text-center lg:text-left flex flex-col justify-center">
              <div className="relative">
                <h2 className="text-black font-normal relative z-10">
                  <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-[58px] font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    Our Mission
                  </span>
                </h2>
                <div className="absolute -bottom-2 left-1/2 lg:left-0 transform -translate-x-1/2 lg:transform-none w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
            </div>
            <div className="w-full lg:w-[65%] flex items-center">
              <div className="bg-gradient-to-br from-[rgba(242,245,253,1)] to-[rgba(232,238,255,1)] text-base sm:text-lg lg:text-xl text-gray-800 font-medium w-full px-6 lg:px-[48px] py-8 lg:py-[42px] rounded-[55px_0px_73px_0px] text-center lg:text-left shadow-inner border border-blue-100 leading-relaxed">
                <span className="font-semibold text-blue-700">Empowering families</span> to build generational wealth and take control
                of their financial future — with a commitment that 
                <span className="font-semibold text-purple-700"> no family is ever left behind.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
