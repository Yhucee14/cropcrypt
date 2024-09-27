import React from "react";
import phone from "../assets/phone.png";
import { Link } from "react-router-dom";
import { ConnectButton, RainbowKitProvider, lightTheme } from "@rainbow-me/rainbowkit";

const Hero = () => {
  return (
    <RainbowKitProvider
    theme={lightTheme({
      accentColor: "#359A35", // Set your preferred green color here
      accentColorForeground: "white",
    })}
  >
   <div className="flex py-4 xx:flex-col sm:flex-row justify-between items-center">
      <div className="flex px-4 flex-col">
        <div className="font-bold text-2xl text py-1 text-[#0F2816]">
          <p>Empowering Sustainable</p>
          <p> Agriculture through</p>
          <p>Decentralized Investing.</p>
        </div>
        <div className="font-normal py-4 leading-6 text-xl">
          <p>
            Easily invest, track, and harvest attractive yields with{" "}
            <b className="text-[#1B6909] ">CropCrypt.</b>
          </p>
        </div>
        <div className="flex gap-2 flex-row">
          <div className="py-1 mt-0.5">
            <Link to='/invest'>
            <button className="flex bg-gradient-invest rounded-3xl py-2 px-1 text-white justify-center items-center">
              <div className="px-3 font-bold">Invest Now!</div>
            </button>
            </Link>
           
          </div>

          <div className="py-1 rounded-xl mt-0.5">
            <ConnectButton />
          </div>
        </div>
      </div>
      <div>
        <img src={phone} alt="home" className=" z-20" />
      </div>
    </div>
  </RainbowKitProvider>
  );
};

export default Hero;
