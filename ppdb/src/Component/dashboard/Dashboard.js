import React from "react";
import "./dashboard.css";
import Maindashboard from "../Maindashboard";
import DataSiswaDashboard from "../DataSiswaDashboard";
import DataOrtuDashboard from "../DataOrtuDashboard";
import MenuDashboard from "../MenuDasboard";

const Dashboard = () => {
  return (
    <>
      <MenuDashboard />
      <Maindashboard />
      <DataSiswaDashboard />
      <DataOrtuDashboard />
    </>
  );
};

export default Dashboard;
