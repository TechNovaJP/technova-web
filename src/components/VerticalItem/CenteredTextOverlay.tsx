import Image, { StaticImageData } from "next/image";
import React from "react";

interface CenteredTextOverlayProps {
  topImage: StaticImageData;
  text: string;
}

const CenteredTextOverlay: React.FC<CenteredTextOverlayProps> = ({
  topImage,
  text,
}) => {
  return (
    <div className="w-full relative">
      <Image
        src={topImage}
        alt="Top image"
        priority
        className="relative rounded-md"
      />
      <div className="absolute rounded-sm top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2 py-3 bg-blur-lg text-white bg-[#000000B3] w-fit">
        <p className="tracking-[4px] [writing-mode:vertical-rl] font-black text-[18px] leading-none">
          {text}
        </p>
      </div>
    </div>
  );
};

export default CenteredTextOverlay;
