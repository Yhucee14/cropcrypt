import React from "react";
import ivoryimg from "../assets/ivoryimg.png";
import share from "../assets/share.png";
import orange from "../assets/orange.png";
import corn from "../assets/corn.png";
import men from "../assets/men.png";
import { Link } from "react-router-dom";

const SectionThree = () => {
  return (
    <div className="py-5 flex flex-col">
      <div className="font-bold py-2 text-2xl px-2">Agricultural Holdings</div>

      <div className="flex py-2 flew-row gap-1">
        <button className="bg-[#81BD81] rounded-3xl py-2 px-2 font-bold text-white">
          Crop farming
        </button>
        <button className=" rounded-3xl py-2 px-2 font-bold border-2 border-[#736D6D]">
          Livestock farming
        </button>
        <button className=" rounded-3xl py-2 px-2 font-bold border-2 border-[#736D6D]">
          Horticulture
        </button>
        <button className=" rounded-3xl py-2 px-1 font-bold border-2 border-[#736D6D]">
          Agroforestry
        </button>
        <button className=" rounded-3xl py-2 px-1 font-bold border-2 border-[#736D6D]">
          Specialty farming
        </button>
        <button className=" rounded-3xl py-2 px-1 font-bold border-2 border-[#736D6D]">
          Specialty farming
        </button>
        <button className=" rounded-3xl py-2 px-1 font-bold border-2 border-[#736D6D]">
          Crop farming
        </button>
      </div>

      <Link to='/asset' className="hover:bg-[#a8a4a479] transition-all duration-300 rounded-lg">
        <div className="flex py-4 flex-col border-b-2 border-b-[#A8A4A4] justify-center">
          <div className="flex flex-row md:justify-start lg:justify-between">
            <div className="w-[500px]">
              <img src={ivoryimg} alt="home" className=" z-20" />
            </div>
            <div className="flex px-5 py-5 flex-row justify-between gap-4">
              <div className="flex flex-col py-2">
                <p className="font-bold py-2 text-2xl">Ivory grape Garden</p>
                <div className="text-[#359A35] flex flex-row gap-2 font-extrabold text-3xl">
                  <p className="">800.00</p>
                  <p className="text-[#A8A4A4] mt-1 flex items-center text-2xl">
                    USDT
                  </p>
                </div>
                <p className="text-[#A8A4A4] font-bold text-lg">
                  Price per 1 shares
                </p>
                <div className="mt-7">
                  <p className=" py-3 text-md ">Annual Return: 8.6%</p>
                  <p className="  text-md ">Annual Appreciation: 9.2%</p>
                </div>
              </div>
              <div className="flex flex-col justify-between py-5">
                <div className="flex flex-row gap-2">
                  <div>
                    <img src={share} alt="home" className=" z-20" />
                  </div>

                  <button className="bg-[#359A35] rounded-xl py-2 px-6 font-bold text-white">
                    BUY
                  </button>
                </div>

                <div>
                  <p className=" py-3 text-md ">Share Price: $300.33</p>
                  <p className="  text-md ">Available shares: 233</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>

      <div className="flex py-4 flex-col border-b-2 border-b-[#A8A4A4] justify-center">
        <div className="flex flex-row md:justify-start lg:justify-between">
          <div className="w-[500px]">
            <img src={orange} alt="home" className=" z-20" />
          </div>
          <div className="flex px-5 py-5 flex-row justify-between gap-4">
            <div className="flex flex-col py-2">
              <p className="font-bold py-2 text-2xl">Ivory grape Garden</p>
              <div className="text-[#359A35] flex flex-row gap-2 font-extrabold text-3xl">
                <p className="">800.00</p>
                <p className="text-[#A8A4A4] mt-1 flex items-center text-2xl">
                  USDT
                </p>
              </div>
              <p className="text-[#A8A4A4] font-bold text-lg">
                Price per 1 shares
              </p>
              <div className="mt-7">
                <p className=" py-3 text-md ">Annual Return: 8.6%</p>
                <p className="  text-md ">Annual Appreciation: 9.2%</p>
              </div>
            </div>
            <div className="flex flex-col justify-between py-5">
              <div className="flex flex-row gap-2">
                <div>
                  <img src={share} alt="home" className=" z-20" />
                </div>

                <button className="bg-[#359A35] rounded-xl py-2 px-6 font-bold text-white">
                  BUY
                </button>
              </div>

              <div>
                <p className=" py-3 text-md ">Share Price: $300.33</p>
                <p className="  text-md ">Available shares: 233</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex py-4 flex-col border-b-2 border-b-[#A8A4A4] justify-center">
        <div className="flex flex-row md:justify-start lg:justify-between ">
          <div className="w-[500px]">
            <img src={corn} alt="home" className=" z-20" />
          </div>
          <div className="flex px-5 py-5 flex-row justify-between gap-4">
            <div className="flex flex-col py-2">
              <p className="font-bold py-2 text-2xl">Ivory grape Garden</p>
              <div className="text-[#359A35] flex flex-row gap-2 font-extrabold text-3xl">
                <p className="">800.00</p>
                <p className="text-[#A8A4A4] mt-1 flex items-center text-2xl">
                  USDT
                </p>
              </div>
              <p className="text-[#A8A4A4] font-bold text-lg">
                Price per 1 shares
              </p>
              <div className="mt-7">
                <p className=" py-3 text-md ">Annual Return: 8.6%</p>
                <p className="  text-md ">Annual Appreciation: 9.2%</p>
              </div>
            </div>
            <div className="flex flex-col justify-between py-5">
              <div className="flex flex-row gap-2">
                <div>
                  <img src={share} alt="home" className=" z-20" />
                </div>

                <button className="bg-[#359A35] rounded-xl py-2 px-6 font-bold text-white">
                  BUY
                </button>
              </div>

              <div>
                <p className=" py-3 text-md ">Share Price: $300.33</p>
                <p className="  text-md ">Available shares: 233</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex py-4 flex-col border-b-2 border-b-[#A8A4A4] justify-center">
        <div className="flex flex-row md:justify-start lg:justify-between ">
          <div className="w-[500px]">
            <img src={men} alt="home" className=" z-20" />
          </div>
          <div className="flex px-5 py-5 flex-row justify-between gap-4">
            <div className="flex flex-col py-2">
              <p className="font-bold py-2 text-2xl">Ivory grape Garden</p>
              <div className="text-[#359A35] flex flex-row gap-2 font-extrabold text-3xl">
                <p className="">800.00</p>
                <p className="text-[#A8A4A4] mt-1 flex items-center text-2xl">
                  USDT
                </p>
              </div>
              <p className="text-[#A8A4A4] font-bold text-lg">
                Price per 1 shares
              </p>
              <div className="mt-7">
                <p className=" py-3 text-md ">Annual Return: 8.6%</p>
                <p className="  text-md ">Annual Appreciation: 9.2%</p>
              </div>
            </div>
            <div className="flex flex-col justify-between py-5">
              <div className="flex flex-row gap-2">
                <div>
                  <img src={share} alt="home" className=" z-20" />
                </div>

                <button className="bg-[#359A35] rounded-xl py-2 px-6 font-bold text-white">
                  BUY
                </button>
              </div>

              <div>
                <p className=" py-3 text-md ">Share Price: $300.33</p>
                <p className="  text-md ">Available shares: 233</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
