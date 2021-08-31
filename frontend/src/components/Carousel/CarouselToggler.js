const CarouselToggler = ({ children, classList, title }) => {
  return (
    <div
      id="carouselToggler"
      className={"carousel slide " + classList}
      data-bs-ride="carousel"
    >
      {title && <h2 className="pop">{title}</h2>}
      {children}
    </div>
  );
};
export default CarouselToggler;
