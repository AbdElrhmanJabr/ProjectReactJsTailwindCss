import React from "react";

const HeadLineCard = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Card */}
      <div className="relative rounded-xl text-white">
        {/* Over Lay */}
        <div className="absolute w-full h-full bg-black/40 rounded-xl px-2">
          <h2 className="pt-3 text-2xl font-bold">Sun's Out , BOGO'S Out </h2>
          <p>Through 8/26</p>
          <button className="bg-white text-black border-white absolute bottom-5">
            Order Now
          </button>
        </div>
        <img
          className=" rounded-xl max-h-[160px] md:max-h-[200px] object-cover w-full"
          src="https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="/"
        />
      </div>
      {/* Card */}
      <div className="relative rounded-xl text-white">
        {/* Over Lay */}
        <div className="absolute w-full h-full bg-black/40 rounded-xl px-2">
          <h2 className="pt-3 text-2xl font-bold">New Restaurants </h2>
          <p>Added Daily</p>
          <button className="bg-white text-black border-white absolute bottom-5">
            Order Now
          </button>
        </div>
        <img
          className=" rounded-xl max-h-[160px] md:max-h-[200px] object-cover w-full"
          src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="/"
        />
      </div>
      {/* Card */}
      <div className="relative rounded-xl text-white">
        {/* Over Lay */}
        <div className="absolute w-full h-full bg-black/40 rounded-xl px-2">
          <h2 className="pt-3 text-2xl font-bold">We Deliver Desserts Too </h2>
          <p>Tasty Treats</p>
          <button className="bg-white text-black border-white absolute bottom-5">
            Order Now
          </button>
        </div>
        <img
          className=" rounded-xl max-h-[160px] md:max-h-[200px] object-cover w-full"
          src="https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="/"
        />
      </div>
    </div>
  );
};

export default HeadLineCard;
