import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import test from "../assets/img/test.jpg";
import { NavLink } from "react-router-dom";

const BarangDepan = () => {
  return (
    <>
      <div className=" text-center py-5">
        <h2>Barang Barang Produk Desa</h2>
        <div className="carouselbarang">
          <Carousel
            arrows
            fastSwipe
            slidesPerPage={3}
            breakpoints={{
              640: {
                slidesPerPage: 2,
                arrows: true,
              },
            }}
          >
            <article id="box-article2" className="">
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
            <article id="box-article2" className="">
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
          </Carousel>
          <br />
          <br />
          <NavLink to="/barang" className="btn-lg btn btn-light">
            Lihat Barang Lainnya
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default BarangDepan;
