import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addProduct,
  deleteProduct,
  removeProduct,
} from "../redux/slice/cartSlice";

const Carts = () => {
  const CartProducts = useSelector((state) => state.cart.CartArr);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickId = (id) => {
    navigate(`/product-detail?id=${id}`);
  };

  const totalPrice = CartProducts.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <>
      <div className=" mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 mt-[88px] min-h-screen pb-40">
        <div className=" rounded-lg md:w-2/3">
          {CartProducts.map((item) => (
            <div
              className=" flex max-sm:flex-col items-center justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:justify-start"
              key={item.id}
            >
              <img
                src={item.images[0]}
                alt="product-image"
                className="w-full rounded-lg sm:w-40 cursor-pointer"
                onClick={() => handleClickId(item.id)}
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between ">
                <div className="mt-5 sm:mt-0 mr-4">
                  <h2 className="text-lg font-bold text-gray-900">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
                </div>
                <div className="mt-4 flex max-sm:flex-col justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center border-gray-100">
                    <button
                      className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                      onClick={() => dispatch(deleteProduct(item))}
                    >
                      {" "}
                      -{" "}
                    </button>
                    <input
                      readOnly
                      className="h-8 w-8 border bg-white text-center text-xs outline-none"
                      type="number"
                      value={item.quantity}
                      min="1"
                    />
                    <button
                      className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                      onClick={() => dispatch(addProduct(item))}
                    >
                      {" "}
                      +{" "}
                    </button>
                  </div>
                  <div className="flex items-center space-x-4 my-4">
                    <p className="text-sm">${item.price} USD</p>
                  </div>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-10 w-10 cursor-pointer duration-150 hover:text-red-500 ml-10"
                onClick={() => dispatch(removeProduct(item))}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          ))}
        </div>
        <div>
          <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md">
            <div className="mx-auto max-w-5xl px-6 py-4">
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">
                    $
                    {totalPrice > 100
                      ? totalPrice.toFixed(2)
                      : totalPrice == 0
                      ? "0"
                      : (totalPrice + 4.99).toFixed(2)}{" "}
                    USD
                  </p>
                  <p className="text-sm text-gray-700">
                    {totalPrice > 100
                      ? "Free shipping"
                      : totalPrice == 0
                      ? "Buy Now"
                      : "including a $4.99 shipping fee"}
                  </p>
                </div>
              </div>
              <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                Check out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carts;
