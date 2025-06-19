
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface ProcessStepProps {
  step: number;
  title: string;
  content: string;
  isExpanded?: boolean;
  onToggle?: () => void;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, title, content, isExpanded, onToggle }) => {
  return (
    <div className="bg-[rgba(238,245,255,1)] flex w-full max-w-4xl flex-col mt-4 lg:mt-[25px] rounded-[55px] hover:bg-[rgba(228,235,255,1)] transition-colors overflow-hidden">
      <div 
        className="flex min-h-[60px] sm:min-h-[70px] lg:min-h-[88px] items-center justify-center px-4 sm:px-6 lg:px-7 py-3 lg:py-3.5 cursor-pointer"
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
        <div className="flex w-full items-center gap-4">
          <h3 className="flex-1 text-lg sm:text-xl lg:text-2xl xl:text-[32px] font-medium text-black">
            {step}. {title}
          </h3>
          <ChevronDown 
            className={`w-6 h-6 text-[rgba(68,64,175,1)] transition-transform duration-200 ${
              isExpanded ? 'rotate-180' : ''
            }`}
          />
        </div>
      </div>
      
      {isExpanded && (
        <div className="px-4 sm:px-6 lg:px-7 pb-4 lg:pb-6">
          <div className="bg-white rounded-lg p-4 lg:p-6 shadow-sm">
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
              {content}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export const ProcessSection: React.FC = () => {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const steps = [
    {
      title: "We Start with a Conversation",
      content: "We begin by getting to know you, your family, and your unique financial situation. This initial conversation helps us understand your goals, concerns, and what matters most to you."
    },
    {
      title: "We Explore Your Priorities", 
      content: "Together, we'll identify your short-term and long-term financial priorities, whether it's saving for retirement, your children's education, or building generational wealth."
    },
    {
      title: "We Review Your Financial Picture",
      content: "We conduct a comprehensive review of your current financial situation, including assets, liabilities, income, expenses, and existing investment strategies."
    },
    {
      title: "We Create a Customized Plan",
      content: "Based on our discussions and analysis, we develop a personalized financial plan tailored to your specific needs, goals, and risk tolerance."
    },
    {
      title: "We Make Decisions Together",
      content: "We present our recommendations and work with you to make informed decisions about your financial future. Every step is collaborative and transparent."
    },
    {
      title: "We Stay With You for the Long Run",
      content: "Our relationship doesn't end with the plan. We provide ongoing support, regular reviews, and adjustments as your life and goals evolve over time."
    }
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
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              step={index + 1}
              title={step.title}
              content={step.content}
              isExpanded={expandedStep === index}
              onToggle={() => handleStepToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
