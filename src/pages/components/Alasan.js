import React, { useState } from "react";
import { Button } from "reactstrap";

const Alasan = () => {
  return (
    <>
      <section id="process" className="process">
        <div className="container-fluid container-fluid-max">
          <div className="row text-center py-5">
            <div className="col-12 pb-4">
              <h2 className="text-red">Mengapa Harus Ke Desa Tirtomulyo?</h2>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <span className="fa-stack fa-2x">
                <i className="fas fa-circle fa-stack-2x text-red"></i>
                <i className="fas fa-map-marked fa-stack-1x text-white"></i>
              </span>
              <h3 className="mt-3 text-red h4">Fasilitas No.1</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                repudiandae.
              </p>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <span className="fa-stack fa-2x">
                <i className="fas fa-circle fa-stack-2x text-red"></i>
                <i className="fas fa-map-marked fa-stack-1x text-white"></i>
              </span>
              <h3 className="mt-3 text-red h4">Operator Resmi</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                repudiandae.
              </p>
            </div>
            <div className="col-12 col-sm-12 col-lg-4">
              <span className="fa-stack fa-2x">
                <i className="fas fa-circle fa-stack-2x text-red"></i>
                <i className="fas fa-map-marked fa-stack-1x text-white"></i>
              </span>
              <h3 className="mt-3 text-red h4">Layanan Prima</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                repudiandae.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Alasan;
