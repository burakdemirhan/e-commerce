import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import crousel from "/src/assets/banner.jpg";

const Carousel = () => {
  return (
    <div className="w-full h-[500px] relative overflow-hidden">
      <img className="object-fill " src={crousel} alt="Header Banner" />

      {/* Metin İçeriği */}
      <div className="absolute text-white font-bold left-1/4 top-1/3 space-y-6">
        <h5 className="text-white text-lg">SUMMER 2020</h5>
        <h1 className="text-white text-4xl">NEW COLLECTION</h1>
        <h4 className="text-white text-lg">
          We know how large objects will act, <br /> but things on a small
          scale.
        </h4>
        <button className="btn-primary">SHOP NOW</button>
      </div>

      {/* Sol ve Sağ Butonlar */}
      <button className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white">
        <ChevronLeft size={30} />
      </button>
      <button className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white">
        <ChevronRight size={30} />
      </button>
    </div>
  );
};

export default Carousel;
