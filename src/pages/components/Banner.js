import React, { useState } from "react";
import { Button } from "reactstrap";
// import "../assets/css/style.css";

const Banner = () => {
  return (
    <>
      <section
        id="home"
        className="d-flex align-items-center position-relative vh-100 cover hero"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/originals/c1/b6/50/c1b650128999c2edd898bd5516a1d5fa.jpg')",
        }}
      >
        <div className="container-fluid container-fluid-max">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-6 col-xl-6">
              <h1 className="text-white">
                <strong>Selamat Datang Ke Desa Tirtomulyo</strong>{" "}
              </h1>
              <h1 className="text-white">Desa Wisata Penuh Keindahan</h1>
              <div className="mt-3">
                <button href="" className="btn bg-red text-black mr-2">
                  Cek Destinasi
                </button>
                <button href="" className="btn bg-red text-black mr-2">
                  Scan QR Code
                </button>
                <a href=""></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <h1>HALO</h1> */}
    </>
  );
};

export default Banner;
