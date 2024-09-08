import React, { useState } from "react";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
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
  const tableData = [
    {
      tokenName: "MUSA #2240",
      pricePerShare: "2.344",
      from: "0xc0...d1ce95Bosses",
      qty: 50,
      date: "2023-08-01",
      to: "0xc0...d1ce95Bosses",
      apr: "2.79%",
      annualReturn: "$470.8627",
    },
    {
      tokenName: "MUSA #2240",
      pricePerShare: "2.344",
      from: "0xc0...d1ce95Bosses",
      qty: 50,
      date: "2023-08-01",
      to: "0xc0...d1ce95Bosses",
      apr: "2.79%",
      annualReturn: "$470.8627",
    },
    {
      tokenName: "MUSA #2240",
      pricePerShare: "2.344",
      from: "0xc0...d1ce95Bosses",
      qty: 50,
      date: "2023-08-01",
      to: "0xc0...d1ce95Bosses",
      apr: "2.79%",
      annualReturn: "$470.8627",
    },
    {
      tokenName: "MUSA #2240",
      pricePerShare: "2.344",
      from: "0xc0...d1ce95Bosses",
      qty: 50,
      date: "2023-08-01",
      to: "0xc0...d1ce95Bosses",
      apr: "2.79%",
      annualReturn: "$470.8627",
    },
    {
      tokenName: "MUSA #2240",
      pricePerShare: "2.344",
      from: "0xc0...d1ce95Bosses",
      qty: 50,
      date: "2023-08-01",
      to: "0xc0...d1ce95Bosses",
      apr: "2.79%",
      annualReturn: "$470.8627",
    },
  ];

  const assetDocs = [
    {
      title: "Declaration of ownership",
      description: "Verification of Asset ownership",
      issuedBy: "Dentons ACAS-Law",
      issueDate: "Issued Feb 2021",
      logo: denton,
    },
    {
      title: "Farmers Multi-Peril Insurance Policy",
      description: "Heirs Insurance Holdings",
      issuedBy: "Duration of coverage: 2 years",
      issueDate: "Issued Aug 2021",
      logo: redworld,
    },
    {
      title: "Financial Guarantee Statement",
      description: "United Bank of Africa (UBA)",
      issuedBy: "Duration of coverage: 2 years",
      issueDate: "Issued Mar 2021",
      logo: uba,
    },
    {
      title: "Voter Endorsement",
      description:
        "Voter endorsement refers to community members publicly supporting a particular initiative,",
      issuedBy: "10 endorsements",
      issueDate: "Issued May 2021",
      logo: people,
    },
  ];

  const [selectedCrypto, setSelectedCrypto] = useState("USDT");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 2; // Number of rows per page
  const [showModal, setShowModal] = useState(false);
  const [numberOfShares, setNumberOfShares] = useState(0);

  const cryptoOptions = [
    { name: "Bitcoin", icon: usdt },
    { name: "Ethereum", icon: usdt },
    { name: "Litecoin", icon: usdt },
    { name: "Ripple", icon: usdt },
    { name: "Dogecoin", icon: usdt },
  ];

  const increment = () => {
    setNumberOfShares((prev) => prev + 1);
  };

  const decrement = () => {
    if (numberOfShares > 0) {
      setNumberOfShares((prev) => prev - 1);
    }
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCryptoSelect = (crypto) => {
    setSelectedCrypto(crypto.name);
    setIsDropdownOpen(false);
  };

  const handleBuyClick = () => {
    setShowModal(true); // Show modal on click
  };

  const handleCloseModal = () => {
    setShowModal(false); // Hide modal
  };

  // Calculate total pages
  const totalPages = Math.ceil(tableData.length / rowsPerPage);

  // Calculate data for current page
  const currentTableData = tableData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // Handlers for next and previous page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className=" relative">
      <Nav />

      <div className="flex flex-col px-8 ">
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
                src={cocoa}
                alt="home"
                className="md:w-[500px] md:h-[380px] lg:h-[450px] lg:w-[570px] z-20"
              />
            </div>
            <div className="flex flex-col justify-center py-5 px-5 md:w-[40%] lg:w-[45%]  text-white ">
              <p className="font-bold md:text-2xl lg:text-3xl">
                Mama Amoge Cocoa Farm
              </p>
              <p className="py-2 text-[#A8A4A4] font-bold">
                Cross River State, Nigeria
              </p>
              <div className="py-5">
                <p className="font-bold text-xl py-2">Price</p>
                <div className="flex flex-row gap-2">
                  <p className="font-bold text-3xl">2.344</p>
                  <p className="text-[#A8A4A4] font-bold mt-2.5">($13.00)</p>
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

                <div className="bg-white z-50 hover:bg-[#A8A4A4] transiton-all duration-300  rounded-xl">
                  <img src={share} alt="home" className=" " />
                </div>
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
                  <b className="text-[#359a35]"> Category:</b> Livestock
                </p>
                <p className="text-[#000000] py-2 px-2">
                  <b className="text-[#359a35]"> From:</b> MUSA CATTLE FARM
                  #3239
                </p>
                <p className="text-[#000000] py-2 px-2">
                  <b className="text-[#359a35]"> Asset ID:</b> #0X3364B
                </p>
                <p className="text-[#000000] py-2 px-2">
                  <b className="text-[#0500FF]"> Recipient address: </b>
                  0xc0...d1ce95BossesCrosses
                </p>
              </div>
            </div>
            <div className="flex flex-col px-2 py-3 shadow-xl rounded-xl">
              <div className="flex flex-row px-3 py-3 justify-between">
                <p>Pay with: </p>
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
                        className="w-5"
                      />
                      <p>{selectedCrypto}</p>
                    </div>
                    <div className="px-2 flex items-center">
                      <img src={downarrow} alt="dropdown arrow" />
                    </div>
                  </div>

                  {isDropdownOpen && (
                    <div className="absolute top-full mt-2 w-[140px] bg-white border shadow-lg rounded-xl">
                      {cryptoOptions.map((crypto) => (
                        <div
                          key={crypto.name}
                          className="flex flex-row px-2 py-2 gap-2 items-center cursor-pointer hover:bg-gray-100"
                          onClick={() => handleCryptoSelect(crypto)}
                        >
                          <img
                            src={crypto.icon}
                            alt={crypto.name}
                            className="w-6 h-6"
                          />
                          <p>{crypto.name}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-row px-2 py-3 justify-between">
                <p>Price per share: </p>
                <div className="flex flex-col">
                  <div className="flex flex-row gap-2">
                    <p> 2.344</p>
                    <p className="">{selectedCrypto}</p>
                  </div>

                  <div className="flex justify-end">($13.19)</div>
                </div>
              </div>

              <div className="flex flex-row px-2 py-3 justify-between">
                <p>Number of shares: </p>
                <div className="flex flex-row gap-2">
                  <button
                    className="cursor-pointer font-bold rounded-md h-6 mt-1 px-2 text-2xl text-white bg-red-600"
                    onClick={decrement}
                  >
                    <p className="mt-[-4px]"> - </p>
                  </button>

                  <div className="mt-1 px-1 ml-2 flex justify-center">
                    {numberOfShares}
                  </div>

                  <button
                    className="cursor-pointer mt-[-2px] "
                    onClick={increment}
                  >
                    <img src={plus} alt="increment" className="w-12" />
                  </button>
                </div>
              </div>

              <div className="flex flex-row px-2 py-3 justify-between">
                <p>You earn (Invest Return): </p>
                <div className="flex flex-col">
                  <div className="flex flex-row gap-2 text-[#2210F4]">
                    <p> 7.344</p>
                    <p className="">{selectedCrypto}</p>
                  </div>

                  <div className="flex justify-end">($13.19)</div>
                </div>
              </div>

              <div className="flex flex-row px-2 py-3 justify-between">
                <p>Commission Fee (2%): </p>
                <div className="flex flex-row gap-2">
                  <p>$1.03</p>
                  <p className="">{selectedCrypto}</p>
                </div>
              </div>

              <div className="flex flex-row px-2 py-4 justify-between">
                <p>Network Fee: </p>
                <div className="flex gap-2 flex-row">
                  <p>(20 RWA)</p>
                  <p className="">0.807</p>
                  <p className="">{selectedCrypto}</p>
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
              className="bg-[#359A35] z-50 hover:bg-white hover:text-[#359A35] hover:border-2 hover:border-[#359A35] transiton-all duration-300 rounded-xl py-2 px-6 font-semibold text-xl w-full text-white"
            >
              Connect wallet to buy
            </button>
          </div>
        </Modal>
      )}

      <div className="px-8 py-4">
        <p className="font-bold py-2 text-2xl">Description</p>

        <div>
          <p className="py-2 font-medium">
            Mama Amoge Farm is a thriving cocoa farm nestled in the heart of
            Cross River, Nigeria. Our farm is dedicated to sustainable cocoa
            production, utilizing eco-friendly practices to ensure high-quality
            yields while preserving the environment.
          </p>

          <p className="py-2 font-medium">
            Vision: <br />
            To become a leading cocoa producer in Nigeria, known for our
            exceptional quality, sustainability, and community impact.
          </p>

          <p className="py-2 font-medium">
            Investment Opportunity: <br />
            We invite investors to partner with us in expanding our operations,
            increasing production capacity, and exploring new markets with your
            support, we can increase cocoa yields and quality.
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
            Name: Musa Ladipo
          </p>
          <p className="px-3 py-2 text-[#736D6D] border-b-2">
            Price: <b className="text-black text-lg">2.344</b>{" "}
            <b className="text-[#359A35]">($13.00)</b>
          </p>
          <p className="px-3 py-3 text-[#736D6D] border-b-2">
            Created Date:{" "}
            <b className="text-black text-lg">Apr 12, 2023; 12:09 GMT +1</b>
          </p>
          <p className="px-3 text-[#736D6D] border-b-2">
            Contract Address:{" "}
            <b className="text-[#2210F4]">0xc0...d1ce95BossesCrosses</b>
          </p>
          <p className="px-3 text-[#736D6D] border-b-2 py-3">
            Country of origin:{" "}
            <b className="font-bold text-black">Kano State, Nigeria</b>
          </p>
          <p className="px-3 text-[#736D6D] border-b-2 py-3">
            Token Address:{" "}
            <b className="text-[#2210F4]">0xc0...d1ce95BossesCrosses</b>
          </p>
          <p className="px-3 text-[#736D6D] border-b-2 py-3">
            Asset ID: <b className="font-bold text-black">#0X3364B</b>
          </p>
          <p className="px-3 text-[#736D6D] py-4">
            Harvest Duration: <b className="font-bold text-black">5 Years</b>
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
          <p className="font-bold text-3xl text-black">Investment Highlight:</p>
          <br />

          <div className="flex flex-row py-4 justify-between">
            <div>
              <p className="py-1 font-bold text-[#00000090]">
                Annual Return: 8.6%
              </p>
              <p className="py-1 font-bold text-[#00000090]">
                Annual Appreciation: 9.2%
              </p>
            </div>
            <div>
              <p className="py-1 font-bold text-[#00000090]">
                Share Price: $300.33
              </p>
              <p className="py-1 font-bold text-[#00000090]">
                Available Shares: 233
              </p>
            </div>
            <div>
              <p className="py-1 font-bold text-[#00000090]">
                Current Annual Revenue: $300.33
              </p>
              <p className="py-1 font-bold text-[#00000090]">
                Investment Timeline: Long-Term
              </p>
            </div>
          </div>

          <div className=" py-4 px-[20%] h-1">
            <hr />
          </div>

          <div className="py-4 flex flex-col ">
            <div>
              <p className="text-3xl font-bold ">Activity</p>
            </div>

            <div className="py-4">
              <table className="min-w-full table-auto border-collapse border shadow-sm shadow-black rounded-lg border-gray-300">
                <thead>
                  <tr className="bg-[#f1f1f1]">
                    <th className="px-1 text-center py-2 border border-gray-300">
                      Token Name
                    </th>
                    <th className="px-1 text-center py-2 border border-gray-300">
                      Price/Share (USDT)
                    </th>
                    <th className="px-1 text-center py-2 border border-gray-300">
                      From
                    </th>
                    <th className="px-1 text-center py-2 border border-gray-300">
                      QTY of Shares
                    </th>
                    <th className="px-1 text-center py-2 border border-gray-300">
                      Date
                    </th>
                    <th className="px-1 text-center py-2 border border-gray-300">
                      To
                    </th>
                    <th className="px-1 text-center py-2 border border-gray-300">
                      APR (%)
                    </th>
                    <th className="px-1 text-center py-2 border border-gray-300">
                      Annual Return
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentTableData.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="px-1 text-center py-2 border border-gray-300">
                        {row.tokenName}
                      </td>
                      <td className="px-1 text-center py-2 border border-gray-300">
                        {row.pricePerShare}
                      </td>
                      <td className="px-1 text-center py-2 border border-gray-300">
                        {row.from}
                      </td>
                      <td className="px-1 text-center py-2 border border-gray-300">
                        {row.qty}
                      </td>
                      <td className="px-1 text-center py-2 border border-gray-300">
                        {row.date}
                      </td>
                      <td className="px-1 text-center py-2 border border-gray-300">
                        {row.to}
                      </td>
                      <td className="px-1 text-center py-2 border border-gray-300">
                        {row.apr}
                      </td>
                      <td className="px-1 text-center py-2 border border-gray-300">
                        {row.annualReturn}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="flex justify-center">
                <div className="flex justify-between items-center py-4">
                  <img
                    src={smallarrowleft}
                    alt="home"
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 w-16 h-12 cursor-pointer ${
                      currentPage === 1 ? "text-gray-400" : "text-black"
                    } hover:bg-gray-100`}
                  />
                  <p className="font-semibold">{`Page ${currentPage} of ${totalPages}`}</p>
                  <img
                    src={smallarrowright}
                    alt="home"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 w-16 h-12 cursor-pointer ${
                      currentPage === totalPages
                        ? "text-gray-400"
                        : "text-black"
                    } hover:bg-gray-100`}
                  />
                </div>
              </div>

              <div>
                <p className="font-bold text-3xl py-3">
                  Assets Documentation's (legally)
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {assetDocs.map((doc, index) => (
                    <div
                      key={index}
                      className="border p-4 shadow-md flex flex-col gap-2 rounded-lg"
                    >
                      <p className="text-lg font-bold">{doc.title}</p>
                      <div className="flex flex-row gap-4 p-2">
                        <div>
                          <img src={doc.logo} alt="loader" className="ml-2" />
                        </div>
                        <div className="flex flex-col">
                          <p className="py-2 text-gray-600 font-bold">
                            {doc.description}
                          </p>
                          <p className="text-gray-500">{doc.issuedBy}</p>
                          <p className="text-gray-500">{doc.issueDate}</p>
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
    </div>
  );
};

export default AssetPortfolio;
