import React from "react";
import Nav from "../components/Nav";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <Nav />

      <div className="px-8">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </div>
    </div>
  );
};

export default Dashboard;
