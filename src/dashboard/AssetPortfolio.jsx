import { useEffect, useState } from "react";
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
import boxarrow from "../assets/boxarrow.png";
import Modal from "../components/Modal";
import usdt from "../assets/usdt.png";
import plus from "../assets/plus.png";
import { RainbowKitProvider, lightTheme } from "@rainbow-me/rainbowkit";
import { PieChart, Pie, Cell, Label } from "recharts";

const AssetPortfolio = () => {
  const { _id } = useParams(); // Get asset ID from URL
  const [asset, setAsset] = useState(null);
  const [selectedCrypto, setSelectedCrypto] = useState("USDT");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [numberOfShares, setNumberOfShares] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [isTransactionLoading, setIsTransactionLoading] = useState(false);

  const handleBuyShares = async () => {
    if (!asset) return;
    setIsTransactionLoading(true);

    try {
      const payload = {
        assetId: asset._id,
        userId: asset.userId,
        shares: numberOfShares,
      };

      const response = await fetch(`${import.meta.env.VITE_BUY_SHARES}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        // Show success message or handle success
        setMessage("Purchase successful!");
        console.log("Purchase successful:", result.message);
        console.log("Asset details:", result.data.asset);
        console.log("Transaction details:", result.data.transaction);
      } else {
        // Show error message or handle failure
        setMessage(`Purchase failed: ${result.message}`);
        console.error("Purchase failed:", result.message);
      }
    } catch (error) {
      setMessage("Error during purchase.");
      console.error("Error during purchase:", error);
    } finally {
      setIsTransactionLoading(false); // Stop loading after transaction completes
      setShowMessage(true); // Show the message popup
    }
  };

  const handleCloseMessage = () => {
    setShowMessage(false); // Close the message popup
  };

  useEffect(() => {
    const fetchAsset = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_FETCH_AN_ASSET}/${_id}`
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
      } finally {
        setIsLoading(false);
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

  const COLORS = ["#359A35", "#000000", "#F79F23"];

  const data = [
    { name: "Listed assets", value: 500 },
    { name: "Mkt cap", value: 300 },
    { name: "Shareholders", value: 300 },
  ];

  return (
    <RainbowKitProvider
      theme={lightTheme({
        accentColor: "#359A35", // Set your preferred green color here
        accentColorForeground: "white",
      })}
    >
      <div className="relative">
        <Nav />

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-14 h-14 border-4 border-t-4 border-gray-200 rounded-full animate-spin border-t-green-500"></div>
          </div>
        ) : (
          <div className="flex flex-col xx:px-2 md:px-8">
            <Link to="/invest" className="flex py-5 flex-row gap-4">
              <img src={leftarrow} alt="home" className="h-6 mt-0.5 z-20" />
              <p className="font-bold text-lg">Asset Portfolio</p>
            </Link>

            <div className="py-10 sm:px-10">
              <div className="bg-[#000000] flex xx:flex-col sm:flex-row xx:py-2 sm:py-0 rounded-lg md:py-6 lg:py-14 sm:pt-14 justify-between">
                <div className="hidden sm:flex"></div>
                {/* <div className="absolute top-[220px] right-4 md:top-[430px] lg:top-[475px] md:left-[480px] lg:left-[540px] py-3 px-3 border-4 z-50 rounded-full border-white bg-[#d9d9d989]">
                  <img src={rightarrow} alt="home" className=" " />
                </div> */}
                <div className="sm:absolute sm:left-20  sm:top-44">
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
                      <p className="font-bold text-3xl">
                        {asset.amount || "N/A"}
                      </p>
                      <p className="text-[#A8A4A4] font-bold mt-2.5">
                        (${asset.amount / 1600 || "N/A"})
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2">
                    <button
                      onClick={handleBuyClick}
                      className="bg-[#359A35] z-40 hover:bg-white hover:text-[#359A35] hover:border-2 hover:border-[#359A35] transiton-all duration-300 rounded-xl py-2 px-6 font-bold text-2xl w-[300px] text-white"
                    >
                      BUY
                    </button>

                    <div className="absolute right-0 top-[450px] sm:top-[220px]">
                      <img src={cube} alt="home" className=" z-50" />
                    </div>

                    <div className="bg-white z-40 hover:bg-[#A8A4A4] transiton-all duration-300 rounded-xl">
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
                    <div className="w-[200px]">
                      <img src={asset.image} alt="home" className="z-20" />
                    </div>

                    <div className="flex flex-col">
                      <p className="text-[#359a35] py-2 px-2">
                        <b className="text-[#000000]">Category:</b>{" "}
                        {asset.category || "Category"}
                      </p>
                      <p className="text-[#359a35] py-2 px-2">
                        <b className="text-[#000000]">From:</b>{" "}
                        {asset.farm || "Farm Name"}
                      </p>
                      <p className="text-[#359a35] py-2 px-2">
                        <b className="text-[#000000]">Asset ID:</b>{" "}
                        {asset._id || "Asset ID"}
                      </p>
                      <p className="text-[#0500FF] py-2 px-2">
                        <b className="text-[#000000]">Recipient address:</b>{" "}
                        {asset.recipientAddress || "Address"}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col px-2 py-2 border rounded-xl">
                    <div className="flex flex-row px-2 py-2 justify-between">
                      <p>Pay with:</p>
                      <div className="relative">
                        <div
                          className="flex flex-row py-2 px-1 justify-between shadow-md gap-2 cursor-pointer"
                          onClick={handleDropdownToggle}
                        >
                          <div className="flex flex-row gap-2">
                            <img
                              src={
                                selectedCrypto === "USDT"
                                  ? usdt
                                  : cryptoOptions.find(
                                      (c) => c.name === selectedCrypto
                                    )?.icon
                              }
                              alt={selectedCrypto}
                            />
                            <p>{selectedCrypto}</p>
                          </div>
                          <div>{isDropdownOpen ? "▲" : "▼"}</div>
                        </div>

                        {isDropdownOpen && (
                          <div className="absolute top-full mt-2 w-full bg-white border shadow-lg rounded-xl">
                            {cryptoOptions.map((crypto) => (
                              <div
                                key={crypto.name}
                                className="flex flex-row px-1 py-2 gap-2 items-center cursor-pointer hover:bg-gray-100"
                                onClick={() => handleCryptoSelect(crypto)}
                              >
                                <img
                                  src={crypto.icon}
                                  alt={crypto.name}
                                  className="w-5 h-5"
                                />
                                <p>{crypto.name}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-row px-2 py-2 justify-between">
                      <p>Price per share:</p>
                      <div className="flex flex-col">
                        <div className="flex flex-row gap-2">
                          <p>{(asset.amount / asset.shares).toFixed(2)}</p>
                          <p>{selectedCrypto}</p>
                        </div>
                        <div className="flex justify-end">($13.19)</div>
                      </div>
                    </div>

                    <div className="flex flex-row px-2 py-2 justify-between">
                      <p>Number of shares:</p>
                      <div className="flex flex-row gap-2 items-center">
                        <button
                          className="flex mt-[-4px] items-center cursor-pointer text-lg text-white rounded-sm py-2 px-2 bg-red-600 h-7 font-bold"
                          onClick={decrement}
                        >
                          -
                        </button>
                        <div className="pl-2">{numberOfShares}</div>
                        <button className="cursor-pointer" onClick={increment}>
                          <img
                            src={plus}
                            alt="increment"
                            className="w-12 h-12"
                          />
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-row px-2 py-3 justify-between">
                      <p>You earn (Invest Return):</p>
                      <div className="flex flex-col">
                        <div className="flex flex-row gap-2 text-[#2210F4]">
                          <p className="text-xl font-bold">7.344</p>
                          <p className="text-md mt-1">{selectedCrypto}</p>
                        </div>
                        <div className="flex justify-end">($13.19)</div>
                      </div>
                    </div>

                    <div className="flex flex-row px-2 py-3 justify-between">
                      <p>Commission Fee (2%):</p>
                      <div className="flex flex-row gap-2">
                        <p className="text-xl font-bold">$1.03</p>
                        <p className="text-md mt-1">{selectedCrypto}</p>
                      </div>
                    </div>

                    <div className="flex flex-row px-2 py-4 justify-between">
                      <p>Network Fee:</p>
                      <div className="flex gap-2 flex-row">
                        <p className="font-bold">(20 RWA)</p>
                        <p className="font-bold">0.807</p>
                        <p>{selectedCrypto}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="py-5 px-4 flex flex-row justify-between">
                  <div className="font-bold text-xl">You Pay</div>
                  <div className="flex flex-row gap-2">
                    <p className="font-bold text-xl">1588.931</p>
                    <p className="text-lg">{selectedCrypto}</p>
                  </div>
                </div>

                <div className="py-2 px-2">
                  <button
                    onClick={handleBuyShares}
                    className="bg-[#359A35] z-50 hover:bg-white hover:text-[#359A35] hover:border-2 hover:border-[#359A35] transiton-all duration-300 rounded-xl py-2 px-6 font-semibold text-xl w-full text-white"
                  >
                    {isTransactionLoading ? (
                      <div className="flex justify-center items-center ">
                        <div className="w-14 h-14 border-4 border-t-4 border-gray-200 rounded-full animate-spin border-t-green-500"></div>
                      </div>
                    ) : (
                      "Connect wallet to buy"
                    )}
                  </button>
                </div>

                {/* Message Popup modal */}
                {showMessage && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <p>{message}</p>
                      <button
                        className="bg-[#359A35] mt-4 text-white py-2 px-4 rounded-lg"
                        onClick={handleCloseMessage}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </Modal>
            )}

            <div className="px-2 sm:px-8 py-4">
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

            <div className="flex justify-center px-2 sm:px-8 py-7 flex-col sm:flex-row gap-2 lg:gap-4">
              <div className="flex flex-col px-1 py-3 w-full h-full border shadow-xl rounded-2xl">
                <p className="px-3 py-4 font-bold text-2xl">Owner Details</p>
                <p className="px-3 py-2 border-b-2 text-[#736D6D]">
                  Name: {asset.name}
                </p>
                <p className="px-3 py-2 text-[#736D6D] border-b-2">
                  Price: <b className="text-black text-lg">{asset.amount}</b>{" "}
                  <b className="text-[#359A35]">${asset.amount / 1600}</b>
                </p>
                <p className="px-3 py-3 text-[#736D6D] border-b-2">
                  Created Date:{" "}
                  <b className="text-black sm:text-lg">{asset.createdAt}</b>
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
              <div className="py-4 md:px-3 lg:px-4 flex flex-col w-full md:h-[400px] lg:h-full border shadow-xl rounded-2xl">
                <p className="px-4 flex justify-center font-bold md:text-xl lg:text-2xl">
                  Asset Analytic Title
                </p>
                <div className="flex justify-center">
                  <div className="flex flex-col md:flex-row justify-between">
                    {/* Pie Chart Section */}
                    <div className=" p-2 flex justify-center items-center">
                      <PieChart width={220} height={300}>
                        <Pie
                          data={data}
                          cx={110} // Center X-coordinate
                          cy={150} // Center Y-coordinate
                          innerRadius={60}
                          outerRadius={80}
                          fill="#8884d8"
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {data.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                          {/* Add Label for Center Percentage */}
                          <Label
                            value="49%"
                            position="center"
                            className="font-bold text-black text-3xl"
                          />
                        </Pie>
                      </PieChart>
                    </div>

                    {/* Details Section */}
                    <div className="flex xx:px-2 sm:px-0 flex-col justify-between">
                      {/* Asset Details */}
                      <div className="md:mt-24 lg:mt-24">
                        <div className="flex flex-row py-2 gap-2">
                          <img src={greenbox} alt="home" className="w-6 h-6" />
                          <p className="text-base font-medium">
                            112 Listed Assets
                          </p>
                        </div>
                        <div className="flex flex-row py-2 gap-2">
                          <img src={blackbox} alt="home" className="w-6 h-6" />
                          <p className="text-base font-medium">
                            $112,000 Mkt Cap
                          </p>
                        </div>
                        <div className="flex flex-row py-2 gap-2">
                          <img src={yellowbox} alt="home" className="w-6 h-6" />
                          <p className="text-base font-medium">
                            205 Share Holders
                          </p>
                        </div>
                      </div>

                      {/* Connect Wallet Button */}
                      <div className="flex md:justify-end z-50 py-5">
                        <button className="flex text-white rounded-3xl hover:bg-white hover:text-[#359A35] hover:border-2 hover:border-[#359A35] transition-all duration-300 bg-[#359A35] py-2 px-4 justify-center items-center">
                          <div className="font-semibold">Connect Wallet</div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-2 sm:px-[20%] py-7">
              <div className="flex flex-row px-8 py-2 justify-between">
                <p className="text-xl sm:text-2xl text-[#359A35] font-bold">
                  50,300.00 <b className="text-lg text-[#A8A4A4]">USDT</b>
                </p>
                <p className="text-[#A8A4A4] text-lg px-3 font-bold">
                  49% funded
                </p>
              </div>
              <div>
                <img src={lineloader} alt="home" className=" " />
              </div>
            </div>

            <div className="px-2 sm:px-8 py-10">
              <div>
                <p className="font-bold text-3xl text-black">
                  Investment Highlight:
                </p>
                <br />

                <div className="flex flex-col sm:flex-row py-4 justify-between">
                  <div>
                    <p className="py-1 font-bold text-[#00000090]">
                      Annual Return: {asset.roi}%
                    </p>
                    <p className="py-1 font-bold text-[#00000090]">
                      Annual Appreciation: {asset.roi}%
                    </p>
                  </div>

                  <div>
                    <p className="py-1 font-bold text-[#00000090]">
                      Share Price: ${asset.amount}
                    </p>
                    <p className="py-1 font-bold text-[#00000090]">
                      Available Shares: {asset.shares}
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
              </div>
            </div>

            <div className=" py-4 px-[20%] h-1">
              <hr />
            </div>

            {/* Table structure */}
            <div className="py-4">
              <table className=" table-auto border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-[#f1f1f1]">
                    <th className="px-2 py-2 border border-gray-300 text-center">
                      Token Name
                    </th>
                    <th className="px-2 py-2 border border-gray-300 text-center">
                      Price/Share (USDT)
                    </th>
                    <th className="px-2 py-2 border border-gray-300 text-center">
                      From
                    </th>
                    <th className="px-2 py-2 border border-gray-300 text-center">
                      QTY of Shares
                    </th>
                    <th className="px-2 py-2 border border-gray-300 text-center">
                      Date
                    </th>
                    <th className="px-2 py-2 border border-gray-300 text-center">
                      To
                    </th>
                    <th className="px-2 py-2 border border-gray-300 text-center">
                      APR (%)
                    </th>
                    <th className="px-2 py-2 border border-gray-300 text-center">
                      Annual Return
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-100">
                    <td className="px-2 py-2 border text-center border-gray-300">
                      {asset.name}
                    </td>
                    <td className="px-2 py-2 border border-gray-300">
                      <div className="flex flex-row gap-2">
                        <p className="font-semibold">{asset.amount}</p>
                        <p className="text-[#A8A4A4] text-sm mt-0.5">
                          (${asset.amount / asset.shares})
                        </p>
                      </div>
                    </td>
                    <td className="px-2 py-2 border text-[#2210F2] font-semibold border-gray-300">
                      0xc0...d1ce95Bosses
                    </td>
                    <td className="px-2 py-2 border text-center border-gray-300">
                      {asset.shares}
                    </td>
                    <td className="px-2 py-2 border border-gray-300">
                      {asset.createdAt}
                    </td>
                    <td className="px-2 py-2 border text-[#2210F2] font-semibold border-gray-300">
                      0xc0...d1ce95Bosses
                    </td>
                    <td className="px-2 py-2 border text-center border-gray-300">
                      {asset.roi}
                    </td>
                    <td className="px-2 py-2 border border-gray-300">
                      $300.33
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <p className="font-bold text-xl sm:text-3xl py-5">
                Assets Documentations (legally)
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {asset.pofoUrl && (
                  <div className="border p-4 shadow-md flex flex-col gap-2 rounded-lg">
                    <p className="font-bold text-lg">
                      Declaration of Ownership
                    </p>
                    <div className="flex flex-row gap-4 p-2">
                      <div>
                        <img
                          src={asset.pofoUrl}
                          alt="POFO"
                          className="w-full h-auto"
                        />
                      </div>
                      <div className="flex flex-col">
                        <p className="py-2 text-gray-600 font-bold">
                          Verification of Asset ownership
                        </p>
                        <p className="text-gray-500">
                          {asset.issuedBy || "isuued by?"}
                        </p>
                        <p className="text-gray-500">
                          {asset.issueDate || "isuued on?"}
                        </p>
                        <div className="pt-4">
                          <button
                            onClick={() => window.open(asset.pofoUrl, "_blank")}
                            className="flex py-1 px-3 rounded-2xl flex-row items-center text-white bg-black font-semibold"
                          >
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
                )}

                {asset.aoiUrl && (
                  <div className="border p-4 shadow-md flex flex-col gap-2 rounded-lg">
                    <p className="font-bold text-lg">Affidavit of insurance</p>
                    <div className="flex flex-row gap-4 p-2">
                      <div>
                        <img
                          src={asset.aoiUrl}
                          alt="aoi"
                          className="w-full h-auto"
                        />
                      </div>
                      <div className="flex flex-col">
                        <p className="py-2 text-gray-600 font-bold">
                          Farmers insurance policy
                        </p>
                        <p className="text-gray-500">
                          {asset.issuedBy || "isuued by?"}
                        </p>
                        <p className="text-gray-500">
                          {asset.issueDate || "isuued on?"}
                        </p>
                        <div className="pt-4">
                          <button
                            onClick={() => window.open(asset.pofoUrl, "_blank")}
                            className="flex py-1 px-3 rounded-2xl flex-row items-center text-white bg-black font-semibold"
                          >
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
                )}

                {asset.locUrl && (
                  <div className="border p-4 shadow-md flex flex-col gap-2 rounded-lg">
                    <p className="font-bold text-lg">Letter of credit</p>
                    <div className="flex flex-row gap-4 p-2">
                      <div>
                        <img
                          src={asset.locUrl}
                          alt="aoi"
                          className="w-full h-auto"
                        />
                      </div>
                      <div className="flex flex-col">
                        <p className="py-2 text-gray-600 font-bold">
                          Financial guarantee statement
                        </p>
                        <p className="text-gray-500">
                          {asset.issuedBy || "isuued by?"}
                        </p>
                        <p className="text-gray-500">
                          {asset.issueDate || "isuued on?"}
                        </p>
                        <div className="pt-4">
                          <button
                            onClick={() => window.open(asset.pofoUrl, "_blank")}
                            className="flex py-1 px-3 rounded-2xl flex-row items-center text-white bg-black font-semibold"
                          >
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
                )}

                {asset.cocUrl && (
                  <div className="border p-4 shadow-md flex flex-col gap-2 rounded-lg">
                    <p className="font-bold text-lg">Voter Endorsement</p>
                    <div className="flex flex-row gap-4 p-2">
                      <div>
                        <img
                          src={asset.cocUrl}
                          alt="aoi"
                          className="w-full h-auto"
                        />
                      </div>
                      <div className="flex flex-col">
                        <p className="py-2 text-gray-600 font-bold">
                          Voter Endorsement
                        </p>
                        <p className="text-gray-500">
                          {asset.issuedBy || "isuued by?"}
                        </p>
                        <p className="text-gray-500">
                          {asset.issueDate || "isuued on?"}
                        </p>
                        <div className="pt-4">
                          <button
                            onClick={() => window.open(asset.pofoUrl, "_blank")}
                            className="flex py-1 px-2 rounded-2xl flex-row items-center text-white bg-black font-semibold"
                          >
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
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </RainbowKitProvider>
  );
};

export default AssetPortfolio;
