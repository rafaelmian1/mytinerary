const CarouselButtons = () => {
  return (
    <>
      <button
        className="carousel-control-prev color d-none d-md-flex"
        type="button"
        data-bs-target="#carouselToggler"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button
        className="carousel-control-next color d-none d-md-flex"
        type="button"
        data-bs-target="#carouselToggler"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </>
  );
};

export default CarouselButtons;
