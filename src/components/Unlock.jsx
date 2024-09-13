import React from "react";
import bigLogo from "../assets/bigLogo.png";
import greenx from "../assets/greenx.png";

const Unlock = () => {
  return (
    <div className="flex py-5 relative flex-col justify-center">
      <div className="flex xx:text-center sm:text-start flex-col justify-center items-center font-bold text-3xl py-5">
        <p className="px-1 ">
          Unlock the Full Potential of{" "}
          <b className="text-[#1B6909] px-1">Real World Asset</b>
        </p>
        <p className="py-1">
          with <b className="text-[#1B6909] px-1">CROPCRYPT</b>
        </p>
      </div>

      <div className="absolute hidden sm:visible md:top-[-40px] lg:top-[-50px] md:right-[-120px] lg:right-0">
        <img src={greenx} alt="home" className="md:w-32 md:h-32 lg:w-40 lg:h-40 z-20" />
      </div>

      <div className="flex xx:flex-col sm:flex-row justify-between md:gap-10 lg:gap-2">
        <div className="flex flex-col ">
          <div className="md:w-[400px] lg:w-[400px] px-2 lg:py-3 lg:px-2">
            <p className="font-bold text-2xl">Extensive Asset Documentation</p>
            <p className="py-5 ">
              Our platform features extensive Asset Documentation and
              verification of certain conditions which are to be met before
              onboarding any asset.
            </p>
          </div>

          <div className="md:w-[400px] lg:w-[450px] px-2 md:mt-10 lg:mt-2 lg:py-3 lg:px-2">
            <p className="font-bold text-2xl">
              Tokenization of Agricultural Assets
            </p>
            <p className="py-5 ">
              Cropcrypt ensures secure investment by tokenizing the
              farmers/sellers asset into fractions, which are purchasable by
              interested investors.
            </p>
          </div>
        </div>
        <div className="absolute hidden sm:visible md:top-[290px] lg:top-[240px] md:left-[330px] lg:left-[430px]">
          <img src={bigLogo} alt="home" className="md:w-28 md:h-28 lg:w-44 lg:h-40 z-20" />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col items-end">
            <div className="md:w-[320px] lg:w-[450px] px-2 lg:py-3 lg:px-2">
              <p className="font-bold text-2xl">
                Onboarding Legally Transactable Assets
              </p>
              <p className="py-5 ">
                Cropcrypt is focused squarely to enable seamless onboarding of
                legally transactable agricultural assets on-chain.
              </p>
            </div>

            <div className="md:w-[320px] lg:w-[450px] px-2 lg:py-3 lg:px-2">
              <p className="font-bold text-2xl">
                Secured and Scalable Infrastructure
              </p>
              <p className="py-5 ">
                Our platform is proudly built on <b>Asset Chain</b> technology
                with a well structured smart contract, which facilitates{" "}
                <b>rapid</b>, <b>secure</b>
                and <b>scalable infrastructure</b> for transparent transactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unlock;
