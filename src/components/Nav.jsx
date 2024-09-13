import React, { useState } from "react";
import home from "../assets/home.png";
import logo from "../assets/logo.png";
import invest from "../assets/invest.png";
import mint from "../assets/mint.png";
import profile from "../assets/profile.png";
import blue from "../assets/blue.png";
import settings from "../assets/settings.png";
import down from "../assets/down.png";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isAssetChainDropdownVisible, setAssetChainDropdownVisible] =
    useState(false);

  const location = useLocation();
  const isActive = (path) =>
    location.pathname === path ? "text-green-500" : "text-black";

  return (
    <div className="flex px-2 py-4 justify-between cursor-pointer">
      <div className="flex flex-row ">
        <Link to="/" className="flex ">
          <img src={logo} alt="logo" />
          <div className="px-2 font-bold text-xl text-black flex justify-center items-center">
            Cropcrypt
          </div>
        </Link>

        <Link to="/" className={`flex md:px-1 font-medium lg:px-2 ${isActive("/")}`}>
          <div className="flex justify-center items-center">
            <img src={home} alt="home" className="w-5 h-5" />
          </div>
          <div className="px-2 mt-0.5 flex justify-center items-center">
            Home
          </div>
        </Link>

        <Link
          to="/invest"
          className={`flex md:px-1 font-medium lg:px-2 ${isActive("/dashboard")}`}
        >
          <div className="flex justify-center items-center">
            <img src={invest} alt="invest" className="w-5 h-5" />
          </div>
          <div className="px-2 mt-0.5 flex justify-center items-center">
            Invest
          </div>
        </Link>

        <Link
          to="/createAsset"
          className={`flex md:px-1 font-medium lg:px-2 ${isActive("/createAsset")}`}
        >
          <div className="flex justify-center items-center">
            <img src={mint} alt="createAsset" className="w-5 h-5" />
          </div>
          <div className="px-2 mt-0.5 flex justify-center items-center">
            Create Assets
          </div>
        </Link>

        <Link
          to="/profile"
          className={`flex md:px-1 font-medium lg:px-2 ${isActive("/profile")}`}
        >
          <div className="flex justify-center items-center">
            <img src={profile} alt="profile" className="w-5 h-5" />
          </div>
          <div className="px-2 mt-0.5 flex justify-center items-center">
            Profile
          </div>
        </Link>
      </div>

      {/* <div className="px-10"></div> */}

      <div className="flex justify-center items-center">
        <div className="flex px-2 justify-center items-center">
          <img src={settings} alt="home" className="w-8 h-8" />
        </div>

        <div className="flex justify-center gap-2 items-center">
          <img src={blue} alt="home" className="w-10 z-20 h-10" />

          <div
            className="relative"
            onMouseEnter={() => setAssetChainDropdownVisible(true)}
            onMouseLeave={() => setAssetChainDropdownVisible(false)}
          >
            <button className="flex flex-row ml-[-34px] border-2 border-grey bg-green-100 rounded-2xl py-1 px-5 text-deepgreen justify-center items-center">
              <div className="px-3 font-bold">Asset Chain</div>
              <img src={down} alt="home" className="px-1 w-5 h-2 mt-1 z-20" />
            </button>

            {isAssetChainDropdownVisible && (
              <div className="absolute bg-green-100 mt-1 border border-gray-200 left-[-15px] rounded-lg shadow-lg w-40 z-50">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100">Chain 1</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Chain 2</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Chain 3</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Chain 4</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Chain 5</li>
                </ul>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setDropdownVisible(true)}
            onMouseLeave={() => setDropdownVisible(false)}
          >
            <button className="flex flex-row text-white rounded-3xl hover:bg-white hover:text-[#359A35] hover:border-2 hover:border-[#359A35] transition-all duration-300 bg-[#359A35] py-2 px-4 justify-center items-center">
              <div className="font-medium">Connect Wallet</div>
            </button>

            {isDropdownVisible && (
              <div className="absolute mt-0 right-0 bg-green-100 border border-gray-200 rounded-lg shadow-lg w-48 z-50">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100">Metamask</li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    Coinbase Wallet
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">Trust Wallet</li>
                  <li className="px-4 py-2 hover:bg-gray-100">WalletConnect</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Phantom</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
