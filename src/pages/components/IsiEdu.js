import React from "react";
import EduWebBox from './EduWebBoxContent'

const IsiEdu = () => {
  return (
    <>
      <section className="container isiedu">
        <h5>
          <b>Berdasarkan Kategori Edukasi:</b>
        </h5>
        <div className="kategori">
          <button>Semua</button>
          <button>Tanaman Hias</button>
          <button>Ternak</button>
          <button>Tanaman Herbal</button>
        </div>
        <div className="cardkonten">
          <h1>Kumpulan Edukasi</h1>
          <hr />

          <EduWebBox></EduWebBox>
          
        </div>
      </section>
    </>
  );
};

export default IsiEdu;
