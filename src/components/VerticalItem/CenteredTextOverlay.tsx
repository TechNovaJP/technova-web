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
        className="relative rounded-r-md sm:rounded-md w-full"
      />
      <div className="absolute   top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-blur-lg text-white  w-fit">
        <span className="tracking-[4px] w-fit  [writing-mode:vertical-rl] rounded-sm bg-[#000000B3] p-2 py-3 sm:font-black font-medium text-sm smt:ext-[18px] leading-none">
          {text}
        </span>
      </div>
    </div>
  );
};

export default CenteredTextOverlay;
