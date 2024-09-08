import React from "react";
import home from "../assets/home.png";
import logo from "../assets/logo.png";
import invest from "../assets/invest.png";
import mint from "../assets/mint.png";
import profile from "../assets/profile.png";
import blue from "../assets/blue.png";
import settings from "../assets/settings.png";
import down from "../assets/down.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex px-2 py-4 justify-between cursor-pointer">
      <div className="flex flex-row ">
        <Link to="/" className="flex ">
          <img src={logo} alt="logo" />
          <div className="px-2 font-bold text-xl text-black flex justify-center items-center">
            Cropcrypt
          </div>
        </Link>

        <div className="flex md:px-1 lg:px-2">
          <div className="flex justify-center items-center">
            <img src={home} alt="home" className="w-5 h-5" />
          </div>

          <div className="px-2 text-black mt-0.5 flex justify-center items-center">
            Home
          </div>
        </div>

        <div className="flex md:px-1 lg:px-2">
          <div className="flex justify-center items-center">
            <img src={invest} alt="home" className="w-5 h-5" />
          </div>

          <Link
            to="/dashboard"
            className="px-2 text-grey mt-0.5 flex justify-center items-center"
          >
            <div>Invest</div>
          </Link>
        </div>

        <Link to="/createAsset" className="flex px-2">
          <div className="flex justify-center items-center">
            <img src={mint} alt="home" className="w-5 h-5" />
          </div>

          <div className="px-2 text-grey  mt-0.5 flex justify-center items-center">
           Create Assets
          </div>
        </Link>

        <div className="flex px-2">
          <div className="flex justify-center items-center">
            <img src={profile} alt="home" className="w-5 h-5" />
          </div>

          <div className="px-2 text-grey  mt-0.5 flex justify-center items-center">
            Profile
          </div>
        </div>
      </div>

      {/* <div className="px-10"></div> */}

      <div className="flex justify-center items-center">
        <div className="flex px-2 justify-center items-center">
          <img src={settings} alt="home" className="w-8 h-8" />
        </div>

        <div className="flex justify-center gap-2 items-center">
          <img src={blue} alt="home" className="w-10 z-20 h-10" />

          <button className="flex flex-row ml-[-34px] border-2 border-grey bg-green-100 rounded-2xl py-1 px-5 text-deepgreen justify-center items-center">
            <div className="px-3 font-bold">Asset Chain</div>
            <img src={down} alt="home" className="px-1 w-5 h-2 mt-1 z-20" />
          </button>

          <button className="flex text-white rounded-3xl hover:bg-white hover:text-[#359A35] hover:border-2 hover:border-[#359A35] transiton-all duration-300  bg-[#359A35] py-2 px-1 justify-center items-center">
            <div className="px-2  font-semibold">Connect Wallet</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
