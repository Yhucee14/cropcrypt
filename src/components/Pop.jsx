import React from "react";
import bag from "../assets/bag.png";
import { Link } from "react-router-dom";

const Pop = () => {
  return (
    <div className="py-3 flex flex-row justify-between rounded-lg px-3 bg-[#1B6909]">
      <div className="flex justify-center flex-col">
        <div className="py-1 flex flex-row text-2xl">
          <p className=" px-1 text-white font-bold">Enjoy 2.30% APY</p>
          <p className="px-1 text-[#48F548] font-bold ">
            on your first Investment!
          </p>
        </div>

        <div className="lg:py-2 py-2">
          <p className="leading-5 text-sm py-1 px-1  text-white font-thin">
            Diversity your agricultural investments with our cutting-edge
            blockchain technology and stay ahead of the market curve.
          </p>
        </div>

        <div className="py-1">
          <Link to="/dashboard">
            <button className="flex hover:bg-white hover:text-[#359A35] transition-all duration-300 bg-green-600 lg:mt-4 rounded-lg py-2 px-4 text-white justify-center items-center">
              <div className="px-3 font-bold">Invest Now!</div>
            </button>
          </Link>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <img src={bag} alt="home" className=" z-20" />
      </div>
    </div>
  );
};

export default Pop;
