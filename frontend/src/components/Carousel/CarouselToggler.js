const CarouselToggler = ({ children, classList, title, id }) => {
  return (
    <div
      id={id}
      className={"carousel slide carousel-dark " + classList}
      data-bs-ride="carousel"
    >
      {title && <h2 className="pop">{title}</h2>}
      {children}
    </div>
  );
};
export default CarouselToggler;
