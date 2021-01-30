import React from "react";
import test from "./assets/img/test.jpg";

const Barang = () => {
  return (
    <>
      <section
        className="bgpemesanan text-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/originals/c1/b6/50/c1b650128999c2edd898bd5516a1d5fa.jpg')",
        }}
      >
        <div className="headerpemesanan">
          <h1>
            <b>Barang Produk Desa</b>
          </h1>
          <div className="list-barang row">
            <div className="col-12 col-lg-4 col-md-6">
              <article id="box-article2">
                <div className="article-header">
                  <div className="article-image">
                    <img src={test} />
                  </div>
                </div>
                <div className="article-details">
                  <h4>Kokedama</h4>
                  <div className="article-cta">
                    <a href="" id="" className="btn btn-shopee tombol">
                      Beli di Shopee
                    </a>
                    <a href="" id="" className="btn btn-light tombol">
                      Beli di Tokopedia
                    </a>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-12 col-lg-4 col-md-6">
              <article id="box-article2">
                <div className="article-header">
                  <div className="article-image">
                    <img src={test} />
                  </div>
                </div>
                <div className="article-details">
                  <h4>Kokedama</h4>
                  <div className="article-cta">
                    <a href="" id="" className="btn btn-shopee tombol">
                      Beli di Shopee
                    </a>
                    <a href="" id="" className="btn btn-light tombol">
                      Beli di Tokopedia
                    </a>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-12 col-lg-4 col-md-6">
              <article id="box-article2">
                <div className="article-header">
                  <div className="article-image">
                    <img src={test} />
                  </div>
                </div>
                <div className="article-details">
                  <h4>Kokedama</h4>
                  <div className="article-cta">
                    <a href="" id="" className="btn btn-shopee tombol">
                      Beli di Shopee
                    </a>
                    <a href="" id="" className="btn btn-light tombol">
                      Beli di Tokopedia
                    </a>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-12 col-lg-4 col-md-6">
              <article id="box-article2">
                <div className="article-header">
                  <div className="article-image">
                    <img src={test} />
                  </div>
                </div>
                <div className="article-details">
                  <h4>Kokedama</h4>
                  <div className="article-cta">
                    <a href="" id="" className="btn btn-shopee tombol">
                      Beli di Shopee
                    </a>
                    <a href="" id="" className="btn btn-light tombol">
                      Beli di Tokopedia
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

export default Barang;
