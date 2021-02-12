import React, { useState } from "react";
import { Carousel, CarouselItem, CarouselControl } from "reactstrap";
import ornament3 from "../assets/img/ornament3.png";
const IsiKonten = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const items = [
    {
      src: props.content.gallery_image_1,
    },
    {
      src: props.content.gallery_image_2,
    },
    {
      src: props.content.gallery_image_3,
    },
  ];

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
        <img className="ornament3" src={ornament3} />
        <h1 className="col-12 mt-3 mb-3 nama-konten">{props.content.title}</h1>
        <div className="galeri col-12 mb-5">
          <h4 data-aos="fade-up">Galeri</h4>
          <div data-aos="fade-up">
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
      </div>
    </>
  );
};

export default IsiKonten;
