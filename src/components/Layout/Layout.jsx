import React from "react";
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
      <div className="md:px-36 lg:px-40">
        <Pop />
      </div>

      <div className="md:px-36 lg:px-40">
        <Hero />
      </div>

      <div className="md:px-36 lg:px-40">
        <GetStarted />
      </div>

      <div className="md:px-36 lg:px-40">
        <Discover />
      </div>

      <div className="md:px-28 lg:px-36">
        <World />
      </div>

      <div className="md:px-36 lg:px-40">
        <Lock />
      </div>

      <Chain />

      <div className="md:px-36 lg:px-40">
        <Wallet />
      </div>

      <div className="md:px-36 lg:px-40">
        <Unlock />
      </div>

      <div className="md:px-36 lg:px-40">
        <Benefits />
      </div>

      <div className="md:px-36 lg:px-40">
        <Footer />
      </div>

      <div className="md:px-36 lg:px-40">
        <GreenFooter />
      </div>
    </div>
  );
};

export default Layout;
