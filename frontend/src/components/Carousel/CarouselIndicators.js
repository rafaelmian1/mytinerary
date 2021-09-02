const CarouselIndicators = ({ number }) => {
  return (
    <div className="carousel-indicators d-none d-lg-flex" key="tuki">
      {[...Array(number)].map((nro, index) =>
        index === 0 ? (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselToggler"
            data-bs-slide-to={index}
            className="active"
            aria-current="true"
            aria-label={"Slide " + (index + 1)}
          ></button>
        ) : (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselToggler"
            data-bs-slide-to={index}
            aria-label={"Slide " + (index + 1)}
          ></button>
        )
      )}
    </div>
  );
};

export default CarouselIndicators;
