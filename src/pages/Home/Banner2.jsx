import React from "react";
import ButtonTransparent from "../../components/button/ButtonTransparent";

const Banner2 = () => {
  return (
    <div className="w-full px-4 bg-neutral-800 flex flex-col justify-center items-center font-inter py-16 lg:py-24">
      <div className="flex flex-col lg:flex-row text-white gap-2 lg:gap-5 text-4xl md:text-5xl lg:text-7xl leading-tight lg:leading-[72px] items-center justify-center text-center mb-4">
        <p className="font-thin">Big Summer</p>
        <p className="font-medium">Sale</p>
      </div>
      <p className="text-center text-neutral-500 text-sm lg:text-base font-normal leading-relaxed lg:leading-loose mb-8 lg:mb-10 max-w-md">
        Commodo fames vitae vitae leo mauris in. Eu consequat.
      </p>
      <ButtonTransparent
        name="Shop Now"
        borderColor="border-white"
        textColor="text-white"
      />
    </div>
  );
};

export default Banner2;
