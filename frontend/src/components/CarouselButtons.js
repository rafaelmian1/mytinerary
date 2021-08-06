import React from "react";
const CarouselButtons = () => {
  return (
    <>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselToggler"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon filter-color"
          aria-hidden="true"
        ></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselToggler"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon filter-color"
          aria-hidden="true"
        ></span>
      </button>
    </>
  );
};

export default CarouselButtons;
