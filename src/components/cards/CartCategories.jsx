import React from "react";
import { useNavigate } from "react-router-dom";

const CartCategories = ({ icon, name }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("product-search"); // Adjust the path according to your routing setup
  };

  return (
    <button
      className="w-40 h-32 py-6 bg-gray-200 rounded-[15px] flex-col justify-center items-center gap-2 inline-flex"
      onClick={handleClick}
    >
      <img src={icon} alt="Icon" />
      <p className="text-center text-black text-base font-medium font-['Inter'] leading-normal">
        {name}
      </p>
    </button>
  );
};

export default CartCategories;
