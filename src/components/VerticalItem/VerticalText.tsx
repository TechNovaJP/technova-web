import React from "react";

interface VerticalTextProps {
  text: string;
}

const VerticalText: React.FC<VerticalTextProps> = ({ text }) => {
  return (
    <p className="border-r-2 border-black tracking-[1.5px] pr-2 [writing-mode:vertical-rl] font-black text-[18px] leading-none">
      {text}
    </p>
  );
};

export default VerticalText;
