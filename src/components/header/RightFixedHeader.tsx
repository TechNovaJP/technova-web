import React from "react";

const RightFixedHeader: React.FC = () => {
  return (
    <div className="w-[50px] min-h-screen flex items-center justify-center fixed font-text right-0 font-bold">
      <p className="[writing-mode:vertical-rl] tracking-[3px]">
        人から人へ繋がる新たな未来を生み出す
      </p>
    </div>
  );
};

export default RightFixedHeader;
