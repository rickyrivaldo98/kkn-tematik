import React from "react";
import "../assets/css/eduwisata.css";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import test from "../assets/img/test.jpg";


const EduWebBox = (props) => {

    return (
        <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 article">
              <article
                data-aos="fade-up"
                data-aos-easing="ease"
                id="box-article"
                className=""
              >
                <div className="article-header">
                  <div className="article-image">
                    <img src={test} />
                  </div>
                </div>
                <div className="article-details">
                  <h2>Judul Konten</h2>
                  <div className="article-cta">
                    <a href="" id="" className="btn btn-primary tombol">
                      Baca Selanjutnya
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>

    );
};

export default EduWebBox;
