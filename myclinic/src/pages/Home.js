import React from "react";
import Navbar from "../components/Navbar";
import MainCarousel from "../components/MainCarousel";
import Labels from "../components/Labels";

import OurDoctors from "../components/doctors/OurDoctors";

const Home = () => {
  return (
    <>
      <div className="">
        <div className="row">
          <div className="col-12 mx-auto">
            <Navbar />
          </div>
        </div>
        <div className="row">
          <div className="col-12 mx-auto carousel-background">
            <MainCarousel></MainCarousel>
          </div>
          <Labels />
        </div>
        <div className="row">
          <div className="col-10 mx-auto">
            <OurDoctors />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
