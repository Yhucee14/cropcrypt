import React from "react";
import Nav from "../components/Nav";
import SectionOne from "./SectionOne";

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <Nav />

      <div className="px-10">
        <SectionOne />
      </div>
    </div>
  );
};

export default Dashboard;
