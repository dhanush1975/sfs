
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
      className="bg-[rgba(238,245,255,1)] flex min-h-[60px] sm:min-h-[70px] lg:min-h-[88px] w-full max-w-4xl flex-col items-stretch justify-center mt-4 lg:mt-[25px] px-4 sm:px-6 lg:px-7 py-3 lg:py-3.5 rounded-[55px] hover:bg-[rgba(228,235,255,1)] transition-colors cursor-pointer"
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
      <div className="flex w-full items-center gap-4 flex-wrap">
        <h3 className="flex-1 text-lg sm:text-xl lg:text-2xl xl:text-[32px] font-medium text-black">
          {step}. {title}
        </h3>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/fe54aceb0cc448d8a698709588f64afc/61aaab2f6ae98e04572f5e33c6708723e64ed08b?placeholderIfAbsent=true"
          alt={`Step ${step} icon`}
          className="aspect-[1] object-contain w-10 sm:w-12 lg:w-[60px] shrink-0 rounded-[38px]"
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
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="text-black text-3xl sm:text-4xl lg:text-5xl xl:text-[64px] font-bold mt-8 lg:mt-[43px]">
        Our process
      </header>
      <div className="text-black text-base sm:text-lg lg:text-2xl font-light mt-4">
        <br />
        <span className="font-normal">
          At Surabhi Financial Services, we believe financial planning isn't
          just about numbers — it's about people, purpose, and building a life
          with confidence. Our 6-step process is designed to make you feel
          supported, understood, and empowered every step of the way.
        </span>
      </div>
      <div className="flex w-full flex-col items-center mt-6 lg:mt-[33px]">
        <div className="flex w-full max-w-5xl flex-col items-center">
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
