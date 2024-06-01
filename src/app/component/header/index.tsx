import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full flex flex-col pt-8 pb-5 items-center p-4 bg-white d">
      <Link href="/" className="mb-8">
        <div className="flex items-center">
          <Image
            src="https://storage.googleapis.com/studio-design-asset-files/projects/91aPgR7xql/s-800x800_v-fs_webp_f238b499-14e4-4363-8995-2ba10e8fd154_small.webp"
            alt="Tech Nova"
            className="mr-2.5"
            width={44}
            height={44}
          />
          <h1 className="text-2xl text-[#333333] font-black font-logo">
            Tech Nova
          </h1>
        </div>
      </Link>
      <nav className="flex items-center justify-center gap-10 font-text">
        <Link
          href="/mission"
          className="text-base tracking-wider font-bold hover:text-[#050f77] border-b-2 border-transparent hover:border-[#050f77] pb-1"
        >
          理念
        </Link>
        <Link
          href="/product"
          className="text-base tracking-wider font-bold hover:text-[#050f77] border-b-2 border-transparent hover:border-[#050f77] pb-1"
        >
          プロダクト
        </Link>
        <Link
          href="/team"
          className="text-base tracking-wider font-bold hover:text-[#050f77] border-b-2 border-transparent hover:border-[#050f77] pb-1"
        >
          チーム
        </Link>
        <Link
          href="/info"
          className="text-base tracking-wider font-bold hover:text-[#050f77] border-b-2 border-transparent hover:border-[#050f77] pb-1"
        >
          お知らせ
        </Link>
        <Link
          href="/#company"
          className="text-base tracking-wider font-bold hover:text-[#050f77] border-b-2 border-transparent hover:border-[#050f77] pb-1"
        >
          概要
        </Link>
        <Link
          href="/contact"
          className="text-base tracking-wider font-bold hover:text-[#050f77] border-b-2 border-transparent hover:border-[#050f77] pb-1"
        >
          お問い合わせ
        </Link>
      </nav>
    </header>
  );
};

export default Header;
