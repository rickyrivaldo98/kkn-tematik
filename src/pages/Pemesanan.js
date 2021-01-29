import React from "react";
import { NavLink } from "react-router-dom";

import "./assets/css/pemesanan.css";
const Pemesanan = () => {
  return (
    <>
      <section
        className="bgpemesanan"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/originals/c1/b6/50/c1b650128999c2edd898bd5516a1d5fa.jpg')",
        }}
      >
        <div className="headerpemesanan">
          {/* <div className="paket"> */}
          <div className="container">
            <h1>
              <b>Paket Harga</b>
            </h1>
          </div>
          {/* </div> */}
          <div className="paket">
            <div className="container">
              <div className="listpaket">
                <div className="row">
                  <div className="col-12 col-lg-3 col-md-12">
                    <h2 className="judulpaket">
                      <b>PAKET BAGUS</b> <br /> <b>Rp. 120.000</b>
                    </h2>
                  </div>
                  <div className="col-12 col-lg-6 col-md-12">
                    <h2>
                      <b>Penjelasan</b>
                    </h2>
                    <p>
                      LoremIpsum lalalalalala LoremIpsum lalalalalala LoremIpsum
                      lalalalalala LoremIpsum lalalalalala LoremIpsum
                      lalalalalala LoremIpsum lalalalalala LoremIpsum
                      lalalalalala LoremIpsum lalalalalala LoremIpsum
                      lalalalalala LoremIpsum lalalalalala LoremIpsum
                      lalalalalala LoremIpsum lalalalalala LoremIpsum
                      lalalalalala LoremIpsum lalalalalala LoremIpsum
                      lalalalalala LoremIpsum lalalalalala LoremIpsum
                      lalalalalala
                    </p>
                    <h2>
                      <b>Benefit</b>
                    </h2>
                    <ul>
                      <li>Makan 3 kali sehari</li>
                      <li>Test</li>
                      <li>Test</li>
                      <li>Test</li>
                      <li>Test</li>
                      <li>Test</li>
                    </ul>
                  </div>
                  <div className="col-12 col-lg-3 col-md-12 btnwrapper">
                    <NavLink to="/checkout" className="btn-lg btn btn-light">
                      Pesan Sekarang
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="listpaket">
                <div className="row">
                  <div className="col-12 col-lg-3 col-md-12">
                    <h2 className="judulpaket">
                      <b>PAKET CERIA</b> <br /> <b>Rp. 120.000</b>
                    </h2>
                  </div>
                  <div className="col-12 col-lg-6 col-md-12">
                    <h2>
                      <b>Penjelasan</b>
                    </h2>
                    <p>
                      LoremIpsum lalalalalala LoremIpsum lalalalalala LoremIpsum
                      lalalalalala LoremIpsum lalalalalala LoremIpsum
                      lalalalalala LoremIpsum lalalalalala LoremIpsum
                      lalalalalala LoremIpsum lalalalalala LoremIpsum
                      lalalalalala LoremIpsum lalalalalala LoremIpsum
                      lalalalalala LoremIpsum lalalalalala LoremIpsum
                      lalalalalala LoremIpsum lalalalalala LoremIpsum
                      lalalalalala LoremIpsum lalalalalala LoremIpsum
                      lalalalalala
                    </p>
                    <h2>
                      <b>Benefit</b>
                    </h2>
                    <ul>
                      <li>Makan 3 kali sehari</li>
                      <li>Test</li>
                      <li>Test</li>
                      <li>Test</li>
                      <li>Test</li>
                      <li>Test</li>
                    </ul>
                  </div>
                  <div className="col-12 col-lg-3 col-md-12 btnwrapper">
                    <button className="btn-lg btn btn-light">
                      Pesan Sekarang
                    </button>
                  </div>
                </div>
              </div>
              <div className="listpaket">
                <div className="row">
                  <div className="col-12 col-lg-3 col-md-12">
                    <h2 className="judulpaket">
                      <b>PAKET A</b> <br /> <b>Rp. 120.000</b>
                    </h2>
                  </div>
                  <div className="col-12 col-lg-6 col-md-12">
                    <h2>
                      <b>Penjelasan</b>
                    </h2>
                    <p>
                      LoremIpsum lalalalalala LoremIpsum lalalalalala LoremIpsum
                      lalalalalala LoremIpsum lalalalalala LoremIpsum
                      lalalalalala LoremIpsum lalalalalala LoremIpsum
                      lalalalalala LoremIpsum lalalalalala LoremIpsum
                      lalalalalala LoremIpsum lalalalalala LoremIpsum
                      lalalalalala LoremIpsum lalalalalala LoremIpsum
                      lalalalalala LoremIpsum lalalalalala LoremIpsum
                      lalalalalala LoremIpsum lalalalalala LoremIpsum
                      lalalalalala
                    </p>
                    <h2>
                      <b>Benefit</b>
                    </h2>
                    <ul>
                      <li>Makan 3 kali sehari</li>
                      <li>Test</li>
                      <li>Test</li>
                      <li>Test</li>
                      <li>Test</li>
                      <li>Test</li>
                    </ul>
                  </div>
                  <div className="col-12 col-lg-3 col-md-12 btnwrapper">
                    <button className="btn-lg btn btn-light">
                      Pesan Sekarang
                    </button>
                  </div>
                </div>
              </div>

              <br />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pemesanan;
