import type { Metadata } from "next";

import "./globals.css";

import Footer from "@/components/footer/Footer";
import LeftFixedHeader from "@/components/header/LeftFixedHeader";
import RightFixedHeader from "@/components/header/RightFixedHeader";
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LeftFixedHeader />
        <RightFixedHeader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
