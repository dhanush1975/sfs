
import React from 'react';

interface FocusPillarProps {
  image: string;
  title: string;
  description: string;
  imageAlt: string;
}

const FocusPillar: React.FC<FocusPillarProps> = ({ image, title, description, imageAlt }) => {
  return (
    <article className="bg-[rgba(207,218,255,1)] text-black w-full h-full flex flex-col pb-6 lg:pb-10 rounded-[33px_0px_62px_0px] hover:shadow-lg transition-shadow">
      <img
        src={image}
        alt={imageAlt}
        className="aspect-[1.62] object-cover w-full h-48 sm:h-52 lg:h-56 rounded-[33px_0px_0px_0px] flex-shrink-0"
      />
      <div className="flex flex-col flex-grow justify-between mt-4 lg:mt-[15px] px-4 lg:px-[15px]">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold min-h-[2.5rem] flex items-center">
          {title}
        </h3>
        <p className="text-sm sm:text-base lg:text-xl font-normal mt-6 lg:mt-[53px] flex-grow">
          {description}
        </p>
      </div>
    </article>
  );
};

export const FocusSection: React.FC = () => {
  const pillars = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/fe54aceb0cc448d8a698709588f64afc/d795cb055ef95276d98a750b8d420078dc637386?placeholderIfAbsent=true",
      title: "Family Protection",
      description: "Involves life insurance and income replacement strategies to safeguard loved ones.",
      imageAlt: "Family Protection illustration"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/fe54aceb0cc448d8a698709588f64afc/78d5271f27ffe15563e9a13f42596122229b768d?placeholderIfAbsent=true",
      title: "Family Protection",
      description: "Involves life insurance and income replacement strategies to safeguard loved ones.",
      imageAlt: "Family Protection illustration"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/fe54aceb0cc448d8a698709588f64afc/8884f8d45e31aa2d13461bd80bcd45926d21c975?placeholderIfAbsent=true",
      title: "Retirement Planning",
      description: "Involves life insurance and income replacement strategies to safeguard loved ones.",
      imageAlt: "Retirement Planning illustration"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/fe54aceb0cc448d8a698709588f64afc/040ea2a3517821cdf0246485229eb60f7ad7657c?placeholderIfAbsent=true",
      title: "Health & Disability Planning",
      description: "Prepares for medical emergencies, long-term care, and loss of income due to illness or disability.",
      imageAlt: "Health & Disability Planning illustration"
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="text-center">
        <h2 className="text-black text-3xl sm:text-4xl lg:text-5xl xl:text-[64px] font-bold mt-8 lg:mt-16">
          Our Focus
        </h2>
        <p className="text-black text-lg sm:text-xl lg:text-2xl font-medium mt-4 lg:mt-[29px]">
          The four pillars of financial planning
        </p>
      </header>
      <div className="w-full mt-6 lg:mt-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 items-stretch">
          {pillars.map((pillar, index) => (
            <div key={index} className="w-full h-full">
              <FocusPillar {...pillar} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
