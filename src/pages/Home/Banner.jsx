import React from "react";
import IphoneImage from "../../assets/images/IphoneImage.svg";
import ButtonTransparent from "../../components/button/ButtonTransparent.jsx";

const Banner = () => {
  return (
    <div className="w-full bg-neutral-800 py-12 lg:py-20 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Main content */}
        <div className="flex flex-col justify-center lg:items-start items-center text-center lg:text-left mb-8 lg:mb-0 lg:w-1/2">
          <h2 className="text-white text-opacity-40 text-2xl lg:text-3xl font-semibold mb-4">
            Pro.Beyond.
          </h2>
          <h1 className="text-white text-5xl lg:text-7xl leading-tight mb-4">
            <span className="font-thin">IPhone 14 </span>
            <span className="font-semibold">Pro</span>
          </h1>
          <p className="text-neutral-400 text-lg lg:text-xl font-medium mb-8 max-w-md">
            Created to change everything for the better. For everyone
          </p>
          <ButtonTransparent
            name="Shop Now"
            textColor="text-white"
            borderColor="border-white"
          />
        </div>
        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src={IphoneImage}
            alt="iPhone 14 Pro"
            className="max-w-full h-auto max-h-[400px] lg:max-h-[500px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
