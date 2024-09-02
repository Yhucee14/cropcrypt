import React from "react";
import eye from "../assets/eye.png";

const SectionOne = () => {
  return (
    <div className="flex flex-row justify-between rounded-lg px-5 py-4 text-white bg-[#1B6909]">
      <div className="flex flex-col justify-center">
        <div className="flex flex-row">
          <p className="font-bold  text-lg">Total asset portfolio</p>
          <div className="px-2 mt-1">
            <img src={eye} alt="home" className="mt-0.5 z-20" />
          </div>
        </div>

        <div className="font-bold py-2 text-4xl">
          <p className="">$1095.25</p>
        </div>
      </div>

      <div className="flex flex-row justify-between gap-4">
        <div className="flex flex-col bg-white p-3 rounded-md">
          <p className="text-black font-bold py-1 text-xl">Total Invest</p>
          <div className="flex flex-row justify-center gap-4">
            <div className="text-[#359A35] font-extrabold text-4xl">
              <p className="">$600.00</p>
            </div>

            <div className="mt-2">
              <p className="px-2 py-1 text-sm bg-[#F5B30A] rounded-xl text-black font-bold">
                50 stock
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-white p-3 rounded-md">
          <p className="text-black font-bold py-1 text-xl">Total Return</p>
          <div className="flex flex-row justify-center gap-4">
            <div className="text-[#359A35] font-extrabold text-4xl">
              <p className="">$300.00</p>
            </div>

            <div className="mt-2">
              <p className="px-3 py-1 text-sm bg-[#D8ECD8] rounded-xl text-[#075607] font-bold">
                24.7%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
