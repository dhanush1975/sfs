import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[rgba(234,242,254,1)] self-stretch flex w-full flex-col items-center text-black mt-[166px] pb-[79px] px-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="z-10 flex mt-[-19px] w-[538px] max-w-full flex-col items-stretch">
        <h2 className="text-4xl font-light max-md:max-w-full text-center">
          Surabhi Financial Services
        </h2>
        <p className="text-[10px] font-normal self-center mt-[72px] max-md:mt-10">
          @2025 Surabhi financial services
        </p>
      </div>
    </footer>
  );
};
