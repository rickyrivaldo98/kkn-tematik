import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import ornament1 from "../assets/img/ornament1.png";
import ornament2 from "../assets/img/ornament2.png";

import { parse } from "himalaya";
import { useEffect } from "react";
import { useState } from "react";

const IsiKonten2 = (props) => {
  const [funFact, setFF] = useState([]);

  useEffect(() => {
    if (props.content.fun_fact) {
      const json = parse(props.content.fun_fact);
      let parsed = json[0];
      let ff = [];
      // hacky stuff for parse text on html list to list object
      for (var i in parsed.children) {
        ff.push(parsed.children[i].children[0].content);
      }
      setFF(ff);
    }
  }, [props]);

  return (
    <>
      <div className="fakta">
        <h1 data-aos="fade-down">Fakta!</h1>
        <div data-aos="fade-down">
          <Carousel centered clickToChange slidesPerPage={2}>
            {funFact.map((value, index) => {
              return (
                <div className="card" key={index}>
                  <h4>{value}</h4>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
      <div
        className="tempatisi"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <div className="isi">
          <img className="ornament1" src={ornament1} alt="" />
          <img className="ornament2" src={ornament2} alt="" />

          <div>{ReactHtmlParser(props.content.content)}</div>
        </div>
      </div>
    </>
  );
};

export default IsiKonten2;
