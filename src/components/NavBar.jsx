import React, { useState } from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between  items-center p-4">
      {/* left side */}
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu size={30} onClick={() => setNav(true)} />
        </div>
        <div>
          <h1 className="sm:text-2xl md:text-3xl lg:text-4xl px-2">
            Best <span className="font-bold">Eats</span>
          </h1>
        </div>
        <div className="hidden md:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">PickUp</p>
        </div>
      </div>
      {/* Search input */}
      <div className="bg-gray-200 flex items-center rounded-full w-[200px] sm:w-[400px] md:w-[500px] px-2">
        <AiOutlineSearch size={25} />
        <input
          type="text"
          placeholder="Search Foods"
          className="bg-transparent w-full p-2 outline-none"
        />
      </div>
      {/* Cart */}
      <button className="rounded-full flex items-center bg-black text-white px-4 py-2">
        <BsFillCartFill size={20} className="mr-2" />
        Cart
      </button>
      {/* overLay */}
      {nav ? (
        <div className="bg-black/80 fixed h-screen w-full top-0 left-0 z-10"></div>
      ) : (
        ""
      )}
      {/* side drawer menu */}

      <div
        className={`fixed duration-300 h-screen w-[300px] ${
          nav ? "left-0" : "left-[-100%]"
        } top-0 bg-white z-10 p-3 `}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl">
            Best <span className="font-bold">Eats</span>
          </h2>
          <AiOutlineClose
            size={25}
            className="cursor-pointer"
            onClick={() => setNav(false)}
          />
        </div>
        <nav className="py-4">
          <ul className="text-gray-800">
            <li className="flex items-center py-4 text-xl font-bold">
              <TbTruckDelivery size={25} className="mr-4" /> Order
            </li>
            <li className="flex items-center py-4 text-xl font-bold">
              <MdFavorite size={25} className="mr-4" /> Favorite
            </li>
            <li className="flex items-center py-4 text-xl font-bold">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="flex items-center py-4 text-xl font-bold">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="flex items-center py-4 text-xl font-bold">
              <AiFillTag size={25} className="mr-4" /> Promotions
            </li>
            <li className="flex items-center py-4 text-xl font-bold">
              <BsFillSaveFill size={25} className="mr-4" /> Best Ones
            </li>
            <li className="flex items-center py-4 text-xl font-bold">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
