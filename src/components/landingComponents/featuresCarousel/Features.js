import React, { useState, useEffect } from "react";

//Children Components
import CarouselSlides from "./CarouselSlides";
import CarouselDots from "./CarouselDots";

function Features({ features, slides, currentSlide }) {
  const [changeSlide, setChangeSlide] = useState([]);

  //TODO: figure out simple solution with useState
  const toggleSlides = (id, selected) => {
    slides.map((slide, index) => {
      if (id === index) {
        setChangeSlide(slide);

        //Dot Styling
        Array.from(document.getElementsByClassName("dot")).map((dot) => {
          if (dot.id == index) {
            dot.classList.add("is-selected");
            dot.classList.remove("feature-dot");
          } else {
            dot.classList.remove("is-selected");
            dot.classList.add("feature-dot");
          }
        });
      }
    });
  };

  return (
    <div className="feature-carousel--container">
      <h5>Features (currently needs to be clicked to show)</h5>
      <div className="feature-dot--container">
        {slides.map((slide, index) => (
          <CarouselDots key={index} id={index} toggleSlides={toggleSlides} />
        ))}
      </div>
      <div className="feature--container">
        <CarouselSlides firstSlide={slides[0]} showSlide={changeSlide} />
      </div>
    </div>
  );
}

export default Features;
