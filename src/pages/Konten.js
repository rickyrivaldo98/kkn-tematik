import React, { useState } from "react";
import HeaderKonten from "./components/HeaderKonten";
import IsiKonten from "./components/IsiKonten";
import IsiKonten2 from "./components/IsiKonten2";

const Konten = () => {
  return (
    <>
      <div style={{ backgroundColor: "#56228B" }}>
        {/* <div style={{ backgroundColor: "#fafdfb" }}> */}
        <HeaderKonten />
        <IsiKonten />
        <IsiKonten2 />
        <br />
        <br />
      </div>
    </>
  );
};

export default Konten;
