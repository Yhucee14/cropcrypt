import React from "react";
import { Link } from "react-router-dom";
import leftarrow from "../assets/leftarrow.png";
import Nav from "./Nav";
import cocoaprofile from "../assets/cocoaprofile.png";
import goat from "../assets/goat.png";
import greentick from "../assets/greentick.png";

const Profile = () => {
  return (
    <div className="relative">
      <Nav />

      <Link to="/" className="flex py-5 flex-row gap-4">
        <img src={leftarrow} alt="home" className="h-6 z-20" />
        <p className="font-bold text-xl">My Profile</p>
      </Link>

      <div className="md:px-16 flex flex-col lg:px-10">
        <div>
          <img src={cocoaprofile} alt="home" className=" z-20" />
        </div>
        <div className="absolute bottom-[-50px] left-[120px]">
          <img src={goat} alt="home" className="w-32 z-20" />
        </div>

        <div className="flex flew-row justify-between">
        <div className="flex flew-row">
<p>Musa Cattle Farm</p>
<img src={greentick} alt="home" className="h-6 z-20" />
        </div>

        <div className="flex flex-row"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
