import React from "react";
import earth from "../assets/earth.png";

const World = () => {
  return (
    <div className="bg-gray-100 flex flex-row items-center justify-between rounded-lg border border-gray-400 py-5 px-7">
      <div className="px-5 py-2">
        <img src={earth} alt="home" className=" z-20" />
      </div>

      <div className="md:w-[450px] lg:w-[500px] lg:px-8">
        <p className="font-bold text-2xl">
          Pay Without Borders,
        </p>
        <p className="font-bold text-2xl">
          Invest Without Limits
        </p>
        <p className="py-5 ">
          Send and receive payments globally without borders or intermediaries
          using our cryptocurrency-enabled platform.
        </p>
      </div>
    </div>
  );
};

export default World;
