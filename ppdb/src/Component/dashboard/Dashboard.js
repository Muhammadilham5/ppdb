import React, { useState } from "react";
import "./dashboard.css";
import Maindashboard from "../Maindashboard";
import menu from "../../asset/icons8_menu.ico";
import verification from "../../asset/icons8_check_document.ico";
import data from "../../asset/icons8_profile.ico"
import logout from "../../asset/icons8_logout.ico";
import dashboard from "../../asset/icons8_speed.ico"
import Datadashboard from "../Datadashboard";
import MenuDashboard from "../MenuDasboard";

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  const handleToggleClick = () => {
    setOpen(!open);
  
    const mainContent = document.querySelector('.main-content');
    if (open) {
      mainContent.style.marginLeft = '150px';
      mainContent.style.width = `calc(100% - 150px)`;
      mainContent.style.transition= `all 0.3s ease`;
    } else {
      mainContent.style.marginLeft = '200px';
      mainContent.style.width = `calc(100% - 200px)`;
      mainContent.style.transition= `all 0.3s ease`;
    }
  }
  

  return (
    <div>
      <div className="d-flex">
        <div className="d-flex">
        <nav className={`${open ? "sidebar" : "sidebar close"}`}>
        <header>
          <i className="toggle" onClick={handleToggleClick}>
            <img src={menu} alt="" />
          </i>
        </header>

        <ul className="menu">
          <li className="nav-link dashboard">
            <a href="/dashboard">
            <i className="icon">
              <img src={dashboard} alt="" />
            </i>
            <span className="text">Dashboard</span>
            </a>
          </li>

          <li className="nav-link dashboard">
            <a href="/">
            <i className="icon">
              <img src={verification} alt="" />
            </i>
            <span className="text">verifikasi</span>
            </a>
          </li>

          <li className="nav-link dashboard">
            <a href="/dashboard">
            <i className="icon">
              <img src={data} alt="" />
            </i>
            <span className="text">data siswa</span>
            </a>
          </li>

          <li className="nav-link dashboard">
            <a href="/dashboard">
              <i className="nav-link">
                <img src={logout} alt="" />
              </i>
              <span className="text">Logout</span>
            </a>
          </li>

        </ul>
      </nav>
        </div>
        <div className="container main-content" style={{ marginLeft: 125 }}>
        <MenuDashboard />
        <Maindashboard />
        <Datadashboard />

        </div>
      </div>
    
    </div>
  );
};

export default Dashboard;
