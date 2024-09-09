import React, { useState } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import leftarrow from "../assets/leftarrow.png";
import cloud from "../assets/cloud.png";
import tick from "../assets/tick.png";
import GreenFooter from "../dashboard/GreenFooter";

const CreateAsset = () => {
  const [assetName, setAssetName] = useState("");
  const [assetDescription, setAssetDescription] = useState("");
  const [pricePerShare, setPricePerShare] = useState("");
  const [farmType, setFarmType] = useState("");
  const [image, setImage] = useState(null);

  // New State Variables
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [expectedROI, setExpectedROI] = useState("");
  const [investmentPurpose, setInvestmentPurpose] = useState("");
  const [investmentTimeline, setInvestmentTimeline] = useState("");
  const [annualAppreciation, setAnnualAppreciation] = useState("");
  const [availableShares, setAvailableShares] = useState("");
  const [annualRevenue, setAnnualRevenue] = useState("");
  const [farmSize, setFarmSize] = useState("");

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
      investmentAmount,
      expectedROI,
      investmentPurpose,
      investmentTimeline,
      annualAppreciation,
      availableShares,
      annualRevenue,
      farmSize,
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
                <option value="">
                  eg. crop farming, conventional, livestock,....
                </option>
                <option value="crop">Crop farming</option>
                <option value="livestock">Horticultural farming</option>
                <option value="poultry">Conventional farming</option>
                <option value="aquaculture">Agroforestry</option>
                <option value="aquaculture">Hydroponic farming</option>
                <option value="aquaculture">Apiary farming</option>
                <option value="aquaculture">Aquacultural farming</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8">
        <div className="py-4 font-bold text-2xl">
          <div>Investment Highlights</div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="w-full flex flex-col">
            <div>
              <label className="block font-bold mb-2">
                Amount of Investment Sought
              </label>
              <input
                type="number"
                value={investmentAmount}
                onChange={(e) => setInvestmentAmount(e.target.value)}
                className="bg-[#736D6D1A] border border-[#00000080] p-2 rounded-lg w-full"
              />
            </div>

            <div className="py-5">
              <label className="block font-bold mb-2">
                Expected Return on Investment (%)
              </label>
              <input
                type="number"
                value={expectedROI}
                onChange={(e) => setExpectedROI(e.target.value)}
                className="bg-[#736D6D1A] border border-[#00000080] p-2 rounded-lg w-full"
              />
            </div>

            <div className="py-5">
              <label className="block font-bold mb-2">
                Purpose of Investment
              </label>
              <select
                value={investmentPurpose}
                onChange={(e) => setInvestmentPurpose(e.target.value)}
                className="bg-[#736D6D1A] border border-[#00000080] p-3 rounded-lg w-full"
              >
                <option value="">Select purpose</option>
                <option value="expansion">Farm Expansion</option>
                <option value="infrastructure">
                  Infrastructure Development
                </option>
                <option value="technology">Technology Improvement</option>
                <option value="research">Research and Development</option>
              </select>
            </div>

            <div className="py-5">
              <label className="block font-bold mb-2">
                Investment Timeline
              </label>
              <select
                value={investmentTimeline}
                onChange={(e) => setInvestmentTimeline(e.target.value)}
                className="bg-[#736D6D1A] border border-[#00000080] p-2 rounded-lg w-full"
              >
                <option value="">Select timeline</option>
                <option value="1">1 Year</option>
                <option value="3">3 Years</option>
                <option value="5">5 Years</option>
                <option value="10">10 Years</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col w-full">
            <div>
              <label className="block font-bold mb-2">
                Annual Appreciation (%)
              </label>
              <input
                type="number"
                value={annualAppreciation}
                onChange={(e) => setAnnualAppreciation(e.target.value)}
                className="bg-[#736D6D1A] border border-[#00000080] p-2 rounded-lg w-full"
              />
            </div>

            <div className="py-5">
              <label className="block font-bold mb-2">
                Available Units of Shares to Onboard
              </label>
              <input
                type="number"
                value={availableShares}
                onChange={(e) => setAvailableShares(e.target.value)}
                className="bg-[#736D6D1A] border border-[#00000080] p-2 rounded-lg w-full"
              />
            </div>

            <div className="py-5">
              <label className="block font-bold mb-2">
                Current Annual Revenue
              </label>
              <input
                type="number"
                value={annualRevenue}
                onChange={(e) => setAnnualRevenue(e.target.value)}
                className="bg-[#736D6D1A] border border-[#00000080] p-2 rounded-lg w-full"
              />
            </div>

            <div className="py-5">
              <label className="block font-bold mb-2">
                Farm Size (in acres)
              </label>
              <input
                type="number"
                value={farmSize}
                onChange={(e) => setFarmSize(e.target.value)}
                className="bg-[#736D6D1A] border border-[#00000080] p-2 rounded-lg w-full"
              />
            </div>
          </div>
        </div>{" "}
      </div>

      <div className="px-8">
        <div className="py-6 font-bold">
          <div className="py-5 text-2xl">Certification and Licenses</div>

          <div className="flex flex-row gap-4">
            <div className="w-full flex flex-col gap-4">
              <div className="flex py-3 flex-col">
                <p className="text-md">
                  Proof of Farm Ownership or Operation Documentation?:
                </p>
                <p className="text-sm py-2">
                  kindly upload your verified documents
                </p>

                <div className="w-full h-[170px] rounded-lg flex flex-col justify-center items-center bg-[#736D6D1A] border border-[#00000080]">
                  <div className="items-center">
                    <img src={cloud} alt="home" className=" z-20" />
                  </div>

                  <input
                    type="file"
                    id="imageUpload"
                    onChange={handleImageUpload}
                    className="hidden"
                  />

                  <label
                    htmlFor="imageUpload"
                    className="cursor-pointer text-[#0000009f] font-bold py-2 px-4 rounded"
                  >
                    {image ? image.name : "Upload Document"}
                  </label>

                  <div className="text-[#00000080] flex flex-col justify-center items-center">
                    <p>Kindly upload only your proof of farm ownership</p>
                  </div>
                </div>
              </div>

              <div className="flex py-3 flex-col">
                <p>Letter of Credit from Bank</p>
                <p className="text-sm py-2">
                  kindly upload your verified documents
                </p>

                <div className="w-full h-[170px] rounded-lg flex flex-col justify-center items-center bg-[#736D6D1A] border border-[#00000080]">
                  <div className="items-center">
                    <img src={cloud} alt="home" className=" z-20" />
                  </div>

                  <input
                    type="file"
                    id="imageUpload"
                    onChange={handleImageUpload}
                    className="hidden"
                  />

                  <label
                    htmlFor="imageUpload"
                    className="cursor-pointer text-[#0000009f] font-bold py-2 px-4 rounded"
                  >
                    {image ? image.name : "Upload Document"}
                  </label>

                  <div className="text-[#00000080] flex flex-col justify-center items-center">
                    <p>
                      Kindly upload only your letter of credit from your bank
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col">
              <div className="flex py-3 flex-col">
                <p>Affidavit of Insurance Documentation?:</p>
                <p className="text-sm py-2">
                  kindly upload your verified documents
                </p>

                <div className="w-full h-[170px] rounded-lg flex flex-col justify-center items-center bg-[#736D6D1A] border border-[#00000080]">
                  <div className="items-center">
                    <img src={cloud} alt="home" className=" z-20" />
                  </div>

                  <input
                    type="file"
                    id="imageUpload"
                    onChange={handleImageUpload}
                    className="hidden"
                  />

                  <label
                    htmlFor="imageUpload"
                    className="cursor-pointer text-[#0000009f] font-bold py-2 px-4 rounded"
                  >
                    {image ? image.name : "Upload Document"}
                  </label>

                  <div className="text-[#00000080] flex flex-col text-sm justify-center items-center">
                    <p>
                      Kindly upload only your affidavit of insurance document
                      here!
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex py-6 flex-col">
                <p>Chamber of Commerce Certification</p>
                <p className="text-sm py-2">
                  kindly upload your verified documents
                </p>

                <div className="w-full h-[170px] rounded-lg flex flex-col justify-center items-center bg-[#736D6D1A] border border-[#00000080]">
                  <div className="items-center">
                    <img src={cloud} alt="home" className=" z-20" />
                  </div>

                  <input
                    type="file"
                    id="imageUpload"
                    onChange={handleImageUpload}
                    className="hidden"
                  />

                  <label
                    htmlFor="imageUpload"
                    className="cursor-pointer text-[#0000009f] font-bold py-2 px-4 rounded"
                  >
                    {image ? image.name : "Upload Document"}
                  </label>

                  <div className="text-[#00000080] text-sm flex flex-col justify-center items-center">
                    <p>
                      Kindly upload only your chamber of commerce certification
                      here!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end py-6 px-8">
        <button
          onClick={handleSubmit}
          className="mt-4 bg-[#359A35] hover:bg-white hover:text-[#359A35] hover:border-2 hover:border-[#359A35] transition-all duration-300 flex flex-row gap-2 text-white py-2 px-6 rounded-3xl"
        >
        <div className="hover:text-[#359A35]">
        <img src={tick} alt="home" className="mt-0.5  z-20" />
        </div>
         <p>Onboard Now</p>
        </button>
      </div>

      <GreenFooter />
    </div>
  );
};

export default CreateAsset;
