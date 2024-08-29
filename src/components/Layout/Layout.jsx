import React from "react";
import Pop from "../Pop";
import Hero from "../Hero";

const Layout = () => {
  return (
    <div className="flex flex-col justify-center px-40">
      <Pop />
      <Hero />
    </div>
  );
};

export default Layout;
