import React, { useState } from 'react';

interface ProcessStepProps {
  step: number;
  title: string;
  isExpanded?: boolean;
  onToggle?: () => void;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, title, isExpanded, onToggle }) => {
  return (
    <div 
      className="bg-[rgba(238,245,255,1)] flex min-h-[88px] w-[1115px] max-w-full flex-col items-stretch justify-center mt-[25px] px-7 py-3.5 rounded-[55px] max-md:px-5 hover:bg-[rgba(228,235,255,1)] transition-colors cursor-pointer"
      onClick={onToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onToggle?.();
        }
      }}
      aria-expanded={isExpanded}
    >
      <div className="flex w-full items-center gap-4 flex-wrap max-md:max-w-full">
        <h3 className="self-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
          {step}. {title}
        </h3>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/fe54aceb0cc448d8a698709588f64afc/61aaab2f6ae98e04572f5e33c6708723e64ed08b?placeholderIfAbsent=true"
          alt={`Step ${step} icon`}
          className="aspect-[1] object-contain w-[60px] self-stretch shrink-0 my-auto rounded-[38px]"
        />
      </div>
    </div>
  );
};

export const ProcessSection: React.FC = () => {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const steps = [
    "We Start with a Conversation",
    "We Explore Your Priorities",
    "We Review Your Financial Picture",
    "We Create a Customized Plan",
    "We Make Decisions Together",
    "We Stay With You for the Long Run"
  ];

  const handleStepToggle = (stepIndex: number) => {
    setExpandedStep(expandedStep === stepIndex ? null : stepIndex);
  };

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4">
      <header className="text-black text-[64px] font-bold ml-[22px] mt-[43px] max-md:text-[40px] max-md:ml-2.5 max-md:mt-10">
        Our process
      </header>
      <div className="text-black text-2xl font-light max-md:max-w-full">
        <br />
        <span className="font-normal">
          At Surabhi Financial Services, we believe financial planning isn't
          just about numbers — it's about people, purpose, and building a life
          with confidence. Our 6-step process is designed to make you feel
          supported, understood, and empowered every step of the way.
        </span>
      </div>
      <div className="flex w-full max-w-[1359px] flex-col items-center mt-[33px] max-md:max-w-full mx-auto">
        <div className="flex w-[1323px] max-w-full flex-col items-center text-[32px] text-black font-medium">
          {steps.map((title, index) => (
            <ProcessStep
              key={index}
              step={index + 1}
              title={title}
              isExpanded={expandedStep === index}
              onToggle={() => handleStepToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
