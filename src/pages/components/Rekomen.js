import React, { useState, useEffect } from "react";

const Rekomen = () => {
  return (
    <>
      <section
        id="featured-destinations"
        className="featured-destinations bg-lightblue"
      >
        <div className="row no-gutters">
          <div className="col-12 col-md-6 d-flex align-items-center order-1 order-md-0">
            <div className="p-15">
              <h3>Explore Gunung A</h3>
              <p>
                <strong>YAEYAMA ISLANDS, OKINAWA</strong> When most people think
                “beach holidays” and “Asia,” Japan is not the first place that
                comes to mind. Yet Japan is home to one of Asia’s loveliest
                subtropical destinations, the beautiful Yaeyama Islands of
                Okinawa.
              </p>
              <p>
                The whole Okinawan archipelago is full of gorgeous little
                islands, but for one of the most unique experiences Japan has to
                offer, the remote Yaeyama Islands have no equal. Geographically
                closer to Taiwan and mainland Asia than to mainland Japan, the
                Yaeyama Islands feature not only picturesque beaches and nature
                (including jungles), but a rich Ryukyu heritage and culture.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 order-0 order-md-1">
            <div
              className="vh-100 cover"
              style={{
                backgroundImage:
                  "url('https://anekatempatwisata.com/wp-content/uploads/2015/07/Gunung-Bromo-Jawa-Timur.jpg')",
              }}
            ></div>
          </div>
          <div className="col-12 col-md-6 order-2">
            <div
              className="vh-100 cover"
              style={{
                backgroundImage:
                  "url('https://cdn-image.hipwee.com/wp-content/uploads/2016/04/hipwee-pemandangan-alam-terindah-di-indonesia.jpg')",
              }}
            ></div>
          </div>
          <div className="col-12 col-md-6 d-flex align-items-center order-3">
            <div className="p-15">
              <h3>Explore Sawah A</h3>
              <p>
                <strong>KANAZAWA</strong> Kanazawa is a historical gem of a
                city, thanks in great part to having been spared during World
                War II. The main reason visitors flock to Kanazawa is Kenrokuen
                Garden, considered one of Japan’s Three Great Gardens. Along
                with its garden, the city is renowned for its impeccably
                preserved geisha and samurai historical districts, traditional
                crafts, and its wonderful cuisine —
              </p>
              <p>
                including some of Japan’s best-quality seafood and sake. Other
                Kanazawa highlights include the D.T. Suzuki Museum of Buddhist
                philosophy, the bustling Omicho Market, the 21st Century Museum
                of Contemporary Art, and Myoryu-ji (the Ninja Temple).
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rekomen;
