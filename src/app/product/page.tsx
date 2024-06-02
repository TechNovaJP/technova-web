import Image from "next/image";
import CenteredTextOverlay from "@/components/VerticalItem/CenteredTextOverlay";
import topImage from "./image/top-image.png";
import VerticalText from "@/components/VerticalItem/VerticalText";
import { getProducts } from "../../../libs/newt";
import type { Product } from "../../../types/products";

function toFullWidth(num: number): string {
  return num
    .toString()
    .replace(/[0-9]/g, (digit) =>
      String.fromCharCode(digit.charCodeAt(0) + 0xfee0),
    );
}

interface ProductsProps {
  products: Product[];
}
const MobileNav: React.FC<ProductsProps> = ({ products }) => {
  return (
    <main className="flex min-h-screen  w-full flex-col items-center  pr-[50px] pb-28 font-text sm:hidden">
      <CenteredTextOverlay topImage={topImage} text="理念" />
      {products.map((product, index) => (
        <>
          <div className="flex-col pt-16 pb-2 pl-4 pr-3 w-full flex items-start">
            <VerticalText text={toFullWidth(index + 1)} />
          </div>
          <div className="flex flex-col w-full pl-14 ">
            <p className="text-xl font-bold -mt-[30px] text-[#333333] pb-4">
              {product.title}
            </p>
            <p className="text-xs text-[#c0bcbc] pb-4 truncate">
              {product.description}
            </p>
            <div className="grid grid-cols-3 gap-1 w-full">
              {product.coverImage.map((image, imageIndex) => (
                <div key={imageIndex} className="relative w-full  pb-[56.25%]">
                  <Image
                    src={image.src}
                    alt={image.altText || "Cover Image"}
                    fill
                    className="object-contain border rounded-xl"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full pl-8 pr-[2px] pt-12">
            <div className="w-full h-[1px] bg-slate-200 rounded-xl " />
          </div>
        </>
      ))}
    </main>
  );
};

const DesktopNav: React.FC<ProductsProps> = ({ products }) => {
  return (
    <main className="sm:flex w-full flex-col items-center justify-between sm:px-[50px] pr-[50px] pb-28 font-text hidden ">
      <CenteredTextOverlay topImage={topImage} text="理念" />
      {products.map((product, index) => (
        <>
          <div className="flex-col pt-24 pb-6 px-10 w-full flex items-start">
            <VerticalText text={toFullWidth(index + 1)} />
          </div>
          <div className="flex flex-col w-full pl-20 pr-8">
            <p className="text-2xl font-bold pb-8">{product.title}</p>
            <div className="grid grid-cols-3 gap-2 w-full">
              {product.coverImage.map((image, imageIndex) => (
                <div key={imageIndex} className="relative aspect-video">
                  <Image
                    src={image.src}
                    alt={image.altText || "Cover Image"}
                    fill
                    className="object-contain border rounded-xl"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full pl-12 pr-4 pt-16">
            <div className="w-full h-[1px] bg-slate-200 rounded-xl " />
          </div>
        </>
      ))}
    </main>
  );
};

export default async function Product() {
  const products = await getProducts();
  console.log(products);

  return (
    <>
      <DesktopNav products={products} />
      <MobileNav products={products} />
    </>
  );
}
