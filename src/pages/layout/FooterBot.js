import React, { useState, useEffect } from "react";

const FooterBot = () => {
  return (
    <>
      <footer className="py-5 page-footer">
        <div className="container-fluid container-fluid-max">
          <div className="row">
            <div className="col-12 col-md-6 footer-child copyright">
              Desa Tirtomulyo
            </div>
            <div className="col-12 col-md-6 footer-child footer-links">
              <a href="" className="mr-3">
                Instagram
              </a>
              <a href="">Email</a>
              <div>
                <small>Made with ❤️ by Saraf Design & <a href='https://id.linkedin.com/in/luqmansen'>luqmansen</a></small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterBot;
