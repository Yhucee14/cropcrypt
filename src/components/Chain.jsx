import React from "react";
import blue from "../assets/blue.png";
const Chain = () => {
  return (
    <div className="bg-black py-24 px-28 lg:px-48">
      <div className=" flex flex-row bg-gradient-chain items-center justify-between rounded-lg py-7 px-12 lg:px-7">
        <div className="md:w-[500px] lg:w-[600px] px-2 lg:px-2">
          <p className="font-bold text-2xl">
            Proudly built on Asset Chain Technology
          </p>
          <p className="py-5 ">
            Cropcrypt leverages Asset Chain's secured, transparent, and
            decentralized infrastructure for efficient, tamper-proof, and
            cost-effective management of agricultural assets and investments.
          </p>
        </div>

        <div className="">
          <img src={blue} alt="home" className=" z-20" />
        </div>
      </div>
    </div>
  );
};

export default Chain;
