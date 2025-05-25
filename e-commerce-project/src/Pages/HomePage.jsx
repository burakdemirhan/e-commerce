import React from "react";
import Header from "../layout/Header";
import ShopCards from "../layout/ShopCards";
import Carousel from "../layout/Carousel";
import ProductCard from "../components/ProductCard";
import ProductCard2 from "../components/ProductCard2";
import Carousel2 from "../components/Carousel2";
import Fluid from "../layout/Fluid";
import Blog from "../layout/Blog";
import Footer from "../layout/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <Carousel />
      <ShopCards />
      <ProductCard />
      <ProductCard2 />
      <Carousel2 />
      <Fluid />
      <Blog />
      <Footer />
    </>
  );
};

export default HomePage;
