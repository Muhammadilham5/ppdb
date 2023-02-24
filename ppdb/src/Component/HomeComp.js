import React from "react";
import FooterComp from "./FooterComp";
import GalleryComp from "./GalleryComp";
import ProfileComp from "./ProfileComp";
import header from "./../asset/tk.jpg";

const HomeComp = () => {
  return (
    <div>
      <div className=" bg-primary text-white">
        <img src={header} alt="..." style={{width :"100%",height:500}}></img>
      </div>
      <ProfileComp />
      <GalleryComp />
      <FooterComp />
    </div>
  );
};

export default HomeComp;
