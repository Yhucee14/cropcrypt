import { useState } from "react";
import Nav from "../components/Nav";
import leftarrow from "../assets/leftarrow.png";
import { Link } from "react-router-dom";
import tomato from "../assets/tomato.png";
import filter from "../assets/filter.png";
import grid from "../assets/grid.png";
import dotmenu from "../assets/dotmenu.png";
import cart from "../assets/cart.png";
import search from "../assets/search.png";
import cornseed from "../assets/cornseed.png";
import zoom from "../assets/zoom.png";
import bag from "../assets/bag.png";
import GreenFooter from "./GreenFooter";

const NftPortfolio = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div>
      <Nav />

      <div className="xx:px-3 sm:px-8">
        <Link to="/invest" className="flex py-5 flex-row gap-4">
          <img src={leftarrow} alt="home" className="h-5 w-5 mt-1 z-20" />
          <p className="font-bold text-lg">NFT Portfolio</p>
        </Link>

        <div className="flex xx:flex-col sm:flex-row justify-between bg-[#000000CC] text-[#FFFFFF] py-4 rounded-lg px-2 gap-4">
          <div className="flex flex-row items-center px-1 gap-4">
            <div className="rounded-full items-center">
              <img src={tomato} alt="home" className="w-14 h-14 " />
            </div>

            <div className="flex flex-col ">
              <p className="font-bold py-1">BIMF</p>
              <p className="text-sm font-normal text-[#ffffffd1]">
                From: Bimbo maize farm
              </p>
            </div>
          </div>

          <div className="flex xx:flex-col sm:flex-row gap-2">
            <div className="flex xx:flex-row sm:flex-col justify-between gap-2 xx:px-2 sm:px-4">
              <p className=" text-[#ffffff7b] py-1">Floor Price (USDT)</p>
              <p className="text-[#ffffff7b] py-1">
                <b className="text-white">33.02K</b> USDT
              </p>
            </div>

            <div className="flex xx:flex-row sm:flex-col justify-between  gap-2 xx:px-2 sm:px-4">
              <p className=" text-[#ffffff7b] ">Market Cap</p>
              <p className="text-[#ffffff7b]">
                <b className="text-white ">$90270</b> USDT
              </p>
            </div>

            <div className="flex xx:flex-row sm:flex-col justify-between gap-2 xx:px-2 sm:px-4">
              <p className=" text-[#ffffff7b] ">Owners</p>
              <p>300</p>
            </div>

            <div className="flex xx:flex-row sm:flex-col justify-between gap-2 xx:px-2 sm:px-4">
              <p className=" text-[#ffffff7b] ">Listed Asset</p>
              <p>100</p>
            </div>

            <div className="flex xx:flex-row sm:flex-col justify-between gap-2 xx:px-2 sm:px-4">
              <p className=" text-[#ffffff7b] ">Total Supply)</p>
              <p>10K</p>
            </div>
          </div>
        </div>

        <div className="flex py-5 px-1 mt-3 flex-row ">
          <div className="flex flex-row justify-between gap-2">
            <button className="border-b-4 flex justify-center items-center font-semibold text-md px-2">
              Items
            </button>

            <button
              className={`border-b-4  flex justify-center items-center font-semibold text-md px-2`}
            >
              Activity
            </button>

            <button
              className={`border-b-4 flex justify-center items-center font-semibold text-md px-2`}
            >
              Others
            </button>
          </div>
        </div>

        {/*search */}
        <div className="flex xx:flex-col sm:flew-row justify-between gap-2">
          <div className="flex flex-row gap-2">
            <div>
              <img src={filter} alt="home" className="w-12 h-10 z-20" />
            </div>
            <div className="bg-[#000000CC] py-2 px-3 rounded-md flex justify-center items-center">
              <img src={grid} alt="home" className=" z-20" />
            </div>
            <div className="bg-[#000000CC] py-2 px-3 rounded-md flex justify-center items-center">
              <img src={dotmenu} alt="home" className=" z-20" />
            </div>
          </div>

          <div className="flex xx:flex-col sm:flex-row gap-2">
            <div className="relative flex xx:w-full md:w-[500px] md:h-[40px]  shadow-sm">
              <div className="w-full flex  items-center py-3 border px-14 rounded-md">
                <input
                  type="text"
                  placeholder="Search items"
                  className=" focus:outline-none  focus:ring-[#359A35] focus:border-[#A4A4A4]"
                />
              </div>

              <div className="absolute inset-y-0 left-0 flex px-3 xx:gap-2 sm:gap-0 cursor-pointer items-center">
                <img
                  src={search}
                  alt="Search Icon"
                  className="h-[25px] w-[25px] bg-transparent"
                  style={{ fill: "white" }}
                />
              </div>
            </div>

            <div className=" flex ">
              <button className="flex flex-row text-white rounded-md hover:bg-white hover:text-[#359A35] hover:border-2 hover:border-[#359A35] transition-all duration-300 bg-[#359A35] py-1 px-3 justify-center items-center">
                <div className="font-normal text-sm px-1 py-1">
                  Connect Wallet to buy
                </div>
              </button>
            </div>
          </div>

          <div>
            <img src={cart} alt="home" className="w-12 h-10 z-20" />
          </div>
        </div>

        {/*nft grid */}
        <div className="grid xx:grid-cols-1 gap-2 py-8 sm:grid-cols-3 md:grid-cols-4">
          <div className="relative grid rounded-xl">
            <img
              src={cornseed}
              alt="home"
              className={`w-full z-50 transition-transform duration-300 ${
                isZoomed ? "scale-125" : "scale-100"
              }`}
            />

            <div className="bg-[#000000] absolute rounded-md w-full bottom-0 z-50 px-3 py-1 text-[#FFFFFF]">
              <p className="py-1">Corn #2091</p>
              <p className="py-1 text-[#ffffff7b] text-sm ">
                <b className="text-white text-lg">0.039</b> USDT
              </p>
              <div className="flex py-1 text-[#ffffff7b] flex-row justify-between">
                <p>Last 3.0144 USDT</p>
                <button onClick={toggleZoom}>
                  <img src={zoom} alt="home" className="z-20" />
                </button>
              </div>
            </div>
          </div>

          <div className="relative grid rounded-xl">
            <img
              src={cornseed}
              alt="home"
              className={`w-full z-50 transition-transform duration-300 ${
                isZoomed ? "scale-125" : "scale-100"
              }`}
            />

            <div className="bg-[#000000] absolute rounded-md w-full bottom-0 z-50 px-3 py-1 text-[#FFFFFF]">
              <p className="py-1">Corn #2091</p>
              <p className="py-1 text-[#ffffff7b] text-sm ">
                <b className="text-white text-lg">0.039</b> USDT
              </p>
              <div className="flex py-1 text-[#ffffff7b] flex-row justify-between">
                <p>Last 3.0144 USDT</p>
                <button onClick={toggleZoom}>
                  <img src={zoom} alt="home" className="z-20" />
                </button>
              </div>
            </div>
          </div>

          <div className="relative grid rounded-xl">
            <img
              src={cornseed}
              alt="home"
              className={`w-full z-50 transition-transform duration-300 ${
                isZoomed ? "scale-125" : "scale-100"
              }`}
            />

            <div className="bg-[#000000] absolute rounded-md w-full bottom-0 z-50 px-3 py-1 text-[#FFFFFF]">
              <p className="py-1">Corn #2091</p>
              <p className="py-1 text-[#ffffff7b] text-sm ">
                <b className="text-white text-lg">0.039</b> USDT
              </p>
              <div className="flex py-1 text-[#ffffff7b] flex-row justify-between">
                <p>Last 3.0144 USDT</p>
                <button onClick={toggleZoom}>
                  <img src={zoom} alt="home" className="z-20" />
                </button>
              </div>
            </div>
          </div>

          <div className="relative grid rounded-xl">
            <img
              src={cornseed}
              alt="home"
              className={`w-full z-50 transition-transform duration-300 ${
                isZoomed ? "scale-125" : "scale-100"
              }`}
            />

            <div className="bg-[#000000] absolute rounded-md w-full bottom-0 z-50 px-3 py-1 text-[#FFFFFF]">
              <p className="py-1">Corn #2091</p>
              <p className="py-1 text-[#ffffff7b] text-sm ">
                <b className="text-white text-lg">0.039</b> USDT
              </p>
              <div className="flex py-1 text-[#ffffff7b] flex-row justify-between">
                <p>Last 3.0144 USDT</p>
                <button onClick={toggleZoom}>
                  <img src={zoom} alt="home" className="z-20" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="py-3 flex xx:flex-col sm:flex-row justify-between rounded-lg px-3 bg-[#1B6909]">
          <div className="flex justify-center flex-col">
            <div className="py-1 flex xx:flex-col sm:flex-row xx text-2xl">
              <p className=" px-1 text-white font-bold">Enjoy 2.30% APY</p>
              <p className="px-1 text-[#48F548] font-bold ">
                on your first Investment!
              </p>
            </div>

            <div className="lg:py-2 py-2">
              <p className="leading-5 text-sm py-1 px-1 w-[500px] text-white font-thin">
                Diversity your agricultural investments with our cutting-edge
                blockchain technology and stay ahead of the market curve.
              </p>
            </div>

            <div className="py-1">
              <Link to="/invest">
                <button className="flex hover:bg-white hover:text-[#359A35] transition-all duration-300 bg-green-600 lg:mt-4 rounded-lg py-2 px-4 text-white justify-center items-center">
                  <div className="px-3 font-bold">Invest Now!</div>
                </button>
              </Link>
            </div>
          </div>

          <div className="sm:flex xx:hidden justify-center items-center">
            <img src={bag} alt="home" className=" z-50" />
          </div>

         
        </div>

        <div className="p-10"></div>

        <GreenFooter />
      </div>
    </div>
  );
};

export default NftPortfolio;
