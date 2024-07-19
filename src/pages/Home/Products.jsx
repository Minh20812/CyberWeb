import React from "react";
import CardProducts from "../../components/cards/CardProducts";
import {
  AirPods,
  AppleWatch,
  Camera,
  GalaxyBudsFE,
  GalaxyZFold5,
  Ipad,
  IPhone14,
  SamsungWatch,
} from "../../assets/imageProducts/image";

const productData = [
  { image: IPhone14, name: "Apple iPhone 14 Pro", price: "$900" },
  { image: Camera, name: "Blackmagic Pocket Cinema", price: "$2535" },
  { image: AppleWatch, name: "Apple Watch Series 9 GPS", price: "$399" },
  { image: AirPods, name: "AirPods Max Silver", price: "$549" },
  { image: SamsungWatch, name: "Samsung Galaxy Watch6", price: "$369" },
  { image: GalaxyZFold5, name: "Galaxy Z Fold5 Unlocked", price: "$1799" },
  { image: GalaxyBudsFE, name: "Galaxy Buds FE", price: "$99.99" },
  { image: Ipad, name: "Apple iPad 9 10.2' 64GB Wi-Fi", price: "$398" },
];

const ProductCategories = () => (
  <div className="flex flex-wrap justify-start items-center gap-4 text-lg font-medium font-inter leading-loose mb-8">
    <p className="text-black whitespace-nowrap">New Arrival</p>
    <p className="text-zinc-500">Bestseller</p>
    <p className="text-zinc-500">Featured Products</p>
  </div>
);

const Products = () => {
  return (
    <div className="px-4 py-14">
      <ProductCategories />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {productData.map((product, index) => (
          <CardProducts
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
            showAddButton={false}
            showBuyButton={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
