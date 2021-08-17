const CarouselItem = ({ children, index }) => {
  return (
    <div
      className={`carousel-item ${index === 0 && "active"}`}
      data-bs-interval="4000"
    >
      <div className="d-flex w-100 flex-column align-items-center">
        <div className="row w-75 flex-grow-1">{children}</div>
      </div>
    </div>
  );
};

export default CarouselItem;
