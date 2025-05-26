import React from "react";

const Fluid = () => {
  return (
    <div className="flex justify-center items-center space-x-32 ">
      <div className="mt-10">
        <img src="/assets/couple.jpg" alt="" className="rounded-lg" />
      </div>
      <div className="space-y-10">
        <h5 className="text-secondtext">SUMMER 2020</h5>
        <h1 className="text-black">
          Une partie de l'univers <br /> neuronal
        </h1>
        <h4 className="text-secondtext">
          Nous savons comment les grands objets se comportent, <br /> mais nous
          savons aussi comment les choses se passent à petite échelle.
        </h4>
        <div className="space-x-4">
          <button className="btn-primary">BUY NOW</button>
          <button className="btn-primary bg-white text-yesil">READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Fluid;
