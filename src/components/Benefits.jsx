import React from "react";
import logo from "../assets/logo.png";

const Benefits = () => {
  return (
    <div className="flex py-5 flex-row gap-2 justify-between">
      <div className="flex flex-col   py-9">
        <p className="text-2xl font-bold">Benefits</p>
        <p className="py-1 text-xl font-bold">
          <b className="text-[#1B6909]">Made for mass </b> adoption
        </p>
      </div>

      <div className="flex w-1/2 py-5 flex-col">
        <div className="flex flex-row md:w-[400px] lg:w-[450px] py-4  gap-4">
          <div className="px-1">
            <img src={logo} alt="logo" className="w-32 h-7" />
          </div>
          <div className="">
            <p className="font-light">
              By investing in Cropcrypt, you support eco-friendly farming
              practices, contribute to global food security, and earn returns on
              your investment.
            </p>
          </div>
        </div>

        <div className="flex flex-row md:w-[400px] lg:w-[450px] py-4 gap-4">
          <div className="px-1">
            <img src={logo} alt="logo" className="w-24 h-7" />
          </div>
          <div className="">
            <p className="font-light">
              Cropcrypt allows farmers to list their projects, MINT their own
              NFTs and receive funding from investors.
            </p>
          </div>
        </div>

        <div className="flex flex-row md:w-[400px] lg:w-[450px] py-4 gap-4">
          <div className="px-1">
            <img src={logo} alt="logo" className="w-20 h-7" />
          </div>
          <div className="">
            <p className="font-light">
              Our platform handles transactions, ensuring secure and transparent
              investments.
            </p>
          </div>
        </div>

        <div className="flex flex-row md:w-[400px] lg:w-[450px] py-4 gap-4">
          <div className="px-1">
            <img src={logo} alt="logo" className="w-28 h-7" />
          </div>
          <div className="">
            <p className="font-light">
              Investors can browse projects and NFTs, track progress, and
              receive returns annually in the form of crop yields or interest.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
