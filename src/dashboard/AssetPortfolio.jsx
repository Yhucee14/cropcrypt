import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Nav from "../components/Nav";
import cocoa from "../assets/cocoa.png";
import leftarrow from "../assets/leftarrow.png";
import rightarrow from "../assets/rightarrow.png";
import share from "../assets/share.png";
import cube from "../assets/cube.png";
import pie from "../assets/pie.png";
import greenbox from "../assets/greenbox.png";
import blackbox from "../assets/blackbox.png";
import yellowbox from "../assets/yellowbox.png";
import lineloader from "../assets/lineloader.png";
import smallarrowleft from "../assets/smallarrowleft.png";
import smallarrowright from "../assets/smallarrowright.png";
import boxarrow from "../assets/boxarrow.png";
import denton from "../assets/denton.png";
import redworld from "../assets/redworld.png";
import uba from "../assets/uba.png";
import people from "../assets/people.png";
import Modal from "../components/Modal";
import goat from "../assets/goat.png";
import usdt from "../assets/usdt.png";
import downarrow from "../assets/downarrow.png";
import plus from "../assets/plus.png";

const AssetPortfolio = () => {
  const { _id } = useParams(); // Get asset ID from URL
  const [asset, setAsset] = useState(null);
  const [selectedCrypto, setSelectedCrypto] = useState("USDT");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [numberOfShares, setNumberOfShares] = useState(0);
  const [documentation, setDocumentation] = useState([]);

  useEffect(() => {
    const fetchAsset = async () => {
      try {
        const response = await fetch(
          `https://crop-crypt.vercel.app/api/v1/asset/${_id}`
        );
        const data = await response.json();

        if (data.success) {
          // Access the asset details from the 'data' field
          setAsset(data.data);
        } else {
          console.error("Failed to fetch asset:", data.message);
        }
      } catch (error) {
        console.error("Error fetching asset data:", error);
      }
    };

    fetchAsset();
  }, [_id]);

  const cryptoOptions = [
    { name: "Bitcoin", icon: usdt },
    { name: "Ethereum", icon: usdt },
    { name: "Litecoin", icon: usdt },
    { name: "Ripple", icon: usdt },
    { name: "Dogecoin", icon: usdt },
  ];

  const increment = () => setNumberOfShares((prev) => prev + 1);

  const decrement = () => {
    if (numberOfShares > 0) {
      setNumberOfShares((prev) => prev - 1);
    }
  };

  const handleDropdownToggle = () => setIsDropdownOpen(!isDropdownOpen);

  const handleCryptoSelect = (crypto) => {
    setSelectedCrypto(crypto.name);
    setIsDropdownOpen(false);
  };

  const handleBuyClick = () => setShowModal(true);

  const handleCloseModal = () => setShowModal(false);

  if (!asset) return <p>Loading...</p>; // Loading state

  return (
    <div className="relative">
      <Nav />
      <div className="flex flex-col px-8">
        <Link to="/dashboard" className="flex py-5 flex-row gap-4">
          <img src={leftarrow} alt="home" className="h-6 mt-0.5 z-20" />
          <p className="font-bold text-lg">Asset Portfolio</p>
        </Link>

        <div className="py-10 px-10">
          <div className="bg-[#000000] flex flex-row rounded-lg md:py-6 lg:py-14 pt-14 justify-between">
            <div className=""></div>
            <div className="absolute md:top-[430px] lg:top-[475px] md:left-[480px] lg:left-[540px] py-3 px-3 border-4 z-50 rounded-full border-white bg-[#d9d9d989]">
              <img src={rightarrow} alt="home" className=" " />
            </div>
            <div className="absolute left-20 top-44">
              <img
                src={asset.image || cocoa}
                alt="asset"
                className="md:w-[500px] md:h-[380px] lg:h-[450px] lg:w-[570px] z-20"
              />
            </div>
            <div className="flex flex-col justify-center py-5 px-5 md:w-[40%] lg:w-[45%] text-white ">
              <p className="font-bold md:text-2xl lg:text-3xl">
                {asset.name || "Asset Name"}
              </p>
              <p className="py-2 text-[#A8A4A4] font-bold">
                {asset.location || "Asset Location"}
              </p>
              <div className="py-5">
                <p className="font-bold text-xl py-2">Price</p>
                <div className="flex flex-row gap-2">
                  <p className="font-bold text-3xl">{asset.amount || "N/A"}</p>
                  <p className="text-[#A8A4A4] font-bold mt-2.5">
                    ({asset.priceInUSD || "N/A"})
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <button
                  onClick={handleBuyClick}
                  className="bg-[#359A35] z-50 hover:bg-white hover:text-[#359A35] hover:border-2 hover:border-[#359A35] transiton-all duration-300 rounded-xl py-2 px-6 font-bold text-2xl w-[300px] text-white"
                >
                  BUY
                </button>

                <div className="absolute right-0 bottom-[-70px]">
                  <img src={cube} alt="home" className=" z-20" />
                </div>

                <div className="bg-white z-50 hover:bg-[#A8A4A4] transiton-all duration-300 rounded-xl">
                  <img src={share} alt="home" className=" " />
                </div>
              </div>
            </div>
          </div>
        </div>
        {showModal && (
          <Modal onClose={handleCloseModal}>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div>
                  <img src={goat} alt="home" className=" z-20" />
                </div>

                <div className="flex flex-col">
                  <p className="text-[#000000] py-2 px-2">
                    <b className="text-[#359a35]"> Category:</b>{" "}
                    {asset.category || "Category"}
                  </p>
                  <p className="text-[#000000] py-2 px-2">
                    <b className="text-[#359a35]"> From:</b>{" "}
                    {asset.farm || "Farm Name"}
                  </p>
                  <p className="text-[#000000] py-2 px-2">
                    <b className="text-[#359a35]"> Asset ID:</b>{" "}
                    {asset.id || "Asset ID"}
                  </p>
                  <p className="text-[#000000] py-2 px-2">
                    <b className="text-[#0500FF]"> Recipient address: </b>
                    {asset.recipientAddress || "Address"}
                  </p>
                </div>
              </div>
            </div>
          </Modal>
        )}
        <div className="px-8 py-4">
          <p className="font-bold py-2 text-2xl">Description</p>

          <div>
            <p className="py-2 font-medium">
              {asset.description || "Asset description goes here."}
            </p>

            <p className="py-2 font-medium">
              Vision: <br />
              {asset.purpose || "Vision statement goes here."}
            </p>
          </div>
        </div>
        <div className=" py-4 px-[20%] h-1">
          <hr />
        </div>

        <div className="flex px-8 py-7 flex-row gap-4">
          <div className="flex flex-col px-1 py-3 w-[50%] h-full border shadow-xl rounded-2xl">
            <p className="px-3 py-4 font-bold text-2xl">Owner Details</p>
            <p className="px-3 py-2 border-b-2 text-[#736D6D]">
              Name: {asset.name}
            </p>
            <p className="px-3 py-2 text-[#736D6D] border-b-2">
              Price: <b className="text-black text-lg">{asset.amount}</b>{" "}
              <b className="text-[#359A35]">${asset.amount}</b>
            </p>
            <p className="px-3 py-3 text-[#736D6D] border-b-2">
              Created Date:{" "}
              <b className="text-black text-lg">{asset.createdAt}</b>
            </p>
            <p className="px-3 text-[#736D6D] border-b-2">
              Contract Address:{" "}
              <b className="text-[#2210F4]">0xc0...d1ce95BossesCrosses</b>
            </p>
            <p className="px-3 text-[#736D6D] border-b-2 py-3">
              Country of origin:{" "}
              <b className="font-bold text-black">{asset.location}</b>
            </p>
            <p className="px-3 text-[#736D6D] border-b-2 py-3">
              Token Address:{" "}
              <b className="text-[#2210F4]">0xc0...d1ce95BossesCrosses</b>
            </p>
            <p className="px-3 text-[#736D6D] border-b-2 py-3">
              Asset ID: <b className="font-bold text-black">{asset._id}</b>
            </p>
            <p className="px-3 text-[#736D6D] py-4">
              Harvest Duration:{" "}
              <b className="font-bold text-black">{asset.timeline}</b>
            </p>
          </div>
          <div className="py-4 md:px-2 lg:px-4 flex flex-col md:h-[300px] lg:h-full border shadow-xl rounded-2xl">
            <p className="px-4 flex justify-center font-bold md:text-xl lg:text-2xl">
              Asset Analytic Title
            </p>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div>
                  <img
                    src={pie}
                    alt="home"
                    className="md:w-[250px] lg:w-full z-20"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div className="md:mt-12 lg:mt-28">
                    <div className="flex flex-row px-2 py-2 gap-2">
                      <img src={greenbox} alt="home" className=" z-20" />
                      <p>112 Listed Assets</p>
                    </div>
                    <div className="flex flex-row px-2 py-2 gap-2">
                      <img src={blackbox} alt="home" className=" z-20" />
                      <p>205 Share Holders</p>
                    </div>
                    <div className="flex flex-row px-2 py-2 gap-2">
                      <img src={yellowbox} alt="home" className=" z-20" />
                      <p>205 Share Holders</p>
                    </div>
                  </div>

                  <div className="flex justify-end z-50 py-5">
                    <button className="flex text-white rounded-3xl hover:bg-white hover:text-[#359A35] hover:border-2 hover:border-[#359A35] transiton-all duration-300  bg-[#359A35] py-2 px-1 justify-center items-center">
                      <div className="px-2  font-semibold">Connect Wallet</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-[20%] py-7">
          <div className="flex flex-row px-8 py-2 justify-between">
            <p className="text-2xl text-[#359A35] font-bold">
              50,300.00 <b className="text-lg text-[#A8A4A4]">USDT</b>
            </p>
            <p className="text-[#A8A4A4] text-lg px-3 font-bold">49% funded</p>
          </div>
          <div>
            <img src={lineloader} alt="home" className=" " />
          </div>
        </div>

        <div className="px-8 py-10">
          <div>
            <p className="font-bold text-3xl text-black">
              Investment Highlight:
            </p>
            <br />

            <div className="flex flex-row py-4 justify-between">
              <div>
                <p className="py-1 font-bold text-[#00000090]">
                  Annual Return: {asset.roi}%
                </p>
              </div>
              <div>
                <p className="py-1 font-bold text-[#00000090]">
                  Share Price: ${asset.amount}
                </p>
                <p className="py-1 font-bold text-[#00000090]">
                  Available Shares: ${asset.shares}
                </p>
              </div>
              <div>
                <p className="py-1 font-bold text-[#00000090]">
                  Current Annual Revenue: $300.33
                </p>
                <p className="py-1 font-bold text-[#00000090]">
                  Investment Timeline: {asset.timeline}
                </p>
              </div>
            </div>

            <div className=" py-4 px-[20%] h-1">
              <hr />
            </div>

            <div>
              <p className="font-bold text-3xl py-3">
                Assets Documentation's (legally)
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {documentation.map((asset) => (
                  <div
                    key={asset}
                    className="border p-4 shadow-md flex flex-col gap-2 rounded-lg"
                  >
                    <p className="text-lg font-bold">{asset.dof || 'Verification' }</p>
                    <div className="flex flex-row gap-4 p-2">
                      <div>
                        <img src={asset.image} alt="loader" className="ml-2" />
                      </div>
                      <div className="flex flex-col">
                        <p className="py-2 text-gray-600 font-bold">
                        {asset.dof || 'Verification' }
                        </p>
                        <p className="text-gray-500">{asset.dof || 'Verification' }</p>
                        <p className="text-gray-500">{asset.dof || 'Verification' }</p>
                        <div className="pt-4">
                          <button className="flex py-1 px-3 rounded-2xl flex-row items-center text-white bg-black font-semibold">
                            <p>Show Credential</p>
                            <div>
                              <img
                                src={boxarrow}
                                alt="loader"
                                className="ml-2"
                              />
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetPortfolio;
