import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ButtonTransparent from "../button/ButtonTransparent";

const CardProductBannerScroll = ({ image, bgColor }) => {
  const [color, setColor] = useState("black");

  useEffect(() => {
    if (bgColor !== "bg-zinc-800") {
      setColor("black");
    } else {
      setColor("white");
    }
  }, [bgColor]);

  const navigate = useNavigate();

  const productDetails = () => {
    navigate("product-detail"); // Adjust the path according to your routing setup
  };

  const shoppingCart = () => {
    navigate("shopping-cart"); // Adjust the path according to your routing setup
  };

  return (
    <div
      className={`${bgColor} flex-col justify-start items-start flex gap-6 max-lg:items-center max-lg:justify-center`}
    >
      <img
        className=" flex h-[488px] overflow-hidden w-auto cursor-pointer"
        src={image}
        onClick={productDetails}
      />
      {/* content  */}
      <div className="self-stretch flex-col justify-end items-start gap-4 flex px-8 pb-14 max-lg:items-center max-lg:justify-center">
        {/* name  */}
        <p
          className={`text-${color} text-[33px] font-light font-inter leading-[48px]`}
        >
          Ipad Pro
        </p>
        {/* descript  */}
        <p className="text-neutral-400 text-sm font-medium font-inter leading-normal max-lg:text-center">
          iPad combines a magnificent 10.2-inch Retina display, incredible
          performance, multitasking and ease of use.
        </p>
        {/* button shop  */}
        <ButtonTransparent
          name="Shop now"
          borderColor={`border-${color}`}
          textColor={`text-${color}`}
        />
      </div>
    </div>
  );
};

export default CardProductBannerScroll;
