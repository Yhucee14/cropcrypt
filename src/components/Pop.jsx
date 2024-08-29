import React from "react";
import bag from "../assets/bag.png";

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

        <div>
          <p className="leading-5 text-sm py-1 px-1  text-white font-thin">
            Diversity your agricultural investments with our cutting-edge
            blockchain technology and stay ahead of the market curve.
          </p>
        </div>

        <div className="py-1">
          <button className="flex bg-green-600 rounded-lg py-1 px-4 text-white justify-center items-center">
            <div className="px-3 font-bold">Invest Now!</div>
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <img src={bag} alt="home" className=" z-20" />
      </div>
    </div>
  );
};

export default Pop;
