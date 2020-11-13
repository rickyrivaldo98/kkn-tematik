import React, { useState, useEffect } from "react";

const Galeri = () => {
  return (
    <>
      {/* <section className="pricing py-5">
        <div className="container">
          <h1>Test</h1>
        </div>
      </section> */}
      <section id="popular-destinations" className="popular-destinations py-5">
        <div className="container-fluid container-fluid-max">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center pb-3 text-white">Galeri</h2>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <a href="" className="text-white">
                <figure className="position-relative overflow-hidden">
                  <img
                    className="img-fluid"
                    src="https://dwgfmnrdprofc.cloudfront.net/wp-content/uploads/2017/11/planning-a-trip-to-japan-1100x733.jpg"
                    alt=""
                  />
                  <figcaption className="d-flex align-items-center justify-content-center position-absolute">
                    <h3>Tempat A</h3>
                  </figcaption>
                </figure>
              </a>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <a href="" className="text-white">
                <figure className="position-relative overflow-hidden">
                  <img
                    className="img-fluid"
                    src="https://dwgfmnrdprofc.cloudfront.net/wp-content/uploads/2017/11/sensoji-tokyo-sky-tree-1100x825.jpg"
                    alt=""
                  />
                  <figcaption className="d-flex align-items-center justify-content-center position-absolute">
                    <h3>Tempat E</h3>
                  </figcaption>
                </figure>
              </a>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <a href="" className="text-white">
                <figure className="position-relative overflow-hidden">
                  <img
                    className="img-fluid"
                    src="https://dwgfmnrdprofc.cloudfront.net/wp-content/uploads/2017/11/takayama-street-1100x825.jpg"
                    alt=""
                  />
                  <figcaption className="d-flex align-items-center justify-content-center position-absolute">
                    <h3>Tempat B</h3>
                  </figcaption>
                </figure>
              </a>
            </div>
            <div className="col-12 col-sm-6">
              <a href="" className="text-white">
                <figure className="position-relative overflow-hidden">
                  <img
                    className="img-fluid"
                    src="https://dwgfmnrdprofc.cloudfront.net/wp-content/uploads/2017/10/fuji-hakone-1100x825.jpg"
                    alt=""
                  />
                  <figcaption className="d-flex align-items-center justify-content-center position-absolute">
                    <h3>Tempat C</h3>
                  </figcaption>
                </figure>
              </a>
            </div>
            <div className="col-12 col-md-6">
              <a href="" className="text-white">
                <figure className="position-relative overflow-hidden">
                  <img
                    className="img-fluid"
                    src="https://dwgfmnrdprofc.cloudfront.net/wp-content/uploads/2017/11/toshugu-nikko-japan-1100x825.jpg"
                    alt=""
                  />
                  <figcaption className="d-flex align-items-center justify-content-center position-absolute">
                    <h3>Tempat D</h3>
                  </figcaption>
                </figure>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              <button className="btn bg-red text-black">
                Lihat Selanjutnya
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Galeri;
