import React from "react";
import earth from "../assets/earth.png";

const World = () => {
  return (
    <div className="bg-gray-100 flex xx:flex-col sm:flex-row items-center justify-between rounded-lg border border-gray-400 py-5 sm:px-7">
      <div className="sm:px-5 py-2">
        <img src={earth} alt="home" className=" z-20" />
      </div>

      <div className="flex  justify-center xx:items-center sm:items-start flex-col px-4 w-full  md:w-[450px] lg:w-[500px] lg:px-8">
        <p className="flex font-bold text-2xl">
          Pay Without Borders,
        </p>
        <p className="flex font-bold text-2xl">
          Invest Without Limits
        </p>
        <p className="flex xx:text-center sm:text-start border py-5 ">
          Send and receive payments globally without borders or intermediaries
          using our cryptocurrency-enabled platform.
        </p>
      </div>
    </div>
  );
};

export default World;
