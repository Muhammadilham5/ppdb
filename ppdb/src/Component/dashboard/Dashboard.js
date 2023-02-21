import React from "react";
import "./dashboard.css";
import Maindashboard from "../Maindashboard";
import Datadashboard from "../Datadashboard";
import MenuDashboard from "../MenuDasboard";

const Dashboard = () => {
  return (
    <>
      <MenuDashboard />
      <Maindashboard />
      <Datadashboard />
    </>
  );
};

export default Dashboard;
