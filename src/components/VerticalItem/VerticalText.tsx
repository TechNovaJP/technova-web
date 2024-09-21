import React from "react";

interface VerticalTextProps {
  text: string;
}

const VerticalText: React.FC<VerticalTextProps> = ({ text }) => {
  return (
    <p className="border-r sm:border-r-2 border-black tracking-[1.5px] sm:pr-2 pr-1 [writing-mode:vertical-rl] sm:font-black font-semibold sm:text-[18px] text-sm leading-none">
      {text}
    </p>
  );
};

export default VerticalText;
