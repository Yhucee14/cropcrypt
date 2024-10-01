import React from "react";
import leftarrow from "../assets/leftarrow.png";
import { Link } from "react-router-dom";

const SuccessModal = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center  justify-center bg-black bg-opacity-60">
      <div className="bg-white px-5 py-5 w-[500px] rounded-lg text-center">
       
        <p className="text-lg text-black py-2 px-5 font-bold">
          {message}
        </p>
      
      <div className="flex py-4 justify-center">
      <Link to="/invest" className="flex py-2 px-2 border hover:bg-[#359A35] transition-all duration-300 hover:text-white rounded-xl flex-row gap-2">
            <img src={leftarrow} alt="home" className="h-5 mt-1 z-20" />
            <p className="font-bold text-lg">View Asset</p>
          </Link>
      </div>
      
      </div>
    </div>
  );
};

export default SuccessModal;
