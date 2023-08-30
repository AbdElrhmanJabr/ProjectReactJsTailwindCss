import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[700px] relative">
        {/* over Lay */}
        <div className="absolute h-full w-full max-h-[700px] text-gray-200 bg-black/40 flex flex-col justify-center p-4">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold">
            The <span className=" text-orange-500">Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold">
            <span className=" text-orange-500">Foods </span> Delivered
          </h1>
        </div>
        <img
          className="object-cover w-full max-h-[700px]"
          src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Hero;
