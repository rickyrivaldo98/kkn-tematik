import React, { useState } from "react";
import test from "../assets/img/test.jpg";
import test2 from "../assets/img/test2.jpg";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
const items = [
  {
    src: test,
  },
  {
    src: test2,
  },
  {
    src: test,
  },
];

const IsiKonten = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img
          style={{ width: "100%", borderRadius: "20px" }}
          src={item.src}
          alt={item.altText}
        />
      </CarouselItem>
    );
  });

  return (
    <>
      <div className="konten row">
        <h1 className="col-12 mt-3 mb-3 nama-konten">Nama Konten</h1>
        <div className="galeri col-12 mb-5">
          <h4>Galeri</h4>
          <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={next}
            />
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default IsiKonten;
