import { useState } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import leftarrow from "../assets/leftarrow.png";
import cloud from "../assets/cloud.png";
import tick from "../assets/tick.png";
import GreenFooter from "../dashboard/GreenFooter";
import greentick from "../assets/greentick.png";
import axios from "axios";

const CreateAsset = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [farmType, setType] = useState("");
  const [image, setImage] = useState(null);
  const [pofo, setPofo] = useState(null);
  const [aoi, setAoi] = useState(null);
  const [loc, setLoc] = useState(null);
  const [coc, setCoc] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // New State Variables
  const [roi, setRoi] = useState("");
  const [purpose, setPurpose] = useState("");
  const [timeline, setTimeline] = useState("");
  const [shares, setShares] = useState("");
  const [size, setSize] = useState("");
  const [location, setLocation] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      console.log("Selected image:", file);
    }
  };

  const handlePofo = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPofo(file);
      console.log("Selected portfolio file:", file);
    }
  };

  const handleLoc = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLoc(file);
      console.log("Selected location file:", file);
    }
  };

  const handleAoi = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAoi(file);
      console.log("Selected area of interest file:", file);
    }
  };

  const handleCoc = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoc(file);
      console.log("Selected certificate of compliance file:", file);
    }
  };

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("images", file);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_UPLOAD_IMAGE}`,
        formData
      );
      console.log("Upload response:", response.data);
      return response.data.data[0] || "";
    } catch (error) {
      console.error(
        "Error uploading file:",
        error.response?.data || error.message
      );
      return null;
    }
  };

  const handleSubmit = async () => {
    try {
      let imageUrl = "";
      let pofoUrl = "";
      let locUrl = "";
      let aoiUrl = "";
      let cocUrl = "";

      // Uploading the files
      if (image) {
        imageUrl = await uploadFile(image);
        console.log("Image URL:", imageUrl);
      }

      if (pofo) {
        pofoUrl = await uploadFile(pofo);
      }

      if (loc) {
        locUrl = await uploadFile(loc);
      }

      if (aoi) {
        aoiUrl = await uploadFile(aoi);
      }

      if (coc) {
        cocUrl = await uploadFile(coc);
      }

      // Construct the form data
      const assetFormData = {
        userId: "qwe4r5t6yuytrewqa",
        image: imageUrl || "www.image.com",
        name,
        description,
        type: farmType,
        amount: Number(amount),
        roi,
        purpose,
        timeline,
        shares: Number(shares),
        size,
        pofoUrl: pofoUrl || "www.image.com",
        aoiUrl: aoiUrl || "www.image.com",
        locUrl: locUrl || "www.image.com",
        cocUrl: cocUrl || "www.image.com",
      };

      // Sending form data to API
      const response = await axios.post(
        `${import.meta.env.VITE_ASSET}`,
        assetFormData
      );

      // Trigger success modal
      setModalMessage("Asset created successfully!");
      setIsSuccess(true);
      console.log("Asset created successfully:", response.data);
    } catch (error) {
      console.error(
        "Error creating asset:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="flex flex-col">
      <Nav />

      <div className="xx:px-4 sm:px-8 flex flex-col">
        <div className="flex flex-col">
          <Link to="/" className="flex py-5 flex-row gap-4">
            <img src={leftarrow} alt="home" className="h-6 z-20" />
            <p className="font-bold text-xl">Create Asset</p>
          </Link>

          <p className="sm:w-[550px] text-[#00000080]">
            Share basic information about your farm asset you want to onboard,
            why investors should care about it, and what makes it unique.
          </p>
        </div>

        <div className="flex xx:flex-col sm:flex-row py-4 gap-4">
          <div className="w-full h-[300px] rounded-lg flex flex-col justify-center items-center bg-[#736D6D1A] border border-[#00000080]">
            <div className="items-center">
              <img src={cloud} alt="home" className=" z-20" />
            </div>

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
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-[#736D6D1A] text-black border border-[#00000080] p-2 rounded-lg w-full"
              />
            </div>

            <div className="py-6">
              <label className="block font-bold text-lg mb-2">
                Asset Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className=" bg-[#736D6D1A] text-black rounded-md h-[300px] border border-[#00000080] p-2 w-full"
              ></textarea>
            </div>

            {/* <div className="">
              <label className="block font-bold text-lg mb-2">
                Price per Share
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className=" bg-[#736D6D1A] text-black rounded-md border border-[#00000080] p-2 w-full"
              />
            </div> */}

            <div className="py-6">
              <label className="block font-bold text-lg mb-2">
                Type of Farm
              </label>
              <select
                value={farmType}
                onChange={(e) => setType(e.target.value)}
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

      <div className="px-4 sm:px-8">
        <div className="py-4 font-bold text-2xl">
          <div>Investment Highlights</div>
        </div>
        <div className="flex xx:flex-col sm:flex-row gap-4">
          <div className="w-full flex flex-col">
            <div>
              <label className="block font-bold mb-2">
                Amount of Investment Sought
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-[#736D6D1A] border border-[#00000080] p-2 rounded-lg w-full"
              />
            </div>

            <div className="py-5">
              <label className="block font-bold mb-2">
                Expected Return on Investment (%)
              </label>
              <input
                type="number"
                value={roi}
                onChange={(e) => setRoi(e.target.value)}
                className="bg-[#736D6D1A] border border-[#00000080] px-2 py-2 rounded-lg w-full"
              />
            </div>

            <div className="py-5">
              <label className="block font-bold mb-2">
                Purpose of Investment
              </label>
              <select
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="bg-[#736D6D1A] border border-[#00000080] p-3 rounded-lg w-full"
              >
                <option value="">Select purpose of investment</option>
                <option value="expansion">Expanding farm operations</option>
                <option value="production">Farm machinery and equipment</option>
                <option value="technology">Technology adoption</option>
                <option value="expansionofsize">Expansion of farm size</option>
                <option value="invest">Investing in new crops</option>
                <option value="marketexpansion">Market expansion</option>
                <option value="disaster">Recovery from natural disaster</option>
              </select>
            </div>

            <div className="py-5">
              <label className="block font-bold mb-2">
                Investment Timeline
              </label>
              <input
                type="text"
                value={timeline}
                placeholder="Input duration of investment"
                onChange={(e) => setTimeline(e.target.value)}
                className="bg-[#736D6D1A] border border-[#00000080] p-2 rounded-lg w-full"
              />
              {/* <select
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                className="bg-[#736D6D1A] border border-[#00000080] p-2 rounded-lg w-full"
              >
                <option value="">Select timeline</option>
                <option value="Short-term">Short - term</option>
                <option value="Long-term">Long - term</option>
              </select> */}
            </div>
          </div>

          <div className="flex flex-col w-full">
            {/* <div>
              <label className="block font-bold mb-2">
                Annual Appreciation (%)
              </label>
              <input
                type="number"
                value={annualAppreciation}
                onChange={(e) => setAnnualAppreciation(e.target.value)}
                className="bg-[#736D6D1A] border border-[#00000080] p-2 rounded-lg w-full"
              />
            </div> */}

            <div className="py-5">
              <label className="block font-bold mb-2">
                Available Units of Shares to Onboard
              </label>
              <input
                type="number"
                value={shares}
                onChange={(e) => setShares(e.target.value)}
                className="bg-[#736D6D1A] border border-[#00000080] p-2 rounded-lg w-full"
              />
            </div>

            <div className="py-5">
              <label className="block font-bold mb-2">Farm location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-[#736D6D1A] border border-[#00000080] p-2 rounded-lg w-full"
              />
            </div>

            <div className="py-5">
              <label className="block font-bold mb-2">Farm Size</label>
              <input
                type="number"
                value={size}
                placeholder="in acres"
                onChange={(e) => setSize(e.target.value)}
                className="bg-[#736D6D1A] border border-[#00000080] p-2 rounded-lg w-full"
              />
            </div>
          </div>
        </div>{" "}
      </div>

      <div className="px-8">
        <div className="py-6 font-bold">
          <div className="py-5 xx:text-xl sm:text-2xl">Certification and Licenses</div>

          <div className="flex xx:flex-col sm:flex-row gap-4">
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
                    id="pofo"
                    // accept="image/*,application/pdf"
                    onChange={handlePofo}
                    className="hidden"
                  />

                  <label
                    htmlFor="pofo"
                    className="cursor-pointer text-[#0000009f] font-bold py-2 px-4 rounded"
                  >
                    {pofo ? pofo.name : "Upload Document"}
                  </label>

                  <div className="text-[#00000080] flex flex-col justify-center items-center">
                    <p className="flex justify-center text-center xx:px-1 sm:px-0">Kindly upload only your proof of farm ownership</p>
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
                    id="loc"
                    onChange={handleLoc}
                    className="hidden"
                  />

                  <label
                    htmlFor="loc"
                    className="cursor-pointer text-[#0000009f] font-bold py-2 px-4 rounded"
                  >
                    {loc ? loc.name : "Upload Document"}
                  </label>

                  <div className="text-[#00000080] flex flex-col justify-center items-center">
                    <p className="flex justify-center text-center xx:px-1 sm:px-0">
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
                    id="aoi"
                    onChange={handleAoi}
                    className="hidden"
                  />

                  <label
                    htmlFor="aoi"
                    className="cursor-pointer text-[#0000009f] font-bold py-2 px-4 rounded"
                  >
                    {aoi ? aoi.name : "Upload Document"}
                  </label>

                  <div className="text-[#00000080] flex flex-col text-sm justify-center items-center">
                    <p className="flex justify-center text-center xx:px-1 sm:px-0">
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
                    id="coc"
                    onChange={handleCoc}
                    className="hidden"
                  />

                  <label
                    htmlFor="coc"
                    className="cursor-pointer text-[#0000009f] font-bold py-2 px-4 rounded"
                  >
                    {coc ? coc.name : "Upload Document"}
                  </label>

                  <div className="text-[#00000080] text-sm flex flex-col justify-center items-center">
                    <p className="flex justify-center text-center xx:px-1 sm:px-0">
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
          className="sm:mt-4 bg-[#359A35] hover:bg-white hover:text-[#359A35] hover:border-2 hover:border-[#359A35] transition-all duration-300 flex flex-row gap-2 text-white py-2 px-6 rounded-3xl"
        >
          <div className="hover:text-[#359A35]">
            <img src={tick} alt="home" className="mt-0.5  z-20" />
          </div>
          <p>Onboard Now</p>
        </button>
      </div>

      {/* Success Modal */}
      {isSuccess && (
        <div
          onClick={() => setIsSuccess(false)}
          className="fixed inset-0 flex items-center  justify-center bg-black bg-opacity-60"
        >
          <div className="bg-white px-5 py-5 w-[500px] rounded-lg text-center">
            <p className="text-lg text-black py-2 px-5 font-bold">{modalMessage}</p>

            <img src={greentick} alt="home" className=" mt-1 z-20" />

            <div className="flex py-4 justify-center">
              <Link
                to="/invest"
                className="flex py-2 px-2 border hover:bg-[#359A35] transition-all duration-300 hover:text-white rounded-xl flex-row gap-2"
              >
                <img src={leftarrow} alt="home" className="h-5 mt-1 z-20" />
                <p className="font-bold text-lg">View Asset</p>
              </Link>
            </div>
          </div>
        </div>
      )}

      <GreenFooter />
    </div>
  );
};

export default CreateAsset;
