
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[rgba(234,242,254,1)] self-stretch flex w-full flex-col items-center text-black mt-16 lg:mt-[166px] pb-12 lg:pb-[79px] px-4 sm:px-6 lg:px-20">
      <div className="flex w-full max-w-lg flex-col items-center text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light">
          Surabhi Financial Services
        </h2>
        <p className="text-xs font-normal mt-12 lg:mt-[72px]">
          @2025 Surabhi financial services
        </p>
      </div>
    </footer>
  );
};
