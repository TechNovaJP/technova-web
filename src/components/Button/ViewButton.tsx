import React from "react";
import Link from "next/link";

interface ViewButtonProps {
  linkUrl: string;
  linkText: string;
  isVisible?: boolean;
}

const ViewButton: React.FC<ViewButtonProps> = ({
  linkUrl,
  linkText,
  isVisible,
}) => {
  if (!isVisible) return null;

  return (
    <div className="w-full flex justify-end mt-6">
      <Link href={linkUrl} className=" ">
        <button className="px-6 py-1 text-sm font-bold border text-[#333333] border-[#333333] bg-white rounded-full">
          {linkText}
        </button>
      </Link>
    </div>
  );
};

export default ViewButton;
