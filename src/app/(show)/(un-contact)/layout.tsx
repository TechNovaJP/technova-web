import LeftFixedHeader from "@/components/header/LeftFixedHeader";
import RightFixedHeader from "@/components/header/RightFixedHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <LeftFixedHeader />
      <RightFixedHeader />
      {children}
    </>
  );
}
