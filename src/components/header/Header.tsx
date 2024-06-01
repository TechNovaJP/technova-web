"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import useDevice from "@/hooks/useDevice";

interface NavLink {
  href: string;
  label: string;
}

const NAV_LINKS: NavLink[] = [
  { href: "/", label: "ホーム" },
  { href: "/about", label: "理念" },
  { href: "/product", label: "プロダクト" },
  { href: "/team", label: "チーム" },
  { href: "/info", label: "お知らせ" },
  { href: "/#company", label: "概要" },
  { href: "/contact", label: "お問い合わせ" },
];

interface MobileNavProps {
  toggleMenu: () => void;
  isOpen: boolean;
}

const MobileNav: React.FC<MobileNavProps> = ({ toggleMenu, isOpen }) => {
  return (
    <div className="w-full flex items-center justify-between p-4 bg-white">
      <Link href="/" className="flex items-center">
        <Image
          src="/TechNova.png"
          alt="Tech Nova"
          className="mr-2.5"
          width={30}
          height={30}
        />
        <h1 className="text-[18px] text-[#333333] font-black font-logo">
          Tech Nova
        </h1>
      </Link>
      <div className="flex items-center  font-text">
        <button onClick={toggleMenu} className="text-[#333333] lg:hidden">
          {isOpen ? (
            <X size={32} className="fixed z-50 top-4 right-4" />
          ) : (
            <Menu size={32} />
          )}
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white bg-opacity-90 z-40 flex flex-col items-center justify-center gap-10  duration-75  transform ${
          isOpen ? "scale-100 opacity-100" : "scale-75 opacity-0"
        } lg:hidden`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-base tracking-wider font-bold hover:text-[#050f77] border-b-2 border-transparent hover:border-[#050f77] pb-0"
            onClick={toggleMenu}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

const DesktopNav: React.FC = () => {
  return (
    <header className="w-full flex flex-col pt-8 pb-5 items-center p-4 bg-white ">
      <Link href="/" className="mb-8">
        <div className="flex items-center">
          <Image
            src="/TechNova.png"
            alt="Tech Nova"
            className="mr-2.5"
            width={44}
            height={44}
          />
          <h1 className="text-[22px] text-[#333333] font-black font-logo">
            Tech Nova
          </h1>
        </div>
      </Link>
      <nav className="flex items-center justify-center gap-10 font-text">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-base tracking-wider font-bold hover:text-[#050f77] border-b-2 border-transparent hover:border-[#050f77] pb-1"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

const Header: React.FC = () => {
  const device = useDevice();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {!device.isMobile ? (
        <DesktopNav />
      ) : (
        <MobileNav toggleMenu={toggleMenu} isOpen={isOpen} />
      )}
    </div>
  );
};

export default Header;
