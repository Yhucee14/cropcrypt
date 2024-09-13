import React from "react";
import logo from "../assets/logo.png";
import tweet from "../assets/tweet.png";
import telegram from "../assets/telegram.png";
import github from "../assets/github.png";
import facebook from "../assets/facebook.png";
import youtube from "../assets/youtube.png";
import insta from "../assets/insta.png";
import { Link } from "react-router-dom";

const GreenFooter = () => {
  return (
    <div className="flex xx:flex-col sm:flex-row py-4 sm:py-14 sm:px-14 px-4 justify-between bg-footer-gradient">
      <div className="flex flex-col">
        <div className="flex ">
          <img src={logo} alt="logo" />
          <div className="px-2 font-bold text-2xl text-white flex justify-center items-center">
            Cropcrypt
          </div>
        </div>
        <div className="flex py-8 flex-row  gap-2">
          <a href="https://www.X.com" target="_blank" rel="noopener noreferrer">
            <img src={tweet} alt="home" className=" z-20" />
          </a>
          <a href="https://www.X.com" target="_blank" rel="noopener noreferrer">
            <img src={telegram} alt="home" className=" z-20" />
          </a>
          <a href="https://www.X.com" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="home" className=" z-20" />
          </a>
          <a href="https://www.X.com" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="home" className=" z-20" />
          </a>
          <a href="https://www.X.com" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="home" className=" z-20" />
          </a>
          <a href="https://www.X.com" target="_blank" rel="noopener noreferrer">
            <img src={youtube} alt="home" className=" z-20" />
          </a>
        </div>

        <div className="text-[#FFFFFF99] py-2">
          <p>2024-2025 Cropcrypt. All rights reserved.</p>
        </div>
      </div>
      <div className="flex  flex-row justify-between gap-8">
        <div className="flex flex-col">
          <p className="font-bold text-xl text-white py-2">Invest</p>
          <Link to="/asset" className="text-[#FFFFFF99] py-1 font-bold">
            <p>Asset Documentation</p>
          </Link>
          <Link to="/asset" className="text-[#FFFFFF99] py-1 font-bold">
            <p>Tokenization</p>
          </Link>
          <Link to="/asset" className="text-[#FFFFFF99] py-1 font-bold">
            <p>NFT Marketplace</p>
          </Link>
          <Link to="/asset" className="text-[#FFFFFF99] py-1 font-bold">
            <p>Security</p>
          </Link>
          <Link to="/asset" className="text-[#FFFFFF99] py-1 font-bold">
            <p>Support</p>
          </Link>
        </div>

        <div className="flex flex-col">
          <p className="font-bold text-xl text-white py-2">Company</p>
          <Link to="/asset" className="text-[#FFFFFF99] py-1 font-bold">
            <p>Cropcrypt</p>
          </Link>
          <Link to="/asset" className="text-[#FFFFFF99] py-1 font-bold">
            <p>Community</p>
          </Link>
          <Link to="/asset" className="text-[#FFFFFF99] py-1 font-bold">
            <p>Terms and Conditions</p>
          </Link>
          <Link to="/asset" className="text-[#FFFFFF99] py-1 font-bold">
            <p>Privacy Policy</p>
          </Link>
          <Link to="/asset" className="text-[#FFFFFF99] py-1 font-bold">
            <p>Disclaimer</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GreenFooter;
