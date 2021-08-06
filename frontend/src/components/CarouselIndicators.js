const CarouselIndicators = () => {
  return (
    <div className="carousel-indicators d-none d-lg-flex" key="tuki">
      <button
        type="button"
        data-bs-target="#carouselToggler"
        data-bs-slide-to="0"
        className="active filter-color"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselToggler"
        data-bs-slide-to="1"
        aria-label="Slide 2"
        className="filter-color"
      ></button>
      <button
        className="filter-color"
        type="button"
        data-bs-target="#carouselToggler"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
  );
};

export default CarouselIndicators;
