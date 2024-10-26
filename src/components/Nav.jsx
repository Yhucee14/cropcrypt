import { useState, useEffect } from "react";
import home from "../assets/home.png";
import logo from "../assets/logo.png";
import invest from "../assets/invest.png";
import mint from "../assets/mint.png";
import profile from "../assets/profile.png";
import blue from "../assets/blue.png";
import settings from "../assets/settings.png";
import down from "../assets/down.png";
import { Link, useLocation } from "react-router-dom";
import menu from "../assets/menu.png";
import close from "../assets/close.png";
import {
  ConnectButton,
  RainbowKitProvider,
  lightTheme,
} from "@rainbow-me/rainbowkit";

const Nav = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAssetChainDropdownVisible, setAssetChainDropdownVisible] =
    useState(false);
  // const [showModal, setShowModal] = useState(false);

  // const handleBuyClick = () => setShowModal(true);

  // const handleCloseModal = () => setShowModal(false);

  const location = useLocation();
  const isActive = (path) =>
    location.pathname === path ? "text-green-500" : "text-black";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Check if screen width is <= 768px (mobile breakpoint)
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <RainbowKitProvider
      theme={lightTheme({
        accentColor: "#359A35", // Set your preferred green color here
        accentColorForeground: "white",
      })}
    >
      <div className="flex px-2 py-4 justify-between cursor-pointer">
        {/* <div className="md:hidden flex flex-row ">
        <Link to="/" className="flex ">
          <img src={logo} alt="logo" />
          <div className="px-2 font-bold text-xl text-black flex justify-center items-center">
            Cropcrypt
          </div>
        </Link>
      </div> */}

        {isMobile ? (
          <div className="md:hidden z-50 flex justify-between w-full items-center">
            <div className=" flex flex-row ">
              <Link to="/" className="flex ">
                <img src={logo} alt="logo" />
                <div className="px-2 font-bold text-xl text-black flex justify-center items-center">
                  Cropcrypt
                </div>
              </Link>
            </div>

            <button onClick={toggleMobileMenu}>
              <img
                src={isMobileMenuOpen ? close : menu}
                alt="menu"
                className="h-6 w-6"
              />
            </button>
            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="absolute top-20 left-0 w-full rounded-lg bg-white shadow-lg md:hidden z-10">
                <Link
                  to="/"
                  className={`block hover:bg-[#72B8724D] px-4 py-2 ${isActive(
                    "/"
                  )}`}
                  onClick={toggleMobileMenu}
                >
                  Home
                </Link>
                <Link
                  to="/invest"
                  className={`block hover:bg-[#72B8724D] px-4 py-2 ${isActive(
                    "/invest"
                  )}`}
                  onClick={toggleMobileMenu}
                >
                  Invest
                </Link>
                <Link
                  to="/createAsset"
                  className={`block hover:bg-[#72B8724D] px-4 py-2 ${isActive(
                    "/createAsset"
                  )}`}
                  onClick={toggleMobileMenu}
                >
                  Create Assets
                </Link>
                <Link
                  to="/profile"
                  className={`block hover:bg-[#72B8724D] px-4 py-2 ${isActive(
                    "/profile"
                  )}`}
                  onClick={toggleMobileMenu}
                >
                  Profile
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-row justify-between w-screen">
            <div className=" flex flex-row ">
              <Link to="/" className="flex ">
                <img src={logo} alt="logo" />
                <div className="px-2 font-bold text-xl text-black flex justify-center items-center">
                  Cropcrypt
                </div>
              </Link>
            </div>

            <div className="flex flex-row justify-center lg:gap-8">
              <Link
                to="/"
                className={`flex md:px-2 font-medium lg:px-2 ${isActive("/")}`}
              >
                <div className="flex justify-center items-center">
                  <img src={home} alt="home" className="w-5 h-5" />
                </div>
                <div className="px-2 mt-0.5 flex justify-center items-center">
                  Home
                </div>
              </Link>

              <Link
                to="/invest"
                className={`flex md:px-1 font-medium lg:px-2 ${isActive(
                  "/invest"
                )}`}
              >
                <div className="flex justify-center items-center">
                  <img src={invest} alt="invest" className="w-5 h-5" />
                </div>
                <div className="px-2 mt-0.5 flex justify-center items-center">
                  Invest
                </div>
              </Link>

              <Link
                to="/createAsset"
                className={`flex md:px-1 font-medium lg:px-2 ${isActive(
                  "/createAsset"
                )}`}
              >
                <div className="flex justify-center items-center">
                  <img src={mint} alt="createAsset" className="w-5 h-5" />
                </div>
                <div className="px-1 mt-0.5 flex justify-center items-center">
                  Create Assets
                </div>
              </Link>

              <Link
                to="/profile"
                className={`flex md:px-1 font-medium lg:px-2 ${isActive(
                  "/profile"
                )}`}
              >
                <div className="flex justify-center items-center">
                  <img src={profile} alt="profile" className="w-5 h-5" />
                </div>
                <div className="px-2 mt-0.5 flex justify-center items-center">
                  Profile
                </div>
              </Link>
            </div>

            <div className="flex justify-center items-center">
              <div className="flex px-2 justify-center items-center">
                <img src={settings} alt="home" className="w-8 h-8" />
              </div>

              <div className="flex justify-center gap-2 items-center">
                <img src={blue} alt="home" className="w-10 z-20 h-10" />

                <div
                  className="relative"
                  onMouseEnter={() => setAssetChainDropdownVisible(true)}
                  onMouseLeave={() => setAssetChainDropdownVisible(false)}
                >
                  <button className="flex flex-row ml-[-34px] border-2 border-grey bg-green-100 rounded-2xl py-1 px-5 text-deepgreen justify-center items-center">
                    <div className="px-3 font-bold">Asset Chain</div>
                    <img
                      src={down}
                      alt="home"
                      className="px-1 w-5 h-2 mt-1 z-20"
                    />
                  </button>

                  {isAssetChainDropdownVisible && (
                    <div className="absolute bg-green-100 mt-1 border border-gray-200 left-[-15px] rounded-lg shadow-lg w-40 z-50">
                      <ul className="py-2">
                        <li className="px-4 py-2 hover:bg-gray-100">Chain 1</li>
                        <li className="px-4 py-2 hover:bg-gray-100">Chain 2</li>
                        <li className="px-4 py-2 hover:bg-gray-100">Chain 3</li>
                        <li className="px-4 py-2 hover:bg-gray-100">Chain 4</li>
                        <li className="px-4 py-2 hover:bg-gray-100">Chain 5</li>
                      </ul>
                    </div>
                  )}
                </div>

                <div className="relative">
                  <button
                  // onClick={handleBuyClick}
                  // className="flex flex-row text-white rounded-3xl hover:bg-white hover:text-[#359A35] hover:border-2 hover:border-[#359A35] transition-all duration-300 bg-[#359A35] py-2 px-3 justify-center items-center"
                  >
                    <ConnectButton />
                  </button>

                  {/* {showModal && (
                  <div
                    onClose={handleCloseModal}
                    className="fixed inset-0 bg-gray-600 bg-opacity-50 p-4 md:p-20 z-50 border flex flex-col justify-center items-center"
                  >
                    <div className="bg-white md:w-[800px]  rounded-xl">
                      <div className="px-3 py-3 absolute ">
                        <button
                          className="text-gray-600 hover:text-gray-800"
                          onClick={handleCloseModal}
                        >
                          <img src={closeicon} alt="home" className=" " />
                        </button>
                      </div>

                      <div className="flex flex-row ">
                        <div className="md:w-[60%]">
                          <div className="px-9  text-xl font-bold border-b-2 py-5 mt-7 ">
                          <ConnectButton />

                          </div>
                          <div className="py-2 px-9">
                            <p className="text-[#00000080] font-medium">
                              Start by connecting with one of the{" "}
                              <b className="text-[#359A35]">
                                custodial wallets
                              </b>{" "}
                              below. Be sure to store your private keys or seed
                              phrase securely. Never share them with anyone
                            </p>
                          </div>

                          <div className="grid xx:grid-cols-3 sm:grid-cols-4 gap-0 px-2 py-2">
                            <a className="flex flex-col justify-center rounded-2xl py-1 hover:bg-[#72B8724D] items-center">
                              <div>
                                <img src={metamask} alt="home" className=" " />
                              </div>
                              <p className="font-semibold text-sm px-1 py-1">
                                Metamask
                              </p>
                            </a>

                            <a className="flex flex-col justify-center rounded-2xl py-1 hover:bg-[#72B8724D] items-center">
                              <div>
                                <img
                                  src={trustwallet}
                                  alt="home"
                                  className=" "
                                />
                              </div>
                              <p className="font-semibold text-sm px-1 py-1">
                                Trust Wallet
                              </p>
                            </a>

                            <a className="flex flex-col justify-center rounded-2xl py-1 hover:bg-[#72B8724D] items-center">
                              <div>
                                <img src={binance} alt="home" className=" " />
                              </div>
                              <p className="font-semibold text-sm px-1 py-1">
                                Binance Wallet
                              </p>
                            </a>

                            <a className="flex flex-col justify-center rounded-2xl py-1 hover:bg-[#72B8724D] items-center">
                              <div>
                                <img src={coinbase} alt="home" className=" " />
                              </div>
                              <p className="font-semibold text-sm px-1 py-1">
                                Coinbase
                              </p>
                            </a>

                            <a className="flex flex-col justify-center rounded-2xl py-4 hover:bg-[#72B8724D] items-center">
                              <div>
                                <img src={okx} alt="home" className=" " />
                              </div>
                              <p className="font-semibold text-sm px-1 py-1">
                                OKX Wallet
                              </p>
                            </a>

                            <a className="flex flex-col justify-center rounded-2xl py-4 hover:bg-[#72B8724D] items-center">
                              <div>
                                <img
                                  src={walletconnect}
                                  alt="home"
                                  className=" "
                                />
                              </div>
                              <p className="font-semibold text-sm px-1 py-1">
                                WalletConnect
                              </p>
                            </a>

                            <a className="flex flex-col justify-center rounded-2xl py-4 hover:bg-[#72B8724D] items-center">
                              <div>
                                <img
                                  src={bravewallet}
                                  alt="home"
                                  className=" "
                                />
                              </div>
                              <p className="font-semibold text-sm px-1 py-1">
                                Brave Wallet
                              </p>
                            </a>

                            <a className="flex flex-col justify-center rounded-2xl py-4 hover:bg-[#72B8724D] items-center">
                              <div>
                                <img src={rabby} alt="home" className=" " />
                              </div>
                              <p className="font-semibold text-sm px-1 py-1">
                                Rabby Wallet
                              </p>
                            </a>

                            <a className="flex flex-col justify-center rounded-2xl py-4 hover:bg-[#72B8724D] items-center">
                              <div>
                                <img src={opera} alt="home" className=" " />
                              </div>
                              <p className="font-semibold text-sm px-1 py-1">
                                Opera Wallet
                              </p>
                            </a>

                            <a className="flex flex-col justify-center rounded-2xl py-4 hover:bg-[#72B8724D] items-center">
                              <div>
                                <img src={safepal} alt="home" className=" " />
                              </div>
                              <p className="font-semibold text-sm px-1 py-1">
                                Safepal Wallet
                              </p>
                            </a>

                            <a className="flex flex-col justify-center rounded-2xl py-4 hover:bg-[#72B8724D] items-center">
                              <div>
                                <img src={math} alt="home" className=" " />
                              </div>
                              <p className="font-semibold text-sm px-1 py-1">
                                Math Wallet
                              </p>
                            </a>

                            <a className="flex flex-col justify-center rounded-2xl py-1 hover:bg-[#72B8724D] items-center">
                              <div>
                                <img
                                  src={tokenpocket}
                                  alt="home"
                                  className=" "
                                />
                              </div>
                              <p className="font-semibold text-sm px-1 py-1">
                                Token Pocket
                              </p>
                            </a>
                          </div>

                          <div className="flex flex-row gap-4 justify-center py-3">
                            <div>3 dots </div>
                            <div>
                              <p>More</p>
                            </div>
                          </div>
                        </div>

                        <div className="md:flex hidden flex-col bg-[#72B8724D] rounded-2xl py-16 justify-center items-center border">
                          <div className="text-[#1B6909] py-10 font-semibold">
                            <p>Haven't got a wallet yet?</p>
                          </div>

                          <div className="py-3">
                            <img src={creditcard} alt="home" className=" " />
                          </div>

                          <div className="py-4">
                            <button className="flex py-2 px-4 rounded-2xl flex-row items-center text-white bg-gradient-invest font-meduim">
                              <p>Learn how to connect</p>
                              <div>
                                <img
                                  src={boxarrow}
                                  alt="loader"
                                  className="ml-2"
                                />
                              </div>
                            </button>
                          </div>

                          <div className="text-sm font-medium">
                            <p>What is web3 wallet?</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )} */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </RainbowKitProvider>
  );
};

export default Nav;
