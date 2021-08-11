import Image from "./Image";

const CarouselItem = ({ slideContent, index }) => {
  return (
    <div
      className={`carousel-item ${index === 0 && "active"}`}
      data-bs-interval="4000"
    >
      <div className="d-flex w-100 flex-column align-items-center">
        <div className="row w-75 flex-grow-1">
          {slideContent.map((image, index) => {
            return (
              <div className="col-12 col-lg-6 g-4" key={image.ciudad}>
                <Image image={image} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default CarouselItem;
