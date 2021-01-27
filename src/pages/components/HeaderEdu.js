import React from "react";
import "../assets/css/eduwisata.css";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const HeaderEdu = (props) => {

    return (
      <>
        <section className="position-relative headeredu">
          <h1 className="col-12 col-lg-12 col-md-12">Ada yang baru nih!</h1>
          <div className="imgheaderedu">
            <Carousel arrows infinite>
              {
                props.headerGallery.map((elem) => 
                <img src={elem.image} alt={elem.file_name}/>)
              }
            </Carousel>
          </div>
        </section>
      </>
    );
};

export default HeaderEdu;
