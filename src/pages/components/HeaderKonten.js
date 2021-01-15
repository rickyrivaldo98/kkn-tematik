import React, { useState } from "react";
import "../assets/css/konten.css";
import HeaderImage from "../assets/img/HeaderKonten.png";
import sound1 from "../assets/img/sound1.png";
import sound2 from "../assets/img/sound2.png";
import love1 from "../assets/img/love1.png";
import love2 from "../assets/img/love2.png";

const HeaderKonten = (props) => {
  const [soundOn, setSoundOn] = useState(false);
  const [loveOn, setLoveOn] = useState(false);

  const OnSound = () => {
    setSoundOn(!soundOn);
  };
  const OnLove = () => {
    setLoveOn(!loveOn);
  };

  return (
    <>
      <section className="d-flex cover-konten">
        <div className="row">
          <div className="side-menu">
            <div className="col-12">
              <img
                className="sound"
                onClick={OnSound}
                src={soundOn ? sound2 : sound1}
                alt=""
              />
            </div>
            <div className="col-12">
              <img
                className="love"
                onClick={OnLove}
                src={loveOn ? love2 : love1}
                alt=""
              />
              <p className="liked">
                <span style={{ color: "#34EA34" }}>201</span> Liked
              </p>
            </div>
          </div>
          <img className="konten-image" src={props.contentImage} alt="" />
          <img className="header-image" src={HeaderImage} alt="" />
        </div>
      </section>
    </>
  );
};

export default HeaderKonten;
