import { Link, useNavigate } from "react-router-dom";
import leftarrow from "../assets/leftarrow.png";
import Nav from "./Nav";
import cocoaprofile from "../assets/cocoaprofile.png";
import goat from "../assets/goat.png";
import greentick from "../assets/greentick.png";
import add from "../assets/add.png";
import edit from "../assets/edit.png";
import InvestInventory from "./InvestInventory";
import { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import share from "../assets/share.png";
import search from "../assets/search.png";
import tomato from "../assets/tomato.png";
import gridone from "../assets/gridone.png";
import gridtwo from "../assets/gridtwo.png";
import gridthree from "../assets/gridthree.png";
import gridfour from "../assets/gridfour.png";
import ivoryimg from "../assets/ivoryimg.png";
import axios from "axios";

const Profile = () => {
  const [assets, setAssets] = useState([]);
  const [activeSection, setActiveSection] = useState("Invest");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_ASSET}`);
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
    setActiveSection(section);
  };

  return (
    <div className="">
      <Nav />

      <Link to="/" className="px-2 md:px-4 lg:px-12 flex py-5 flex-row gap-4">
        <img src={leftarrow} alt="home" className="h-6 z-20" />
        <p className="font-bold text-xl">My Profile</p>
      </Link>

      <div className=" relative flex justify-center items-center flex-col">
        <div>
          <img src={cocoaprofile} alt="home" className=" z-20" />
        </div>
        <div className="absolute bottom-[-50px] xx:left-[5%] md:left-[10%] lg:left-[15%]">
          <img src={goat} alt="home" className="w-32 z-20" />
        </div>
      </div>

      <div className="p-10"></div>

      <div className="px-2 md:px-5 lg:px-36">
        <div className="flex flex-col">
          <div className="flex xx:flex-col sm:flew-row xx:gap-6 sm:gap-0 justify-between">
            <div className="flex flew-row sm:justify-between gap-4">
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

        <div className="border-2 border-[#736D6D66] rounded-lg flex flex-row py-4 justify-between">
          <div className="flex justify-center items-center flex-col w-full ">
            <div className="font-normal">Listed Asset</div>
            <div className="font-bold text-lg">112</div>
          </div>

          <div className="flex flex-col border-x-2 border-[#736D6D66] justify-center items-center sm:px-5 w-full">
            <div className="font-normal ">Market Cap</div>
            <div className="font-bold text-lg">112</div>
          </div>

          <div className="flex flex-col w-full justify-center items-center">
            <div className="flex justify-center items-center text-center">
              Share Holders (Token)
            </div>
            <div className="font-bold text-lg">112</div>
          </div>
        </div>

        <InvestInventory
          activeSection={activeSection}
          handleSectionChange={handleSectionChange}
        />

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-14 h-14 border-4 border-t-4 border-gray-200 rounded-full animate-spin border-t-green-500"></div>
          </div>
        ) : (
          <div>
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
                      <div className="flex xx:flex-col sm:flex-row justify-between lg:gap-4">
                        <div className="md:w-[450px]  ">
                          <img
                            src={asset.image || ivoryimg}
                            alt={asset.name}
                            className="z-20 md:h-[330px] w-full"
                          />
                        </div>
                        <div className="flex sm:py-5 xx:flex-col sm:flex-row justify-between md:gap-2 lg:gap-8">
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
                                Annual Appreciation: {asset.roi || "N/A"}%
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col gap-5 sm:gap-20 px-1 py-5">
                            <div className="flex flex-row gap-2">
                              <div>
                                <img
                                  src={share}
                                  alt="share"
                                  className="z-20 "
                                />
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

                <div className="flex py-5 px-1 mt-3 xx:flex-col sm:flex-row justify-between gap-4">
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

                  <div className="flex xx:flex-col sm:flex-row gap-2">
                    <div className="relative flex xx:w-full md:w-[400px]   shadow-sm">
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
                <div className="py-4  flex justify-center overflow-x-auto">
                  <table className=" table-auto rounded-lg border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-[#359A351A]">
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

                    <tbody className="">
                      <tr
                        className="hover:bg-[#359A351A] cursor-pointer"
                        onClick={() => navigate("/nft")}
                      >
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

                  <div className="xx-full sm:w-[600px] text-[#736D6D] font-medium py-5">
                    <p>
                      Start your own NFT storefront in minutes with Cropcrypt.
                      Mint, sell, and scale your NFTs all in one customizable
                      frontend with low fees.
                    </p>
                  </div>

                  <div className="grid xx:grid-cols-1 sm:grid-cols-4 py-5 gap-2">
                    <div className="border rounded-md">
                      <img src={gridfour} alt="home" className=" " />
                    </div>

                    <div className="border rounded-md">
                      <img src={gridthree} alt="home" className=" " />
                    </div>

                    <div className="border rounded-md">
                      <img src={gridtwo} alt="home" className=" " />
                    </div>

                    <div className="border rounded-md">
                      <img
                        src={gridone}
                        alt="home"
                        className="xx:w-full md:h-[230px] "
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// Profile.propTypes = {
//   assets: PropTypes.array.isRequired,
// };
export default Profile;
