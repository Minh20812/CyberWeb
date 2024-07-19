import React from "react";
import CartCategories from "../../components/cards/CartCategories";
import {
  iconphones,
  smartwatches,
  cameras,
  headphones,
  computers,
  gaming,
} from "../../assets/images/index.js";

const categories = [
  [
    { icon: iconphones, name: "Phones" },
    { icon: smartwatches, name: "Smart Watches" },
  ],
  [
    { icon: cameras, name: "Cameras" },
    { icon: headphones, name: "Headphones" },
  ],
  [
    { icon: computers, name: "Computers" },
    { icon: gaming, name: "Gaming" },
  ],
];

const Categories = () => {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-20 xl:px-40">
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
        {categories.map((group, groupIndex) => (
          <div key={groupIndex} className="w-full lg:w-auto">
            {groupIndex === 0 && (
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-black text-2xl font-medium font-inter leading-loose tracking-tight">
                  Browse By Category
                </h2>
                <span className="lg:hidden text-black text-2xl font-medium">
                  {"<"} {">"}
                </span>
              </div>
            )}
            {groupIndex === 1 && (
              <div className="hidden lg:block text-transparent text-2xl font-medium font-inter leading-loose tracking-tight mb-8">
                {"<"} {">"}
              </div>
            )}
            {groupIndex === 2 && (
              <div className="hidden lg:block text-black text-2xl font-medium font-inter leading-loose tracking-tight mb-8 text-right">
                {"<"} {">"}
              </div>
            )}
            <div className="flex justify-center lg:justify-start gap-4 sm:gap-8">
              {group.map((category, index) => (
                <CartCategories
                  key={index}
                  icon={category.icon}
                  name={category.name}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
