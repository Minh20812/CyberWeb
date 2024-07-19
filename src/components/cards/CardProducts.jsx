import React from "react";
import { useNavigate } from "react-router-dom";
import LikeTransparent from "../../assets/images/LikeTransparent.svg";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/slice/cartSlice";

const CardProducts = ({
  id,
  image,
  name,
  price,
  showAddButton,
  showBuyButton,
  item,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const productDetails = () => {
    navigate(`/product-detail?id=${id}`);
  };

  const shoppingCart = () => {
    navigate("shopping-cart");
  };

  return (
    <div className="px-3 lg:px-4 py-6 bg-neutral-100 rounded-[9px] flex flex-col justify-between items-center h-full transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:bg-neutral-200">
      {/* like  */}
      <div className="self-stretch flex justify-end items-center gap-2 mb-4">
        <div className="justify-center items-center flex">
          <img
            src={LikeTransparent}
            alt="like"
            className="w-6 h-6 transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
      {/* image  */}
      <img
        className="w-40 h-40 object-contain cursor-pointer mb-4 transition-transform duration-300 hover:scale-105"
        src={image}
        alt={name}
        onClick={productDetails}
      />
      {/* content  */}
      <div className="self-stretch flex-grow flex flex-col justify-between items-center">
        <div className="w-full text-center text-black font-inter leading-normal mb-4">
          {/* nameProduct  */}
          <p className="text-base font-medium mb-2 hover:text-gray-700 transition-colors duration-300">
            {name}
          </p>
          {/* price  */}
          <p className="text-2xl font-semibold tracking-wide hover:text-gray-700 transition-colors duration-300">
            {price}
          </p>
        </div>
        {/* button buy  */}
        {showBuyButton && (
          <button
            className="w-full lg:px-16 px-10 py-3 bg-black rounded-lg justify-center items-center gap-2 inline-flex mb-2 transition-colors duration-300 hover:bg-gray-800"
            onClick={shoppingCart}
          >
            <span className="text-center text-white text-sm font-medium font-inter leading-normal">
              Buy Now
            </span>
          </button>
        )}
        {/* button add  */}
        {showAddButton && (
          <button
            className="w-full lg:px-16 px-10 py-3 bg-black rounded-lg justify-center items-center gap-2 inline-flex transition-colors duration-300 hover:bg-gray-800"
            onClick={() => dispatch(addProduct(item))}
          >
            <span className="text-center text-white text-sm font-medium font-inter leading-normal">
              Add
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default CardProducts;
