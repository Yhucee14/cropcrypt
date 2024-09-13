import React, { useEffect, useState } from "react";
import axios from "axios";
import share from "../assets/share.png";
import { Link } from "react-router-dom";

const SectionThree = () => {
  const [assets, setAssets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      }finally {
        setIsLoading(false); 
      }
    };

    fetchAssets();
  }, []);

  return (
    <div className="py-5 flex flex-col">
      <div className="font-bold py-2 text-2xl px-2">Agricultural Holdings</div>

      {assets.map((asset) => (
        <Link
          to={`/asset/${asset._id}`}
          key={asset._id}
          className="hover:bg-[#a8a4a479] transition-all duration-300 rounded-lg"
        >
          <div className="flex py-4 flex-col border-b-2 border-b-[#A8A4A4] justify-center">
            <div className="flex flex-row md:justify-between lg:justify-between gap-4">
              <div className="md:w-[500px]  ">
                <img
                  src={asset.image || ivoryimg}
                  alt={asset.name}
                  className="z-20 md:h-[330px] w-full"
                />
              </div>
              <div className="flex px-5 py-5 flex-row justify-between md:gap-14 lg:gap-8">
                <div className="flex flex-col py-2">
                  <p className="font-bold py-2 text-3xl">{asset.name}</p>
                  <div className="text-[#359A35] flex flex-row gap-2 font-extrabold text-2xl">
                    <p>{asset.amount}</p>
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
                      Annual Appreciation: {asset.annualAppreciation || "N/A"}%
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-20 py-5">
                  <div className="flex flex-row gap-2">
                    <div>
                      <img src={share} alt="share" className="z-20" />
                    </div>
                    <button className="bg-[#359A35] rounded-xl py-2 px-6 font-bold text-white">
                      BUY
                    </button>
                  </div>
                  <div>
                    <p className="py-3 text-md">
                      Share Price: ${asset.amount || "N/A"}
                    </p>
                    <p className="text-md">Available shares: {asset.shares}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SectionThree;
