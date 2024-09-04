import React from "react";
import Nav from "../components/Nav";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import GreenFooter from "./GreenFooter";

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <Nav />

      <div className="px-8">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <GreenFooter />
      </div>
    </div>
  );
};

export default Dashboard;
