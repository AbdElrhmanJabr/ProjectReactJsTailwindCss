import React, { useState } from "react";
import { data } from "../data/data";

const Food = () => {
  const [foods, setFoods] = useState(data);

  //   Filter By Category
  const filterByCategoryHandler = (Category) => {
    setFoods(
      data.filter((item) => {
        return item.category === Category;
      })
    );
  };

  // Filter By Price

  const filterByPriceHandler = (Price) => [
    setFoods(
      data.filter((item) => {
        return (item.price = Price);
      })
    ),
  ];

  return (
    <div className="max-w-[1640px] p-4 py-12 m-auto ">
      <h1 className="text-orange-500 text-4xl font-bold text-center">
        Top Rated Menu Items
      </h1>
      <div className="flex flex-col md:flex-row justify-between">
        {/* Filter Type */}
        <div>
          <p className="font-bold mb-2 text-gray-700">Filter Type</p>
          <div className="flex gap-2 flex-wrap justify-between">
            <button
              onClick={() => setFoods(data)}
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterByCategoryHandler("burger")}
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
            >
              Burgers
            </button>
            <button
              onClick={() => filterByCategoryHandler("pizza")}
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
            >
              Pizza
            </button>
            <button
              onClick={() => filterByCategoryHandler("salad")}
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
            >
              Salads
            </button>
            <button
              onClick={() => filterByCategoryHandler("chicken")}
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
            >
              Chickens
            </button>
          </div>
        </div>
        {/* Filter Price */}
        <div>
          <p className="font-bold mb-2 text-gray-700">Filter Price</p>
          <div className="flex mt-2 gap-2 flex-wrap justify-between max-w-[300px]">
            <button
              onClick={() => filterByPriceHandler("$")}
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
            >
              $
            </button>
            <button
              onClick={() => filterByPriceHandler("$$")}
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
            >
              $$
            </button>
            <button
              onClick={() => filterByPriceHandler("$$$")}
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
            >
              $$$
            </button>
            <button
              onClick={() => filterByPriceHandler("$$$$")}
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
            >
              $$$$
            </button>
            <button
              onClick={() => filterByPriceHandler("$$$$$")}
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
            >
              $$$$$
            </button>
          </div>
        </div>
      </div>

      {/* Foods */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => {
          return (
            <div
              key={index}
              className="border shadow-lg rounded-lg hover:scale-105 duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-[300px] w-full object-cover rounded-t-lg"
              />
              <div className="flex justify-between p-2 py-4">
                <p className="text-gray-700 font-bold">{item.name}</p>
                <p>
                  <span className="bg-orange-500 p-2 rounded-full text-white">
                    {item.price}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Food;
