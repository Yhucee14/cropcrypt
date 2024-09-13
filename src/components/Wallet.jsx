import React from "react";
import key from "../assets/key.png";

const Wallet = () => {
  return (
    <div className=" flex md:gap-16 lg:gap-0 xx:flex-col sm:flex-row items-center justify-between rounded-lg py-10 lg:py-16 lg:px-7">
      <div className="px-5 py-2">
        <img src={key} alt="home" className=" z-20" />
      </div>

      <div className="px-2 lg:w-[500px] md:w-[500px] lg:px-5">
        <p className="font-bold text-2xl"> A Wallet that’s Truly Yours.</p>
        <p className="py-5 ">
          Our platform is integrated with <b>multi-chain leading self custodial
          wallets, </b>  which are secured, scalable and trusted by millions of users
          worldwide.
        </p>
      </div>
    </div>
  );
};

export default Wallet;
