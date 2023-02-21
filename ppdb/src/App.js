import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NavComp from "./Component/NavComp";
import HomeComp from "./Component/HomeComp";
import ProfileComp from "./Component/ProfileComp";
import GalleryComp from "./Component/GalleryComp";
import PpdbComp from "./Component/PpdbComp";
import LoginComp from "./Component/LoginComp";
import RegisterComp from "./Component/RegisterComp";
import WrapperComp from "./Component/WrapperComp";
import Dashboard from "./Component/dashboard/Dashboard";
import { useState, useEffect } from "react";

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // cek apakah terdapat token pada localStorage
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      {showNavbar && <NavComp />}
      <Routes>
        <Route path="/" element={<HomeComp />} />
        <Route path="/profile" element={<ProfileComp />} />
        <Route path="/gallery" element={<GalleryComp />} />
        <Route path="/ppdb" element={<PpdbComp />} />
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" />
            ) : (
              <LoginComp setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />
        <Route path="/register" element={<RegisterComp />} />
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <WrapperComp setIsAuthenticated={setIsAuthenticated} />
            ) : (
              <Navigate to="/login" state={{ from: "/dashboard" }} replace />
            )
          }
          onEnter={() => setShowNavbar(false)}
          onLeave={() => setShowNavbar(true)}
        >
          <Route index element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
