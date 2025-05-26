import React from "react";

const ShopCards = () => {
  return (
    <div className="w-full h-full flex flex-col relative">
      <div className="text-center mt-7 space-y-3">
        <h3>EDITOR’S PICK</h3>
        <p className="text-secondtext">
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className="w-3/4 flex  justify-center mx-auto my-12 gap-5">
        <div className="relative w-[510px] h-[500px]">
          <img
            className="w-full h-full object-cover"
            src="/assets/man.jpg"
            alt="Man"
          />
          <button className="absolute left-12 bottom-6 bg-white w-28 h-9 text-ipek font-bold rounded-sm">
            MAN
          </button>
        </div>

        <div className="relative w-[240px] h-[500px]">
          <img
            className="w-full h-full object-cover"
            src="/assets/women.jpg"
            alt="Woman"
          />
          <button className="absolute left-12 bottom-6 bg-white w-28 h-9 text-ipek font-bold rounded-sm">
            WOMAN
          </button>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="relative w-[240px] h-[242px]">
            <img
              className="w-full h-full object-cover"
              src="/assets/girl.jpg"
              alt="Accessories"
            />
            <button className="absolute left-12 bottom-6 bg-white w-32 h-9 text-ipek font-bold rounded-sm">
              ACCESSORIES
            </button>
          </div>
          <div className="relative w-[240px] h-[242px]">
            <img
              className="w-full h-full object-cover"
              src="/assets/boy.jpg"
              alt="Kids"
            />
            <button className="absolute left-12 bottom-6 bg-white w-28 h-9 text-ipek font-bold rounded-sm">
              KIDS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCards;
