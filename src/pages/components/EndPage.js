import React, { useState, useEffect } from "react";

const EndPage = () => {
  return (
    <>
      <section id="request-quote" className="py-5 request-quote bg-lightblue">
        <div className="container-fluid container-fluid-max">
          <div className="row justify-content-center">
            <div className="col-12 col-md-auto py-3 text-center">
              <h2 className="mb-0 text-red">
                <strong>Sudah siap untuk berpetualang?</strong>
              </h2>
              <p className="mb-0 h4 text-red font-weight-normal">
                Segera hubungi kami!
              </p>
            </div>
            <div className="col-12 col-md-auto d-flex justify-content-center align-items-center">
              <button
                className="btn bg-danger text-white font-weight-bold"
                href=""
              >
                Klik Disini
                <i className="ml-1 fas fa-hand-point-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EndPage;
