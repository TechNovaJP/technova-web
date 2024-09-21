"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

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
  { href: "/#overview", label: "概要" },
  { href: "/contact", label: "お問い合わせ" },
];

interface MobileNavProps {
  toggleMenu: () => void;
  isOpen: boolean;
}

const MobileNav: React.FC<MobileNavProps> = ({ toggleMenu, isOpen }) => {
  return (
    <div className="relative w-full flex items-center justify-between p-4 bg-white sm:hidden">
      <Link href="/" className="flex items-center">
        <Image
          src="/TechNova.png"
          alt="Tech Nova"
          className="mr-2.5"
          width={30}
          height={30}
        />
        <h1 className="text-[18px] text-[#333333] font-bold sm:font-black">
          Tech Nova
        </h1>
      </Link>

      <button
        onClick={toggleMenu}
        className="text-[#333333] lg:hidden font-text"
      >
        {isOpen ? (
          <X size={32} className="fixed z-50 top-[14px] right-2" />
        ) : (
          <Menu size={32} className="fixed top-[14px] right-2" />
        )}
      </button>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-white bg-opacity-90 z-40 flex flex-col items-center justify-center gap-10  duration-75  transform ${
          isOpen ? "scale-100 opacity-100" : "scale-75 opacity-0 hidden"
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
    <header className="w-full  flex-col pt-8 pb-5 items-center p-4 bg-white sm:flex hidden">
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
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <DesktopNav />
      <MobileNav toggleMenu={toggleMenu} isOpen={isOpen} />
    </div>
  );
};

export default Header;
