import React, { useState } from "react";
import "./dashboard/dashboard.css";
import menu from "../asset/icons8_menu.ico";
import verification from "../asset/icons8_check_document.ico";
import data from "../asset/icons8_profile.ico";
import logout from "../asset/icons8_logout.ico";
import dashboard from "../asset/icons8_speed.ico";
import { toast } from "react-toastify";
import { Link, Outlet, useNavigate } from "react-router-dom";

const WrapperComp = ({ setIsAuthenticated }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggleClick = () => {
    setOpen(!open);

    const mainContent = document.querySelector(".main-content");
    if (open) {
      mainContent.style.marginLeft = "150px";
      mainContent.style.width = `calc(100% - 150px)`;
      mainContent.style.transition = `all 0.3s ease`;
    } else {
      mainContent.style.marginLeft = "200px";
      mainContent.style.width = `calc(100% - 200px)`;
      mainContent.style.transition = `all 0.3s ease`;
    }
  };

  const logoutFunc = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    toast("Logout Berhasil", { type: "success" });
    navigate("/login");
  };

  return (
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
            <Link to="/dashboard/verifikasi">
          
                <i className="icon">
                  <img src={verification} alt="" />
                </i>
                <span className="text">verifikasi</span>
            </Link>
            </li>

            <li className="nav-link dashboard">
            <Link to="/dashboard/data-siswa">
                <i className="icon">
                  <img src={data} alt="" />
                </i>
                <span className="text">data siswa</span>
              </Link>
            </li>

            <li className="nav-link dashboard">
            <Link to="/dashboard/data-wali">
                <i className="icon">
                  <img src={data} alt="" />
                </i>
                <span className="text">data wali</span>
              </Link>
            </li>

            <li
              className="nav-link dashboard"
              onClick={() => logoutFunc()}
              style={{
                listStyle: "none",
                height: "100%",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                width: "100%",
                borderRadius: "6px",
                textDecoration: "none",
                transition: "all 0.3s ease",
                paddingTop: "8px",
              }}
            >
              <i className="nav-link">
                <img src={logout} alt="" />
              </i>
              <span className="text">Logout</span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container main-content" style={{ marginLeft: 125 }}>
        <Outlet />
      </div>
    </div>
  );
};

export default WrapperComp;
