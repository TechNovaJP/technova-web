import Image from "next/image";
import Link from "next/link";
import React from "react";

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

const Footer: React.FC = () => {
  return (
    <footer className="w-full z-30 flex flex-col pt-12 items-center p-4 bg-[#323232] relative">
      <nav className="hidden md:flex items-center justify-center gap-10 font-text ">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-base text-white tracking-wider font-bold hover:text-[#050f77] border-b-2 border-transparent hover:border-[#050f77] pb-1"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <Link href="/" className="mt-8 mb-16 ">
        <div className="flex items-center">
          <Image
            src="/TechNova.png"
            alt="Tech Nova"
            className="mr-2.5"
            width={44}
            height={44}
          />
          <h1 className="text-[22px] text-white font-black font-logo">
            Tech Nova
          </h1>
        </div>
      </Link>
      <div className="flex text-[10px] tracking-widest font-bold text-white justify-end w-full">
        TechNova
      </div>
    </footer>
  );
};

export default Footer;
