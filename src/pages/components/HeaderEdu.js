import React from "react";
import "../assets/css/eduwisata.css";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const HeaderEdu = (props) => {
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
            {
                props.headerGallery.map((elem) => 
                <img src={elem.image} alt={elem.file_name}/>)
              }
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeaderEdu;
