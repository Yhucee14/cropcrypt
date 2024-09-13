import React from "react";
import lock from "../assets/lock.png";

const Lock = () => {
  return (
    <div className=" flex xx:flex-col sm:flex-row items-center justify-between rounded-lg px-1 py-5 lg:px-7">
      <div className="lg:w-[500px] w-full sm:flex-row md:w-[650px] lg:px-5">
        <p className="font-bold text-2xl">Securely Invest with Stable Coins</p>
        <p className="font-bold  text-2xl">Anywhere and Get Rewards</p>
        <p className="py-5 px-1">
          Our platform empowers you to support farmers and agricultural projects
          worldwide, while earning attractive yields on your investment and
          tokenized rewards for participating in the ecosystem.
        </p>
      </div>

      <div className="px-5 py-2">
        <img src={lock} alt="home" className=" z-20" />
      </div>
    </div>
  );
};

export default Lock;
