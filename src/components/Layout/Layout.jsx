import React, { useState } from "react";
import Pop from "../Pop";
import Hero from "../Hero";
import GetStarted from "../GetStarted";
import Discover from "../Discover";
import World from "../World";
import Lock from "../Lock";
import Chain from "../Chain";
import Wallet from "../Wallet";
import Unlock from "../Unlock";
import Benefits from "../Benefits";
import Footer from "../Footer";
import Nav from "../Nav";
import GreenFooter from "../../dashboard/GreenFooter";

const Layout = () => {
  return (
    <div className="flex flex-col justify-center ">
      <Nav />

      <div className="xx:px-1 md:px-36 lg:px-40">
        <Pop />
        <Hero />
        <GetStarted />
        <Discover />
        <World />
        <Lock />
        {/* <Chain /> */}
        <Wallet />
        <Unlock />
        <Benefits />
        <Footer />
      </div>

      <GreenFooter />
    </div>
  );
};

export default Layout;
