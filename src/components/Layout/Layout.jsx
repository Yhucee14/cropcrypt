import React from "react";
import Pop from "../Pop";
import Hero from "../Hero";
import GetStarted from "../GetStarted";
import Discover from "../Discover";
import World from "../World";
import Lock from "../Lock";
import Chain from "../Chain";
import Wallet from "../Wallet";

const Layout = () => {
  return (
    <div className="flex flex-col justify-center ">
      <div className="px-40">
        <Pop />
      </div>

      <div className="px-40">
        <Hero />
      </div>

      <div className="px-40">
        <GetStarted />
      </div>

      <div className="px-40">
        <Discover />
      </div>

      <div className="md:px-8 lg:px-36">
        <World />
      </div>

      <div className="px-40">
        <Lock />
      </div>

      <Chain />

      <div className="px-40">
        <Wallet />
      </div>
    </div>
  );
};

export default Layout;
