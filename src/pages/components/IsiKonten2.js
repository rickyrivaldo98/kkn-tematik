import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import test from "../assets/img/test.jpg";
import test2 from "../assets/img/test2.jpg";
const IsiKonten2 = () => {
  return (
    <>
      <div className="fakta">
        <h1>Fakta!</h1>
        <Carousel centered clickToChange slidesPerPage={2}>
          <div className="card" key="0">
            <h4>Fakta 1</h4>
          </div>
          <div className="card" key="1">
            <h4>Fakta 2</h4>
          </div>
          <div className="card" key="2">
            <h4>Fakta 3</h4>
          </div>
          {/* <img src={test} alt="" style={{ width: "70%", borderRadius: "20px" }} />
      <img src={test2} alt="" style={{ width: "70%", borderRadius: "20px" }} />
      <img src={test} alt="" style={{ width: "70%", borderRadius: "20px" }} /> */}
        </Carousel>
      </div>
      <div className="isi">
        <p>halo</p>
      </div>
    </>
  );
};

export default IsiKonten2;
