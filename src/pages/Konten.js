import React, { useState } from "react";
import HeaderKonten from "./components/HeaderKonten";
import IsiKonten from "./components/IsiKonten";

const Konten = () => {
  return (
    <>
      <div style={{ backgroundColor: "#56228B" }}>
        <HeaderKonten />
        <IsiKonten />
      </div>
    </>
  );
};

export default Konten;
