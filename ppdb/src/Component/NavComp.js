import React from "react";
import { Link } from "react-router-dom";
import logo from "../asset/icon.ico";


const NavComp = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            Name
          </Link>
          <div className="justify-content-end">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    Profile
                  </Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link" to="/gallery">
                    Gallery
                  </Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link" to="/ppdb">
                    PPDB
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    <img src={logo} alt="..."></img>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavComp;
