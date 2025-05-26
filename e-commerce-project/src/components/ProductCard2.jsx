import React from "react";

const products = [
  {
    id: 1,
    image: "/assets/card5.jpg",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 2,
    image: "/assets/card6.jpg",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 3,
    image: "/assets/card7.jpg",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 4,
    image: "/assets/card8.jpg",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
];

const ProductCard = () => {
  return (
    <div className=" flex flex-col  py-4">
      <div className="w-full h-full flex flex-wrap justify-between gap-6 px-28">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card bg-white flex flex-col justify-between p-4 rounded-lg shadow-md w-full sm:w-[48%] md:w-[30%] lg:w-[22%]"
          >
            <img
              src={product.image}
              alt={product.title}
              className="product-image  "
            />
            <div className="text-center mt-4">
              <h5 className="font-bold">{product.title}</h5>
              <p className="text-gray-500">{product.department}</p>
              <div className="flex gap-2 justify-center mt-2">
                <h5 className="text-gray-400 line-through">
                  {product.oldPrice}
                </h5>
                <h5 className="text-dolar font-bold">{product.newPrice}</h5>
              </div>
              <div className="flex gap-2 justify-center mt-2">
                <div className="elips bg-yesil w-5 h-5 rounded-full" />
                <div className="elips bg-golden w-5 h-5 rounded-full" />
                <div className="elips bg-orange w-5 h-5 rounded-full" />
                <div className="elips bg-muted w-5 h-5 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
