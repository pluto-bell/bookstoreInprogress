import React from "react";

function CarouselDots(props) {
  const initialClassNames =
    props.id == 0 ? "is-selected dot" : "feature-dot dot";

  return (
    <button
      id={props.id}
      className={initialClassNames}
      onClick={() => props.toggleSlides(props.id)}
    ></button>
  );
}

export default CarouselDots;
