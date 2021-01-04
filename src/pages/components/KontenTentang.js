import React, { useState } from "react";
import { Button } from "reactstrap";
// import "../assets/css/style.css";

const KontenTentang = () => {
  return (
    <>
      <section>
        <div className="container pt-5">
          <div className="row ">
            <div className="col-12 col-lg-4 col-xl-4 col-md-12 col-sm-12">
              <img
                className="rounded mx-auto d-block"
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
            <div className="col-12 col-lg-8 col-xl-8 col-md-12 col-sm-12">
              <h1>Judul</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                ullamcorper luctus magna eu placerat. Vestibulum nisi dolor,
                dapibus vel auctor ac, vestibulum ut odio. Morbi at lorem arcu.
                Cras in justo nec quam aliquam suscipit. Vivamus nunc leo, porta
                eget rutrum quis, molestie ut lectus. Duis dignissim tincidunt
                felis, eget vestibulum nulla egestas in. Curabitur eget iaculis
                nisl. Ut consectetur vehicula urna ac placerat. Donec dictum sem
                eget sodales eleifend. Suspendisse non est sem. Integer dapibus
                a tortor eget eleifend. Vestibulum odio erat, vehicula at risus
                in, venenatis interdum massa.
              </p>
              <p>
                Donec neque magna, commodo id euismod dapibus, tempor non lacus.
                Pellentesque scelerisque purus non finibus sodales. Sed in
                pharetra tortor, luctus molestie lectus. Aliquam sit amet mauris
                pretium arcu aliquet interdum interdum non lectus. Pellentesque
                sit amet viverra libero, eget pulvinar sapien. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Morbi a felis rhoncus nisl rutrum ornare. Sed
                dapibus nisl ac quam semper porta.
              </p>
            </div>
            <div className="col-12 col-lg-12 col-xl-12 col-md-12 col-sm-12">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                ullamcorper luctus magna eu placerat. Vestibulum nisi dolor,
                dapibus vel auctor ac, vestibulum ut odio. Morbi at lorem arcu.
                Cras in justo nec quam aliquam suscipit. Vivamus nunc leo, porta
                eget rutrum quis, molestie ut lectus. Duis dignissim tincidunt
                felis, eget vestibulum nulla egestas in. Curabitur eget iaculis
                nisl. Ut consectetur vehicula urna ac placerat. Donec dictum sem
                eget sodales eleifend. Suspendisse non est sem. Integer dapibus
                a tortor eget eleifend. Vestibulum odio erat, vehicula at risus
                in, venenatis interdum massa.
              </p>
              <p>
                Donec neque magna, commodo id euismod dapibus, tempor non lacus.
                Pellentesque scelerisque purus non finibus sodales. Sed in
                pharetra tortor, luctus molestie lectus. Aliquam sit amet mauris
                pretium arcu aliquet interdum interdum non lectus. Pellentesque
                sit amet viverra libero, eget pulvinar sapien. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Morbi a felis rhoncus nisl rutrum ornare. Sed
                dapibus nisl ac quam semper porta.
              </p>
            </div>
            <div className="col-12 col-lg-8 col-xl-8 col-md-12 col-sm-12">
              <h1>Judul</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                ullamcorper luctus magna eu placerat. Vestibulum nisi dolor,
                dapibus vel auctor ac, vestibulum ut odio. Morbi at lorem arcu.
                Cras in justo nec quam aliquam suscipit. Vivamus nunc leo, porta
                eget rutrum quis, molestie ut lectus. Duis dignissim tincidunt
                felis, eget vestibulum nulla egestas in. Curabitur eget iaculis
                nisl. Ut consectetur vehicula urna ac placerat. Donec dictum sem
                eget sodales eleifend. Suspendisse non est sem. Integer dapibus
                a tortor eget eleifend. Vestibulum odio erat, vehicula at risus
                in, venenatis interdum massa.
              </p>
              <p>
                Donec neque magna, commodo id euismod dapibus, tempor non lacus.
                Pellentesque scelerisque purus non finibus sodales. Sed in
                pharetra tortor, luctus molestie lectus. Aliquam sit amet mauris
                pretium arcu aliquet interdum interdum non lectus. Pellentesque
                sit amet viverra libero, eget pulvinar sapien. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Morbi a felis rhoncus nisl rutrum ornare. Sed
                dapibus nisl ac quam semper porta.
              </p>
            </div>
            <div className="col-12 col-lg-4 col-xl-4 col-md-12 col-sm-12">
              <img
                className="rounded mx-auto d-block"
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* <h1>HALO</h1> */}
    </>
  );
};

export default KontenTentang;
