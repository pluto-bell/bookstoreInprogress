import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CarouselSlides({ firstSlide, showSlide }) {
  return (
    <div className="feature-item--container">
      {showSlide.map((feature, index) => {
        return (
          <div
            id={`feature${index}`}
            className="feature-carousel--item"
            key={feature._id}
          >
            <Link to={`/books/${feature._id}`} key={feature._id}>
              <img className="book-img" src={`${feature.img}`} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
export default CarouselSlides;
