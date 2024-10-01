import React from "react";
import { Link } from "react-router-dom";
import leftarrow from "../assets/leftarrow.png";
import Nav from "./Nav";
import cocoaprofile from "../assets/cocoaprofile.png";
import goat from "../assets/goat.png";
import greentick from "../assets/greentick.png";
import add from "../assets/add.png";
import edit from "../assets/edit.png";

const Profile = () => {
  return (
    <div className="">
      <Nav />

      <Link to="/" className="flex py-5 flex-row gap-4">
        <img src={leftarrow} alt="home" className="h-6 z-20" />
        <p className="font-bold text-xl">My Profile</p>
      </Link>

      <div className="md:px-16 relative flex flex-col lg:px-10">
        <div>
          <img src={cocoaprofile} alt="home" className=" z-20" />
        </div>
        <div className="absolute bottom-[-50px] left-[120px]">
          <img src={goat} alt="home" className="w-32 z-20" />
        </div>
      </div>

      <div className="p-10"></div>

      <div className="flex flex-col md:px-20">
        <div className="flex flew-row justify-between">
          <div className="flex flew-row justify-between gap-4">
            <p className="text-2xl font-bold">Musa Cattle Farm</p>
            <img src={greentick} alt="home" className="w-7 mt-0.5 h-7 z-20" />
          </div>

          <div className="flex flex-row gap-2">
            <Link to="/createAsset">
              <button className=" bg-[#359A35] hover:bg-[#e3e0e0] font-bold hover:text-[#359A35] hover:border-2 hover:border-[#359A35] transition-all duration-300 flex flex-row gap-2 text-white py-2 px-4 rounded-3xl">
                <div className="hover:text-[#359A35]">
                  <img src={add} alt="home" className="mt-0.5  z-20" />
                </div>
                <p>Create Asset</p>
              </button>
            </Link>

            <Link to="/editProfile">
              <button className=" bg-white font-bold hover:bg-[#e3e0e0] hover:text-[#359A35] hover:border-2 hover:border-[#359A35] border border-[#359A35] transition-all duration-300 flex flex-row gap-2 text-[#359A35] py-2 px-4 rounded-3xl">
                <div className="hover:text-[#359A35]">
                  <img src={edit} alt="home" className="mt-0.5  z-20" />
                </div>
                <p>Edit Profile</p>
              </button>
            </Link>
          </div>
        </div>

        <div className="py-5">
            <p className="text-md">
              Mama Amoge Farm is a thriving cocoa farm nestled in the heart of
              Cross River, Nigeria. Our farm is dedicated to sustainable cocoa
              production, utilizing eco-friendly practices to ensure
              high-quality yields while preserving the environment.
            </p>
          </div>
      </div>
    </div>
  );
};

export default Profile;
