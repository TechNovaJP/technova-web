import React from "react";
import Image, { StaticImageData } from "next/image";
import VerticalText from "../VerticalItem/VerticalText";
import ViewButton from "../Button/ViewButton";

interface AboutSectionProps {
  title: string;
  id: string;
  heading: string;
  description: string;
  image: StaticImageData;
  showButton: boolean;
}

const MobileNav: React.FC<AboutSectionProps> = ({
  title,
  id,
  heading,
  description,
  image,

  showButton,
}) => {
  return (
    <section
      id={id}
      className="flex-col sm:py-24 sm:px-10 py-16 pl-4 pr-3 w-full flex items-start sm:hidden"
    >
      <VerticalText text={title} />
      <div className="sm:px-20 pl-10">
        <h2 className="whitespace-pre-line sm:mb-10 mb-6 tracking-widest lg:text-4xl md:text-[28px] text-xl font-bold sm:font-black leading-relaxed">
          {heading}
        </h2>
        <p className="whitespace-pre-line mb-12 text-xs tracking-[3px]">
          {description}
        </p>
        <Image
          src={image}
          alt={`${title} image`}
          priority
          className="relative rounded-md"
        />
        <ViewButton
          linkUrl="/about"
          linkText="view more"
          isVisible={showButton}
        />
      </div>
    </section>
  );
};

const DesktopNav: React.FC<AboutSectionProps> = ({
  title,
  id,
  heading,
  description,
  image,

  showButton,
}) => {
  return (
    <section
      id={id}
      className="flex-col pr-4 pl-4 mt-12 w-full sm:flex items-start hidden"
    >
      <VerticalText text={title} />
      <div className="pl-14">
        <h2 className="whitespace-pre-line   sm:mb-10 mb-6 tracking-widest lg:text-4xl md:text-[28px] md:leading-10 lg:leading-[50px]  text-xl font-black ">
          {heading}
        </h2>
        <p className="whitespace-pre-line mb-12 text-base tracking-[3px]">
          {description}
        </p>
        <Image
          alt={`${title} image`}
          src={image}
          priority
          className="relative rounded-md"
        />
        <ViewButton
          linkUrl="/about"
          linkText="view more"
          isVisible={showButton}
        />
      </div>
    </section>
  );
};

const AboutSection: React.FC<AboutSectionProps> = (props) => {
  return (
    <>
      <DesktopNav {...props} />
      <MobileNav {...props} />
    </>
  );
};

export default AboutSection;
