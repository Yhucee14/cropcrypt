import React from "react";
import Pop from "../Pop";
import Hero from "../Hero";
import GetStarted from "../GetStarted";
import Discover from "../Discover";

const Layout = () => {
  return (
    <div className="flex flex-col justify-center px-40">
      <Pop />
      <Hero />
      <GetStarted />
      <Discover />
    </div>
  );
};

export default Layout;
