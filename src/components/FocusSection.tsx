import React from 'react';

interface FocusPillarProps {
  image: string;
  title: string;
  description: string;
  imageAlt: string;
}

const FocusPillar: React.FC<FocusPillarProps> = ({ image, title, description, imageAlt }) => {
  return (
    <article className="bg-[rgba(207,218,255,1)] grow text-black w-full pb-10 rounded-[33px_0px_62px_0px] hover:shadow-lg transition-shadow">
      <img
        src={image}
        alt={imageAlt}
        className="aspect-[1.62] object-contain w-full z-10 rounded-[33px_0px_0px_0px]"
      />
      <div className="flex flex-col items-stretch mt-[15px] px-[15px]">
        <h3 className="text-2xl font-semibold">
          {title}
        </h3>
        <p className="text-xl font-normal mt-[53px] max-md:mt-10">
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
    <section className="w-full max-w-[1400px] mx-auto px-4">
      <header className="text-center">
        <h2 className="text-black text-[64px] font-bold mt-16 max-md:text-[40px] max-md:mt-10">
          Our Focus
        </h2>
        <p className="text-black text-2xl font-medium mt-[29px]">
          The four pillars of financial planning
        </p>
      </header>
      <div className="self-stretch flex w-full flex-col mt-7 pl-[31px] pr-[3px] max-md:max-w-full max-md:pl-5">
        <div className="self-center w-full max-w-[1358px] max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            {pillars.map((pillar, index) => (
              <div key={index} className="w-3/12 max-md:w-full max-md:ml-0">
                <div className={`mt-[${index === 0 ? '15' : index === 1 ? '11' : index === 2 ? '0' : '0'}px] max-md:mt-[${index === 0 ? '39' : index === 1 ? '35' : index === 2 ? '34' : '6'}px]`}>
                  <FocusPillar {...pillar} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
