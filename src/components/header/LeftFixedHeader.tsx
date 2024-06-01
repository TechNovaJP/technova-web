import React from "react";

const LeftFixedHeader: React.FC = () => {
  return (
    <div className="w-[50px] min-h-screen flex items-center justify-center fixed font-text left-0 font-bold">
      <p className="[writing-mode:vertical-rl]">
        <span className="[writing-mode:vertical-rl] tracking-widest">
          芝浦工業大学
        </span>
        <span className="[writing-mode:horizontal-tb] h-4 my-[0px] mt-3">
          W
        </span>
        <span className="[writing-mode:horizontal-tb] h-4 my-[1px]">e</span>
        <span className="[writing-mode:horizontal-tb] h-4 my-[1px] mb-2">
          b
        </span>
        <span className="[writing-mode:vertical-rl] tracking-widest">
          コミュニティ
        </span>
      </p>
    </div>
  );
};

export default LeftFixedHeader;
