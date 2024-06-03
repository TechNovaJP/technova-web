import React from "react";
import CenteredTextOverlay from "@/components/VerticalItem/CenteredTextOverlay";
import topImage from "./image/top-image.png";
import { getProducts } from "../../../libs/newt";
import type { Product } from "../../../types/products";
import ProductsSection from "@/components/section/ProductsSection";

interface ProductsProps {
  products: Product[];
}

const MobileNav: React.FC<ProductsProps> = ({ products }) => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center sm:px-[50px] pr-[50px]  pb-28 font-text sm:hidden">
      <CenteredTextOverlay topImage={topImage} text="プロダクト" />
      <div className="h-10 " />
      <ProductsSection title="プロダクト" id="product" products={products} />
    </main>
  );
};

const DesktopNav: React.FC<ProductsProps> = ({ products }) => {
  return (
    <main className="sm:flex min-h-screen w-full flex-col items-center sm:px-[50px] pr-[50px]  pb-28 font-text hidden ">
      <CenteredTextOverlay topImage={topImage} text="プロダクト" />
      <div className="h-16 " />
      <div className="w-full pl-6 pr-8">
        <ProductsSection title="プロダクト" id="product" products={products} />
      </div>
    </main>
  );
};

export default async function Product() {
  const products = await getProducts();

  return (
    <>
      <DesktopNav products={products} />
      <MobileNav products={products} />
    </>
  );
}
