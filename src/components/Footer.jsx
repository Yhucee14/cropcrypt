import React from "react";

const Footer = () => {
  return (
    <div className="sm:py-10 px-2 flex flex-col justify-center items-center">
      <div className="">
        <p className="py-2 text-xl  font-bold">
          Be up to date with our freshest news when you sign up
        </p>
      </div>

      <div className="py-4">
        <form className="flex flex-row justify-between gap-2  w-[400px]">
          <input
            type="email"
            placeholder="example@email.com"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            className="border border-[#359A35] bg-[#F4F4F4] w-[75%] rounded-3xl h-8 text-sm px-[25px] text-[#359A35]"
          />


          <button type="submit" className="flex h-8 bg-gradient-invest rounded-3xl py-2 px-4 text-white font-semibold justify-center items-center">
           Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
