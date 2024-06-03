import React from "react";
import Image, { StaticImageData } from "next/image";
import VerticalText from "../VerticalItem/VerticalText";

interface CommunitySectionProps {
  title: string;
  id: string;
  image: StaticImageData;
  description: string;
  representative: string;
}

const MobileNav: React.FC<CommunitySectionProps> = ({
  title,
  id,
  image,
  description,
  representative,
}) => {
  return (
    <section id={id} className="w-full sm:hidden">
      <div className="flex-col pt-16 pb-2 pl-4 pr-3 w-full flex items-start ">
        <VerticalText text={title} />
      </div>
      <div className="pl-14 pr-2 pt-4 w-full">
        <Image
          alt={`${title} image`}
          src={image}
          width={200}
          height={200}
          priority
          className="rounded-md"
        />
      </div>
      <div className="sm:px-20 pl-14 pt-8">
        <p className="whitespace-pre-line mb-4 font-bold text-xs tracking-[3px]">
          {description}
        </p>
        <p className="text-sm justify-end w-full flex pr-2">
          代表 {representative}
        </p>
      </div>
    </section>
  );
};

const DesktopNav: React.FC<CommunitySectionProps> = ({
  title,
  id,
  image,
  description,
  representative,
}) => {
  return (
    <section id={id} className="w-full hidden sm:flex flex-col">
      <div className="flex-col pl-4 pt-16 pb-2 pr-3 w-full flex items-start ">
        <VerticalText text={title} />
      </div>
      <div className="pl-16 pr-2 pt-4 w-full">
        <Image
          alt={`${title} image`}
          src={image}
          width={200}
          height={200}
          priority
          className="rounded-md"
        />
      </div>
      <div className="sm:px-20 pl-10 pt-8">
        <p className="whitespace-pre-line mb-4 font-bold text-xs tracking-[3px]">
          {description}
        </p>
        <p className="text-sm justify-end w-full flex pr-2">
          代表 {representative}
        </p>
      </div>
    </section>
  );
};

const CommunitySection: React.FC<CommunitySectionProps> = (props) => {
  return (
    <>
      <DesktopNav {...props} />
      <MobileNav {...props} />
    </>
  );
};

export default CommunitySection;
