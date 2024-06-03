import React from "react";
import Image from "next/image";
import VerticalText from "../VerticalItem/VerticalText";
import ViewButton from "../Button/ViewButton";
import { Product } from "../../../types/products";

interface ProductsProps {
  products: Product[];
  title: string;
  id: string;
  displayIndex?: number;
  showButton?: boolean;
}

const MobileNav: React.FC<ProductsProps> = ({
  products,
  title,
  id,
  displayIndex,
  showButton,
}) => {
  const displayProducts =
    displayIndex !== undefined ? [products[displayIndex]] : products;

  return (
    <section id={id} className="flex flex-col py-8 pl-5 pr-3 w-full sm:hidden">
      <div className="flex-col flex items-start">
        <VerticalText text={title} />
      </div>
      <div className="flex flex-col w-full pl-10 pt-4 pr-1">
        {displayProducts.map((product, index) => (
          <div
            key={index}
            className="p-6 border-t hover:border hover:shadow-md hover:rounded-lg"
          >
            <p className="text-2xl font-bold pb-4">{product.title}</p>
            <p className="text-xs text-[#c0bcbc] pb-6 truncate">
              {product.description}
            </p>
            <div className="w-full flex flex-col gap-4">
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
        ))}
        <ViewButton
          linkUrl="product"
          linkText="view more"
          isVisible={showButton}
        />
      </div>
    </section>
  );
};

const DesktopNav: React.FC<ProductsProps> = ({
  products,
  title,
  id,
  displayIndex,
  showButton,
}) => {
  const displayProducts =
    displayIndex !== undefined ? [products[displayIndex]] : products;

  return (
    <section
      id={id}
      className="sm:flex flex-col pt-16 pl-4 pr-3 w-full hidden "
    >
      <div className="flex-col flex items-start">
        <VerticalText text={title} />
      </div>
      <div className="flex flex-col w-full pl-14 gap-4 pt-4 pr-1 ">
        {displayProducts.map((product, index) => (
          <div
            key={index}
            className="border-t px-6 py-10 hover:border hover:shadow-md hover:rounded-lg"
          >
            <p className="text-2xl font-bold pb-4 ">{product.title}</p>
            <p className="text-sm text-[#c0bcbc] pb-6 truncate">
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
        ))}
        <ViewButton
          linkUrl="product"
          linkText="view more"
          isVisible={showButton}
        />
      </div>
    </section>
  );
};

const ProductsSection: React.FC<ProductsProps> = (props) => {
  return (
    <>
      <DesktopNav {...props} />
      <MobileNav {...props} />
    </>
  );
};

export default ProductsSection;
