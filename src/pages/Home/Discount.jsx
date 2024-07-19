import React from "react";
import CardProducts from "../../components/cards/CardProducts";
import {
  AirPods,
  AppleWatch,
  Camera,
  IPhone14,
} from "../../assets/imageProducts/image";

const products = [
  { image: IPhone14 },
  { image: Camera },
  { image: AppleWatch },
  { image: AirPods },
];

const Discount = () => {
  return (
    <div className="px-4 py-14 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-medium font-inter leading-loose mb-8 text-center lg:text-left">
          Discounts up to -50%
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <CardProducts key={index} image={product.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discount;
