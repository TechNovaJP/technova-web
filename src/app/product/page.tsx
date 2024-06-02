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
      <CenteredTextOverlay topImage={topImage} text="プロダクト" />
      <div className="h-16    " />
      <div className="w-full pl-8 pr-3">
        {products.map((product, index) => (
          <div
            key={product._id}
            className="flex flex-col py-12 border-t px-5  w-full   hover:border hover:shadow-md hover:rounded-lg"
          >
            <div className=" flex-col flex items-start">
              <VerticalText text={toFullWidth(index + 1)} />
            </div>
            <div className="flex flex-col w-full -mt-6 pl-10 pr-3">
              <p className="text-2xl font-bold  pb-4">{product.title}</p>
              <p className="text-xs text-[#c0bcbc] pb-6 truncate">
                {product.description}
              </p>
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
          </div>
        ))}
        <div className="w-full ">
          <div className="w-full h-[0.3px] bg-slate-200 rounded-xl " />
        </div>
      </div>
    </main>
  );
};

const DesktopNav: React.FC<ProductsProps> = ({ products }) => {
  return (
    <main className="sm:flex w-full flex-col items-center justify-between sm:px-[50px] pr-[50px] pb-28 font-text hidden ">
      <CenteredTextOverlay topImage={topImage} text="プロダクト" />
      <div className="h-16    " />
      <div className="w-full p-10">
        {products.map((product, index) => (
          <div className="flex flex-col py-12 border-t px-6   w-full hover:border hover:shadow-md hover:rounded-lg">
            <div className=" flex-col flex items-start">
              <VerticalText text={toFullWidth(index + 1)} />
            </div>
            <div className="flex flex-col w-full -mt-7 pl-12 pr-3">
              <p className="text-2xl font-bold  pb-4">{product.title}</p>
              <p className="text-xs text-[#c0bcbc] pb-6 truncate">
                {product.description}
              </p>
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
          </div>
        ))}
        <div className="w-full ">
          <div className="w-full h-[0.3px] bg-slate-200 rounded-xl " />
        </div>
      </div>
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
