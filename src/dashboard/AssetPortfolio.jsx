import React from "react";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import cocoa from "../assets/cocoa.png";
import leftarrow from "../assets/leftarrow.png";
import rightarrow from "../assets/rightarrow.png";
import share from "../assets/share.png";
import cube from "../assets/cube.png";

const AssetPortfolio = () => {
  return (
    <div className=" relative">
      <Nav />

      <div className="flex flex-col px-8 ">
        <Link to="/dashboard" className="flex py-5 flex-row gap-4">
          <img src={leftarrow} alt="home" className="h-6 mt-0.5 z-20" />
          <p className="font-bold text-lg">Asset Portfolio</p>
        </Link>

        <div className="py-10 px-10">
          <div className="bg-[#000000] flex flex-row rounded-lg md:py-6 lg:py-14 pt-14 justify-between">
            <div className=""></div>
            <div className="absolute md:top-[430px] lg:top-[475px] md:left-[480px] lg:left-[540px] py-3 px-3 border-4 z-50 rounded-full border-white bg-[#d9d9d989]">
              <img src={rightarrow} alt="home" className=" " />
            </div>
            <div className="absolute left-20 top-44">
              <img
                src={cocoa}
                alt="home"
                className="md:w-[500px] md:h-[380px] lg:h-[450px] lg:w-[570px] z-20"
              />
            </div>
            <div className="flex flex-col justify-center py-5 px-5 md:w-[40%] lg:w-[45%]  text-white ">
              <p className="font-bold md:text-2xl lg:text-3xl">
                Mama Amoge Cocoa Farm
              </p>
              <p className="py-2 text-[#A8A4A4] font-bold">
                Cross River State, Nigeria
              </p>
              <div className="py-5">
                <p className="font-bold text-xl py-2">Price</p>
                <div className="flex flex-row gap-2">
                  <p className="font-bold text-3xl">2.344</p>
                  <p className="text-[#A8A4A4] font-bold mt-2.5">($13.00)</p>
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <button className="bg-[#359A35] z-50 hover:bg-white hover:text-[#359A35] hover:border-2 hover:border-[#359A35] transiton-all duration-300 rounded-xl py-2 px-6 font-bold text-2xl w-[300px] text-white">
                  BUY
                </button>

                <div className="absolute right-0 bottom-[-70px]">
                  <img src={cube} alt="home" className=" z-20" />
                </div>

                <div className="bg-white z-50 hover:bg-[#A8A4A4] transiton-all duration-300  rounded-xl">
                  <img src={share} alt="home" className=" " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 py-4">
        <p className="font-bold py-2 text-2xl">Description</p>

        <div>
          <p className="py-2 font-medium">
            Mama Amoge Farm is a thriving cocoa farm nestled in the heart of
            Cross River, Nigeria. Our farm is dedicated to sustainable cocoa
            production, utilizing eco-friendly practices to ensure high-quality
            yields while preserving the environment.
          </p>

          <p className="py-2 font-medium">
            Vision: <br />
            To become a leading cocoa producer in Nigeria, known for our
            exceptional quality, sustainability, and community impact.
          </p>

          <p className="py-2 font-medium">
            Investment Opportunity: <br />
            We invite investors to partner with us in expanding our operations,
            increasing production capacity, and exploring new markets with your
            support, we can increase cocoa yields and quality.
          </p>
        </div>
      </div>

      <div className=" py-4 px-[20%] h-1">
        <hr />
      </div>
    </div>
  );
};

export default AssetPortfolio;
