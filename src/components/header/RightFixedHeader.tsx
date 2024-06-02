import React from "react";

const MobileNav: React.FC = () => {
  return (
    <div className="w-[50px] min-h-screen flex flex-col items-center justify-start pt-20 sm:justify-center fixed font-text right-0 font-bold sm:hidden">
      <p className="[writing-mode:vertical-rl] tracking-[3px]">
        人から人へ繋がる新たな未来を生み出す
      </p>
      <p className="[writing-mode:vertical-rl] mt-8">
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

const DesktopNav: React.FC = () => {
  return (
    <div className="w-[50px] min-h-screen sm:flex hidden items-center justify-center fixed font-text right-0 font-bold">
      <p className="[writing-mode:vertical-rl] tracking-[3px]">
        人から人へ繋がる新たな未来を生み出す
      </p>
    </div>
  );
};

const RightFixedHeader: React.FC = () => {
  return (
    <div>
      <MobileNav />
      <DesktopNav />
    </div>
  );
};

export default RightFixedHeader;
