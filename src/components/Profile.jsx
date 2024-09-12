import React from "react";
import { Link } from "react-router-dom";
import leftarrow from "../assets/leftarrow.png";
import Nav from "./Nav";

const Profile = () => {
  return (
    <div>
      <Nav />

     
      <Link to="/" className="flex py-5 flex-row gap-4">
        <img src={leftarrow} alt="home" className="h-6 z-20" />
        <p className="font-bold text-xl">Back to home..</p>
      </Link>
      Profile
    </div>
  );
};

export default Profile;
