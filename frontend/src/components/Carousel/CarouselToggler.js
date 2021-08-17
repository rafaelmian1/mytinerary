const CarouselToggler = ({ children }) => {
  return (
    <div
      id="car"
      className="carouselsinho d-flex flex-column align-items-center justify-content-center"
    >
      <div
        className="container-fluid min-vh-100 car"
        style={{
          backgroundImage: 'url("./assets/fondo.jpg")',
        }}
      ></div>
      <div
        id="carouselToggler"
        className="carousel slide d-flex flex-column justify-content-center align-items-center vh90"
        data-bs-ride="carousel"
      >
        <h3 className="over">Popular myTineraries</h3>
        {children}
      </div>
    </div>
  );
};
export default CarouselToggler;
