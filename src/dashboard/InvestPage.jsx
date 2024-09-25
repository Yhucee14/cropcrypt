import Nav from "../components/Nav";
import React, { useEffect, useState } from "react";
import axios from "axios";
import share from "../assets/share.png";
import { Link } from "react-router-dom";
import GreenFooter from "./GreenFooter";
import eye from "../assets/eye.png";
import search from "../assets/search.png";
import add from "../assets/add.png";
import tomato from "../assets/tomato.png";
import gridone from "../assets/gridone.png";
import gridtwo from "../assets/gridtwo.png";
import gridthree from "../assets/gridthree.png";
import gridfour from "../assets/gridfour.png";

const Invest = () => {
  const [assets, setAssets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("Invest");

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const response = await axios.get(
          "https://crop-crypt.vercel.app/api/v1/asset"
        );
        setAssets(response.data.data || []);
      } catch (error) {
        console.error(
          "Error fetching assets:",
          error.response?.data || error.message
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchAssets();
  }, []);

  const handleSectionChange = (section) => {
    setActiveSection(section); // Update the active section
  };

  return (
    <div className="flex flex-col">
      <Nav />

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-14 h-14 border-4 border-t-4 border-gray-200 rounded-full animate-spin border-t-green-500"></div>
        </div>
      ) : (
        <div className="px-6">
          {/*section one*/}
          <div className="flex px-2 flex-row justify-between rounded-lg py-4 text-white bg-[#1B6909]">
            <div className="flex flex-col justify-center">
              <div className="flex flex-row">
                <p className="font-bold  text-lg">Total asset portfolio</p>
                <div className="px-2 mt-1">
                  <img src={eye} alt="home" className="mt-0.5 z-20" />
                </div>
              </div>

              <div className="font-bold py-2 text-4xl">
                <p className="">$1095.25</p>
              </div>
            </div>

            <div className="flex flex-row justify-between gap-4">
              <div className="flex flex-col bg-white p-3 rounded-md">
                <p className="text-black font-bold py-1 text-xl">
                  Total Invest
                </p>
                <div className="flex flex-row justify-center gap-4">
                  <div className="text-[#359A35] font-extrabold text-4xl">
                    <p className="">$600.00</p>
                  </div>

                  <div className="mt-2">
                    <p className="px-2 py-1 text-sm bg-[#F5B30A] rounded-xl text-black font-bold">
                      50 stock
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col bg-white p-3 rounded-md">
                <p className="text-black font-bold py-1 text-xl">
                  Total Return
                </p>
                <div className="flex flex-row justify-center gap-4">
                  <div className="text-[#359A35] font-extrabold text-4xl">
                    <p className="">$300.00</p>
                  </div>

                  <div className="mt-2">
                    <p className="px-3 py-1 text-sm bg-[#D8ECD8] rounded-xl text-[#075607] font-bold">
                      24.7%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*section two*/}
          <div className="flex py-5 px-2 mt-3 border flex-row justify-between">
            <div className="flex flex-row justify-between">
              <button
                className={`border-b-4 flex justify-center items-center font-semibold text-lg px-14 ${
                  activeSection === "Invest"
                    ? "border-b-[#359A35] text-[#359A35]"
                    : "border-b-[#736D6D] text-[#736D6D]"
                }`}
                onClick={() => handleSectionChange("Invest")}
              >
                Invest
              </button>

              <button
                className={`border-b-4 flex justify-center items-center font-semibold text-lg px-14 ${
                  activeSection === "Inventory"
                    ? "border-b-[#359A35] text-[#359A35]"
                    : "border-b-[#736D6D] text-[#736D6D]"
                }`}
                onClick={() => handleSectionChange("Inventory")}
              >
                Inventory
              </button>
            </div>

            <div>
              <div className="relative flex xx:w-24 md:w-[500px]   shadow-sm">
                <div className="w-full py-3 border px-14 rounded-md">
                  <input
                    type="text"
                    placeholder="Search NFT crops"
                    // value={searchTerm}
                    // onChange={handleSearch}
                    className=" focus:outline-none focus:ring-[#359A35] focus:border-[#A4A4A4]"
                  />
                </div>

                <div className="absolute inset-y-0 left-0 flex px-3 cursor-pointer items-center">
                  <img
                    src={search}
                    alt="Search Icon"
                    className="h-[25px] w-[25px] bg-transparent"
                    style={{ fill: "white" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {activeSection === "Invest" ? (
            <div className="py-5 px-2 flex flex-col">
              <div className="font-bold py-2 text-2xl px-2">
                Agricultural Holdings
              </div>
              {assets.map((asset) => (
                <Link
                  to={`/asset/${asset._id}`}
                  key={asset._id}
                  className="hover:bg-[#a8a4a479] px-3 transition-all duration-300 rounded-lg"
                >
                  <div className="flex py-4 flex-col border-b-2 border-b-[#A8A4A4] justify-center">
                    <div className="flex flex-row md:justify-between lg:justify-between lg:gap-4">
                      <div className="md:w-[450px]  ">
                        <img
                          src={asset.image || ivoryimg}
                          alt={asset.name}
                          className="z-20 md:h-[330px] w-full"
                        />
                      </div>
                      <div className="flex py-5 flex-row justify-between md:gap-2 lg:gap-8">
                        <div className="flex flex-col px-4 py-2">
                          <p className="font-bold py-2 text-3xl">
                            {asset.name}
                          </p>
                          <div className="text-[#359A35] flex flex-row gap-2 font-extrabold text-2xl">
                            <p>{asset.amount / asset.shares}</p>
                            <p className="text-[#A8A4A4] flex items-center text-xl">
                              USDT
                            </p>
                          </div>
                          <p className="text-[#A8A4A4] font-bold text-lg">
                            Price per 1 share
                          </p>
                          <div className="mt-9">
                            <p className="py-3 text-md">
                              Annual Return: {asset.roi || "N/A"}%
                            </p>
                            <p className="text-md">
                              Annual Appreciation:{" "}
                              {asset.annualAppreciation || "N/A"}%
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col gap-20 px-1 py-5">
                          <div className="flex flex-row gap-2">
                            <div>
                              <img src={share} alt="share" className="z-20 " />
                            </div>
                            <button className="bg-[#359A35] rounded-xl py-2 px-6 font-bold text-white">
                              BUY
                            </button>
                          </div>
                          <div className="flex flex-col">
                            <p className="py-3 text-md">
                              Share Price: ${asset.amount || "N/A"}
                            </p>
                            <p className="text-md">
                              Available shares: {asset.shares}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-5 px-2 flex flex-col">
              <div className="font-bold py-2 text-2xl px-2">
                NFT Inventory Marketplace
              </div>

              <div className="flex py-5 px-1 mt-3 flex-row justify-between gap-4">
                <div className="flex flex-row justify-between gap-2">
                  <button className="border-b-4 flex justify-center items-center font-semibold text-md px-5">
                    Most viewed
                  </button>

                  <button
                    className={`border-b-4  flex justify-center items-center font-semibold text-md px-5`}
                  >
                    Unsold
                  </button>

                  <button
                    className={`border-b-4 flex justify-center items-center font-semibold text-md px-5`}
                  >
                    Sold
                  </button>
                </div>

                <div className="flex flex-row gap-2">
                  <div className="relative flex xx:w-24 md:w-[400px]   shadow-sm">
                    <div className="w-full py-3 border px-14 rounded-md">
                      <input
                        type="text"
                        placeholder="Search Collection"
                        className=" focus:outline-none focus:ring-[#359A35] focus:border-[#A4A4A4]"
                      />
                    </div>

                    <div className="absolute inset-y-0 left-0 flex px-3 cursor-pointer items-center">
                      <img
                        src={search}
                        alt="Search Icon"
                        className="h-[25px] w-[25px] bg-transparent"
                        style={{ fill: "white" }}
                      />
                    </div>
                  </div>

                  <div className=" flex flex-row">
                    <button className="flex flex-row text-white rounded-md hover:bg-white hover:text-[#359A35] hover:border-2 hover:border-[#359A35] transition-all duration-300 bg-[#359A35] py-2 px-3 justify-center items-center">
                      <div>
                        <img src={add} alt="home" className=" " />
                      </div>
                      <div className="font-medium px-1 ">Connect Wallet</div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Table structure */}
              <div className="py-4 flex justify-center">
                <table className=" table-auto border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-[#f1f1f1]">
                      <th className="px-4 py-2 border border-gray-300 flex justify-start">
                        # Collections
                      </th>
                      <th className="px-2 py-2 border border-gray-300 text-center">
                        Floor Price
                      </th>
                      <th className="px-2 py-2 border border-gray-300 text-center">
                        Changes
                      </th>
                      <th className="px-2 py-2 border border-gray-300 text-center">
                        Market Cap
                      </th>
                      <th className="px-2 py-2 border border-gray-300 text-center">
                        Listed Assets
                      </th>
                      <th className="px-2 py-2 border border-gray-300 text-center">
                        Owners
                      </th>
                      <th className="px-2 py-2 border border-gray-300 text-center">
                        Sales per day
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-100">
                      <td className="px-2 py-2 border border-gray-300">
                        <div className="flex flex-row py-2 gap-2">
                          <p className="font-semibold flex justify-center items-center px-2">
                            1
                          </p>
                          <div className="flex flex-row gap-2">
                            <div className="rounded-full">
                              <img
                                src={tomato}
                                alt="home"
                                className="w-10 h-10 "
                              />
                            </div>

                            <div className="flex flex-col">
                              <p className="font-bold">BIMF</p>
                              <p>From: Bimbo maize farm</p>
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-2 py-2 gap-2 text-center flex flex-row items-center border-gray-300">
                        <div className="font-bold flex justify-center text-center">
                          <p className="mt-[-14px]">33.02K</p>
                        </div>
                        <div className="flex flex-col">
                          <p className="mt-3 text-sm">USDT</p>
                          <p className="text-sm">($3.07)</p>
                        </div>
                      </td>

                      <td className="px-2 py-2 text-[#359A35] border font-bold text-center border-gray-300">
                        <p>4.35%</p>
                      </td>

                      <td className="px-2 py-2 border font-bold border-gray-300">
                        $90.270 USDT
                      </td>

                      <td className="px-2 py-2 text-[#2210F2]  text-center items-center font-semibold border-gray-300">
                        100
                      </td>

                      <td className="px-2 py-2 border text-center font-semibold border-gray-300">
                        307
                      </td>

                      <td className="px-2 py-2 border text-center font-semibold border-gray-300">
                        20
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="py-4 px-2">
                <div className="text-gradient-invest font-bold text-lg">
                  <p>Own Your Digital Assets</p>
                </div>

                <div className="w-[600px] text-[#736D6D] font-medium py-5">
                  <p>
                    Start your own NFT storefront in minutes with Cropcrypt.
                    Mint, sell, and scale your NFTs all in one customizable
                    frontend with low fees.
                  </p>
                </div>

                <div className="grid grid-cols-4 py-5 gap-2">
                  <div className=" rounded-md">
                    <img src={gridfour} alt="home" className=" " />
                  </div>

                  <div className=" rounded-md">
                    <img src={gridthree} alt="home" className=" " />
                  </div>

                  <div className=" rounded-md">
                    <img src={gridtwo} alt="home" className=" " />
                  </div>

                  <div className=" rounded-md">
                    <img src={gridone} alt="home" className="h-[230px] " />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <GreenFooter />
    </div>
  );
};

export default Invest;
