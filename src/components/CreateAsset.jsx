import React, { useState } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import leftarrow from "../assets/leftarrow.png";
import cloud from "../assets/cloud.png";

const CreateAsset = () => {
  const [assetName, setAssetName] = useState("");
  const [assetDescription, setAssetDescription] = useState("");
  const [pricePerShare, setPricePerShare] = useState("");
  const [farmType, setFarmType] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log({
      assetName,
      assetDescription,
      pricePerShare,
      farmType,
      image,
    });
  };

  return (
    <div className="flex flex-col">
      <Nav />

      <div className="px-8 flex flex-col">
        <div className="flex flex-col">
          <Link to="/" className="flex py-5 flex-row gap-4">
            <img src={leftarrow} alt="home" className="h-6 z-20" />
            <p className="font-bold text-xl">Mint Asset</p>
          </Link>

          <p className="w-[550px] text-[#00000080]">
            Share basic information about your farm asset you want to onboard,
            why investors should care about it, and what makes it unique.
          </p>
        </div>

        <div className="flex flex-row py-4 gap-4">
          <div className="w-full h-[300px] rounded-lg flex flex-col justify-center items-center bg-[#736D6D1A] border border-[#00000080]">
            <div className="items-center">
              <img src={cloud} alt="home" className=" z-20" />
            </div>

            {/* Hidden file input */}
            <input
              type="file"
              id="imageUpload"
              onChange={handleImageUpload}
              className="hidden"
            />

            {/* Custom button to trigger file input */}
            <label
              htmlFor="imageUpload"
              className="cursor-pointer text-[#0000009f] font-bold py-2 px-4 rounded"
            >
              {image ? image.name : "Upload Asset Images"}
            </label>

            <div className="text-[#00000080] flex flex-col justify-center items-center">
              <p>Max size: 357 x 447</p>
              <p>JPG, PNG, SVG, MP4 or MP3, GIF, WEBP</p>
            </div>
          </div>

          <div className="flex flex-col w-full">
            <div>
              <label className="block font-bold text-lg mb-2">Asset Name</label>
              <input
                type="text"
                placeholder="Enter your farm name"
                value={assetName}
                onChange={(e) => setAssetName(e.target.value)}
                className="bg-[#736D6D1A] text-black border border-[#00000080] p-2 rounded-lg w-full"
              />
            </div>

            <div className="py-6">
              <label className="block font-bold text-lg mb-2">
                Asset Description
              </label>
              <textarea
                value={assetDescription}
                onChange={(e) => setAssetDescription(e.target.value)}
                className=" bg-[#736D6D1A] text-black rounded-md h-[300px] border border-[#00000080] p-2 w-full"
              ></textarea>
            </div>

            <div className="">
              <label className="block font-bold text-lg mb-2">
                Price per Share
              </label>
              <input
                type="number"
                value={pricePerShare}
                onChange={(e) => setPricePerShare(e.target.value)}
                className=" bg-[#736D6D1A] text-black rounded-md border border-[#00000080] p-2 w-full"
              />
            </div>

            <div className="py-6">
              <label className="block font-bold text-lg mb-2">
                Type of Farm
              </label>
              <select
                value={farmType}
                onChange={(e) => setFarmType(e.target.value)}
                className=" bg-[#736D6D1A] text-black rounded-md border border-[#00000080] p-3 w-full"
              >
                <option value="">eg. crop farming, conventional, livestock,....</option>
                <option value="crop">Crop farming</option>
                <option value="livestock">Horticultural farming</option>
                <option value="poultry">Conventional farming</option>
                <option value="aquaculture">Agroforestry</option>
                <option value="aquaculture">Hydroponic farming</option>
                <option value="aquaculture">Apiary farming</option>
                <option value="aquaculture">Aquacultural farming</option>
              </select>
            </div>

            {/* <button
              onClick={handleSubmit}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            >
              Mint Asset
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAsset;
