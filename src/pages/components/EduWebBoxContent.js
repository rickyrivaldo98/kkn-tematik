import React from "react";
import "../assets/css/eduwisata.css";
import "@brainhubeu/react-carousel/lib/style.css";


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
                    <img src={props.content.header_image} />
                  </div>
                </div>
                <div className="article-details">
                  <h2>{props.content.title}</h2>
                  <div className="article-cta">
                    <a href={'content/' + props.content.slug} id="" className="btn btn-primary tombol">
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
