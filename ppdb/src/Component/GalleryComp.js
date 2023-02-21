import React from "react";
import placeholder from "../asset/placeholder.jpg";

const GalleryComp = () => {
  return (
    <div>
      <div className="container text-center">
         <h1 className="m-5">Gallery</h1>
        <div className="row m-5">
          <div className="col col-md-6 col-lg-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={placeholder} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text text-center">image</p>
              </div>
            </div>
          </div>
          <div className="col col-md-6 col-lg-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={placeholder} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text text-center">image</p>
              </div>
            </div>
          </div>
          <div className="col col-md-6 col-lg-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src={placeholder} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text text-center">image</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryComp;
