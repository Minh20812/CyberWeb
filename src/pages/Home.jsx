import React from "react";
import Banner from "./Home/Banner";
import SmallerBanner from "./Home/SmallerBanner";
import Categories from "./Home/Categories";
import Products from "./Home/Products";
import Discount from "./Home/Discount";
import BannerScroll from "./Home/BannerScroll";
import Banner2 from "./Home/Banner2";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Banner />
      <SmallerBanner />
      <Categories />
      <Products />
      <BannerScroll />
      <Discount />
      <Banner2 />
      <Footer />
    </>
  );
};

export default Home;
