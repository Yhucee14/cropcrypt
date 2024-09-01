import React from "react";
import colorCoin from "../assets/colorCoin.png";
import bag from "../assets/bag.png";

const Discover = () => {
  return (
    <div className="flex py-8 flex-col justify-center items-center">
      <div className="flex flex-row font-bold text-4xl py-5">
        <p className="px-1 ">Discover our</p>
        <p className="text-[#1B6909] ">Ecosystem</p>
      </div>

      <div className="flex gap-2 flex-row py-3">
        <div className="flex flex-col md:w-52 lg:w-64  px-3 py-4 bg-[#F4F4F4] rounded-2xl border border-gray-400">
          <p className="font-bold text-2xl"> Invest stable coins with ease</p>
          <p className="py-5 md:mt-12 lg:mt-11">
            Invest in any assets of your choice with an ease by using{" "}
            <b className="text-[#1B6909] py-1">STABLE COINS.</b>
          </p>
          <div className="flex mt-2 justify-center">
            <img src={colorCoin} alt="home" className="w-28 z-20" />
          </div>
        </div>

        <div className="flex flex-col md:w-52 lg:w-64  px-3 py-4 bg-[#F4F4F4] rounded-2xl border border-gray-400">
          <p className="font-bold text-2xl">
            Explore inventories & manage assets
          </p>
          <p className="py-5 md:mt-4 lg:mt-11">
            Explore top Asset marketplace and manage your Assets securely
          </p>
        </div>

        <div className="flex flex-col md:w-52 lg:w-64 px-2 py-4 bg-[#F4F4F4] rounded-2xl border border-gray-400">
          <p className="font-bold text-2xl">
            Connect with farmers and investors
          </p>
          <p className="py-2 md:mt-8 lg:mt-6">
            Our decentralized platform bridges the gap between farmers and
            investors, revolutionizing the way agricultural projects are funded.
          </p>
        </div>

        <div className="flex flex-col md:w-52 lg:w-64 px-3 py-2 justify-center items-center bg-[#F4F4F4] rounded-2xl border border-gray-400">
          <p className="font-bold mt-[-0px] text-2xl">
            Earn rewards & build your portfolio
          </p>
          <p className="py-5 md:mt-7 lg:mt-10">
            Earn Crop RWA when you invest in any agricultural assets
          </p>
          <div className="flex md:mt-12 lg:mt-2 justify-center">
            <img src={bag} alt="home" className="w-28 z-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
