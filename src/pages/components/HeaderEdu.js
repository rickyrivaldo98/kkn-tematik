import React from "react";
import "../assets/css/eduwisata.css";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import test from "../assets/img/test.jpg";
import test2 from "../assets/img/test2.jpg";

const HeaderEdu = () => {
  return (
    <>
      <section
        className="position-relative headeredu"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/originals/c1/b6/50/c1b650128999c2edd898bd5516a1d5fa.jpg')",
        }}
      >
        <div className="container-fluid headerisiedu">
          <h1 className="col-12 col-lg-12 col-md-12">Ada yang baru nih!</h1>
          <div className="imgheaderedu">
            <Carousel arrows infinite>
              <img src={test} />
              <img src={test2} />
              <img src={test} />
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeaderEdu;
