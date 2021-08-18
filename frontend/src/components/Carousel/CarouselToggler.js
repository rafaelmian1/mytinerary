const CarouselToggler = ({ children }) => {
  return (
    <div
      id="carouselToggler"
      className="carousel slide text-center"
      data-bs-ride="carousel"
    >
      <h2 className="pop">Popular MyTineraries</h2>
      {children}
    </div>
  );
};
export default CarouselToggler;
