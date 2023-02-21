import React from "react";
import FooterComp from "./FooterComp";
import GalleryComp from "./GalleryComp";
import ProfileComp from "./ProfileComp";

const HomeComp = () => {
  return (
    <div>
      <div className="p-5 bg-primary text-white">
        <h1>Jumbotron Example</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..
        </p>
      </div>
      <ProfileComp />
      <GalleryComp />
      <FooterComp />
    </div>
  );
};

export default HomeComp;
