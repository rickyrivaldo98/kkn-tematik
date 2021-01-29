import React from "react";
import test from "../assets/img/test.jpg";

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
                  <h4>Judul Konten blblblblblblblblblblblblbl</h4>
                  <div className="article-cta">
                    <a href="" id="" className="btn btn-light tombol">
                      Baca Selanjutnya
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IsiEdu;
