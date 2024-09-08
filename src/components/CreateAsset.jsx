import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import leftarrow from "../assets/leftarrow.png";

const CreateAsset = () => {
  return (
    <div className="flex flex-col">
      <Nav />

      <div className="px-8 flex flex-col">
        <div className="flex flex-col">
          <Link to="/" className="flex py-5 flex-row gap-4">
            <img src={leftarrow} alt="home" className="h-6 z-20" />
            <p className="font-bold text-xl">Mint Asset</p>
          </Link>

          <p className="w-[550px]">
            Share basic information about your farm asset you want to onboard,
            why investor should care about it, and what makes it unique.
          </p>
        </div>

        <div className="flex flex-row py-4 gap-2">
            <div>
                upload
            </div>
            <div className="flex flex-col">
                asset Name
                asset description
                price per share
                type of farm
            </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAsset;
