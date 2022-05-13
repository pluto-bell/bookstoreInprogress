import React, { useState, useEffect } from "react";
import About from "./landingComponents/About";
import Features from "./landingComponents/featuresCarousel/Features";
import Catalog from "./landingComponents/Catalog";
import catchWindowSize from "../utils/functions/windowResizeFunction";
import "../_Sass/App.scss";

//TODO: props send down WindowSize

function LandingPage({
  header,
  features,
  slides,
  currentSlide,
  books,
  footer,
}) {
  const [windowSize, setWindowsize] = useState(window.outerWidth);

  useEffect(() => {
    catchWindowSize(setWindowsize);
  }, [windowSize]);

  return (
    <main className="main-container">
      {header}

      <section className="main-about">
        <About />
      </section>
      <section className="main-featured">
        <Features
          features={features}
          slides={slides}
          currentSlide={currentSlide}
        />
      </section>
      <section
        className={
          windowSize <= `768`
            ? "main-catalog--container-mobile main-catalog--container"
            : "main-catalog--container-desktop main-catalog--container"
        }
      >
        <Catalog books={books} />
      </section>
      {footer}
    </main>
  );
}
export default LandingPage;
