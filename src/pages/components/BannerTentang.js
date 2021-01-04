import React, { useState } from "react";
import { Button } from "reactstrap";
// import "../assets/css/style.css";

const Banner = () => {
  return (
    <>
      <section
        id="home"
        className="d-flex align-items-center position-relative cover hero sizebanner"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/originals/c1/b6/50/c1b650128999c2edd898bd5516a1d5fa.jpg')",
        }}
      >
        <div className="container-fluid container-fluid-max">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12 col-xl-12 text-center">
              <h1 className="text-white">
                <strong>Tentang kami</strong>
              </h1>
              <h1 className="text-white">Desa Tirtomulyo</h1>
            </div>
          </div>
        </div>
      </section>
      {/* <h1>HALO</h1> */}
    </>
  );
};

export default Banner;
