import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavComp from "./Component/NavComp";
import HomeComp from "./Component/HomeComp";
import ProfileComp from "./Component/ProfileComp";
import GalleryComp from "./Component/GalleryComp";
import PpdbComp from "./Component/PpdbComp";
import LoginComp from "./Component/LoginComp";
import Dashboard from "./Component/dashboard/Dashboard";
import { useState } from "react";

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  return (
    <Router>
      {showNavbar && <NavComp />}
      <Routes>
        <Route path="/" element={<HomeComp />} />
        <Route path="/profile" element={<ProfileComp />} />
        <Route path="/gallery" element={<GalleryComp />} />
        <Route path="/ppdb" element={<PpdbComp />} />
        <Route path="/login" element={<LoginComp />} />
        <Route
          path="/dashboard"
          element={<Dashboard />}
          onEnter={() => setShowNavbar(false)}
          onLeave={() => setShowNavbar(true)}
        />
      </Routes>
    </Router>
  );
}

export default App;
