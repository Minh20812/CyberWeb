import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/slice/cartSlice";
import Footer from "../../components/Footer";

const COLORS = ["black", "purple-700", "red-600", "yellow-500", "gray-200"];
const STORAGE_OPTIONS = ["128GB", "256GB", "512GB", "1TB"];
const SPECIFICATIONS = [
  { label: "Screen size", value: '6.7"' },
  { label: "Main camera", value: "48-12-12 MP" },
  { label: "CPU", value: "Apple A16 Bionic" },
  { label: "Front-camera", value: "12 MP" },
  { label: "Number of Cores", value: "6" },
  { label: "Battery capacity", value: "4323 mAh" },
];
const ADDITIONAL_INFO = [
  { icon: "🚚", title: "Free Delivery", subtitle: "1-2 day" },
  { icon: "✅", title: "In Stock", subtitle: "Today" },
  { icon: "🛡️", title: "Guaranteed", subtitle: "1 year" },
];

const ProductDetailsPage = () => {
  const [productDetails, setProductDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("id");
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      fetch(`https://dummyjson.com/products/${query}`)
        .then((res) => {
          if (!res.ok) throw new Error("Network response was not ok");
          return res.json();
        })
        .then((data) => {
          setProductDetails(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching product details:", error);
          setError(error.message);
          setIsLoading(false);
        });
    }
  }, [query]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!productDetails) return <div>No product details found.</div>;

  const imagesToShow =
    productDetails.images && productDetails.images.length > 0
      ? productDetails.images
      : [productDetails.thumbnail];

  return (
    <>
      <div className="container mx-auto px-4 py-8 md:px-8 lg:px-16 mt-[88px]">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Product Images */}
          <div className="lg:w-1/2">
            <div className="flex gap-4">
              <div className="flex flex-col gap-4 min-w-[64px]">
                {imagesToShow.slice(0, 4).map((image, index) => (
                  <img
                    key={index}
                    className={`w-16 h-20 object-cover cursor-pointer ${
                      selectedImage === index ? "border-2 border-blue-500" : ""
                    }`}
                    src={
                      image ||
                      `https://via.placeholder.com/64x80?text=Image${index + 1}`
                    }
                    alt={`Product thumbnail ${index + 1}`}
                    onClick={() => setSelectedImage(index)}
                  />
                ))}
              </div>
              <img
                className="flex-grow object-cover"
                src={
                  imagesToShow[selectedImage] ||
                  "https://via.placeholder.com/413x516"
                }
                alt={productDetails.title}
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:w-1/2">
            <h1 className="text-3xl font-bold mb-4">{productDetails.title}</h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-medium">
                ${productDetails.price}
              </span>
              <span className="text-xl text-neutral-400 line-through">
                $
                {(
                  productDetails.price /
                  (1 - productDetails.discountPercentage / 100)
                ).toFixed(2)}
              </span>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <p className="mb-2">Select color:</p>
              <div className="flex gap-2">
                {COLORS.map((color) => (
                  <div
                    key={color}
                    className={`w-8 h-8 rounded-full bg-${color} cursor-pointer`}
                  />
                ))}
              </div>
            </div>

            {/* Storage Selection */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {STORAGE_OPTIONS.map((storage) => (
                <button
                  key={storage}
                  className="px-4 py-2 border rounded-lg text-sm font-medium hover:bg-gray-100"
                >
                  {storage}
                </button>
              ))}
            </div>

            {/* Specifications */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {SPECIFICATIONS.map(({ label, value }) => (
                <div key={label} className="bg-zinc-100 p-3 rounded-md">
                  <p className="text-sm text-neutral-400">{label}</p>
                  <p className="text-sm font-medium">{value}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-neutral-500 mb-6">
              {productDetails.description}
              <span className="text-zinc-800 underline cursor-pointer ml-1">
                More...
              </span>
            </p>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-6">
              <button className="flex-1 py-3 border border-black rounded-md font-medium hover:bg-gray-100">
                Add to Wishlist
              </button>
              <button
                className="flex-1 py-3 bg-black text-white rounded-md font-medium hover:bg-gray-800"
                onClick={() => dispatch(addProduct(productDetails))}
              >
                Add to Cart
              </button>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {ADDITIONAL_INFO.map(({ icon, title, subtitle }) => (
                <div key={title} className="flex items-center gap-3">
                  <div className="p-3 bg-neutral-100 rounded-lg">{icon}</div>
                  <div>
                    <p className="text-sm text-neutral-500">{title}</p>
                    <p className="text-sm font-medium">{subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Details Section */}
      <div className="container mx-auto px-4 py-8 bg-white rounded-lg">
        <h2 className="text-2xl font-medium mb-6">Details</h2>
        <p className="text-neutral-400 text-sm mb-8">
          Just as a book is judged by its cover, the first thing you notice when
          you pick up a modern smartphone is the display. Nothing surprising,
          because advanced technologies allow you to practically level the
          display frames and cutouts for the front camera and speaker, leaving
          no room for bold design solutions. And how good that in such realities
          Apple everything is fine with displays. Both critics and mass
          consumers always praise the quality of the picture provided by the
          products of the Californian brand. And last year's 6.7-inch Retina
          panels, which had ProMotion, caused real admiration for many.
        </p>

        {/* Screen Specifications */}
        <div className="mb-10">
          <h3 className="text-xl font-medium mb-4">Screen</h3>
          {[
            { label: "Screen diagonal", value: '6.7"' },
            { label: "The screen resolution", value: "2796x1290" },
            { label: "The screen refresh rate", value: "120 Hz" },
            { label: "The pixel density", value: "460 ppi" },
            { label: "Screen type", value: "OLED" },
            {
              label: "Additionally",
              value:
                "Dynamic Island, Always-On display, HDR display, True Tone, Wide color (P3)",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-2 border-b border-stone-300"
            >
              <span className="text-base">{item.label}</span>
              <span className="text-sm">{item.value}</span>
            </div>
          ))}
        </div>

        {/* CPU Specifications */}
        <div className="mb-10">
          <h3 className="text-xl font-medium mb-4">CPU</h3>
          {[
            { label: "CPU", value: "A16 Bionic" },
            { label: "Number of cores", value: "6" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-2 border-b border-stone-300"
            >
              <span className="text-base">{item.label}</span>
              <span className="text-sm">{item.value}</span>
            </div>
          ))}
        </div>

        <button className="px-14 py-3 border border-neutral-600 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
          View More
        </button>
      </div>

      {/* Reviews Section */}
      <div className="container mx-auto px-4 py-8 mt-8">
        <h2 className="text-2xl font-medium mb-8">Reviews</h2>

        <div className="flex flex-col md:flex-row gap-8 mb-8">
          {/* Overall Rating */}
          <div className="bg-neutral-50 rounded-3xl p-8 text-center md:w-1/4">
            <div className="text-5xl font-medium mb-2">4.8</div>
            <div className="text-sm text-neutral-400">of 125 reviews</div>
          </div>

          {/* Rating Breakdown */}
          <div className="flex-1">
            {[
              { label: "Excellent", count: 100, width: "w-[90%]" },
              { label: "Good", count: 11, width: "w-[55%]" },
              { label: "Average", count: 3, width: "w-[20%]" },
              { label: "Below Average", count: 8, width: "w-[45%]" },
              { label: "Poor", count: 1, width: "w-[10%]" },
            ].map((item, index) => (
              <div key={index} className="flex items-center mb-4">
                <span className="w-32 text-lg">{item.label}</span>
                <div className="flex-1 h-1 bg-zinc-300 rounded-full">
                  <div
                    className={`h-1 bg-amber-300 rounded-full ${item.width}`}
                  ></div>
                </div>
                <span className="w-8 text-right text-neutral-400">
                  {item.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Comment Input */}
        <input
          type="text"
          placeholder="Leave Comment"
          className="w-full p-4 border border-stone-300 rounded-md mb-8"
        />

        {/* User Reviews */}
        {[
          {
            name: "Grace Carey",
            date: "24 January, 2023",
            comment:
              "I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn't be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn't connect with my data plan, since the new phones don't have the physical Sim tray anymore, but couldn't have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. It was super easy to set up and the phone works and looks great. It truly was in excellent condition. Highly recommend!!!🖤",
          },
          {
            name: "Ronald Richards",
            date: "24 January, 2023",
            comment:
              "This phone has 1T storage and is durable. Plus all the new iPhones have a C port! Apple is phasing out the current ones! (All about the Benjamin's) So if you want a phone that's going to last grab an iPhone 14 pro max and get several cords and plugs.",
          },
          {
            name: "Darcy King",
            date: "24 January, 2023",
            comment:
              "I might be the only one to say this but the camera is a little funky. Hoping it will change with a software update: otherwise, love this phone! Came in great condition",
            images: true,
          },
        ].map((review, index) => (
          <div key={index} className="bg-neutral-50 rounded-lg p-6 mb-6 flex">
            <img
              className="w-14 h-14 rounded-full mr-4"
              src="https://via.placeholder.com/56x56"
              alt={review.name}
            />
            <div>
              <div className="flex justify-between mb-2">
                <h3 className="font-bold">{review.name}</h3>
                <span className="text-sm text-neutral-400">{review.date}</span>
              </div>
              <p className="text-zinc-500 mb-4">{review.comment}</p>
              {review.images && (
                <div className="flex gap-2">
                  <img
                    className="w-28 h-20 rounded-md"
                    src="https://via.placeholder.com/118x88"
                    alt="Review"
                  />
                  <img
                    className="w-28 h-20 rounded-md"
                    src="https://via.placeholder.com/118x88"
                    alt="Review"
                  />
                </div>
              )}
            </div>
          </div>
        ))}

        <button className="px-14 py-3 border border-neutral-600 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
          View More
        </button>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
