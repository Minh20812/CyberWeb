import React from "react";
import CardProductBannerScroll from "../../components/cards/CardProductBannerScroll";
import {
  ThreeIpad,
  MacbookPro,
  SamsungSmartphone,
  PopularProducts,
} from "../../assets/imageProducts/image.js";

const products = [
  { image: PopularProducts, bgColor: "bg-white" },
  { image: ThreeIpad, bgColor: "bg-stone-50" },
  { image: SamsungSmartphone, bgColor: "bg-gray-200" },
  { image: MacbookPro, bgColor: "bg-zinc-800" },
];

const BannerScroll = () => {
  return (
    <>
      {/* Desktop view */}
      <div className="hidden lg:flex overflow-x-auto">
        {products.map((product, index) => (
          <CardProductBannerScroll
            key={index}
            image={product.image}
            bgColor={product.bgColor}
          />
        ))}
      </div>

      {/* Mobile and Tablet view */}
      <div className="lg:hidden">
        <div className="flex overflow-x-auto snap-x">
          {products.map((product, index) => (
            <div
              key={index}
              className="snap-start flex-shrink-0 w-full sm:w-1/2 md:w-1/3"
            >
              <CardProductBannerScroll
                image={product.image}
                bgColor={product.bgColor}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BannerScroll;
