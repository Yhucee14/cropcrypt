import React from "react";
import search from "../assets/search.png";

const SectionTwo = () => {
  return (
    <div className="flex py-5 px-5 mt-3 border flex-row justify-between">
      <div className="flex flex-row justify-between ">
        <button className="border-b-4 border-b-[#359A35] flex justify-center items-center font-semibold text-lg text-[#359A35] ">
          <div className="px-14">Invest</div>
        </button>

        <button className="border-b-4 border-b-[#736D6D] flex justify-center items-center text-[#736D6D] font-semibold text-lg  ">
          <div className="px-14">Inventory</div>
        </button>
      </div>

      <div>
        <div className="relative flex xx:w-24 md:w-[500px]   shadow-sm">
          <div className="w-full py-3 border px-14 rounded-md">
            <input
              type="text"
              placeholder="Search NFT crops"
              // value={searchTerm}
              // onChange={handleSearch}
              className=" focus:outline-none focus:ring-[#359A35] focus:border-[#A4A4A4]"
            />
          </div>

          <div className="absolute inset-y-0 left-0 flex px-3 cursor-pointer items-center">
            <img
              src={search}
              alt="Search Icon"
              className="h-[25px] w-[25px] bg-transparent"
              style={{ fill: "white" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
