import React, { useState } from "react";
// import { Container, Input, Label, FormGroup, Button, Form } from "reactstrap";
import Banner from "./components/Banner";
import Alasan from "./components/Alasan";
import Paket from "./components/Paket";
import Rekomen from "./components/Rekomen";
import Galeri from "./components/Galeri";
import Komentar from "./components/Komentar";
import EndPage from "./components/EndPage";

// import "./assets/css/style.css";
const LandingPage = () => {
  return (
    <>
      <div>
        <Banner />
        <Alasan />
        <Paket />
        <Rekomen />
        <Galeri />
        <Komentar />
        <EndPage />
        {/* <h1>Halo</h1> */}
      </div>
    </>
  );
};

export default LandingPage;
