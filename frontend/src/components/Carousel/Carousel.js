import React from "react";
import CarouselButtons from "./CarouselButtons";
import CarouselIndicators from "./CarouselIndicators";
import CarouselItem from "./CarouselItem";

const Carousel = () => {
  const fotos = {
    slides: [
      [
        {
          ciudad: "Madrid",
          img: [
            "./assets/slides/madrid1.jpg",
            "./assets/slides/madrid2.jpg",
            "./assets/slides/madrid3.jpg",
            "./assets/slides/madrid4.jpg",
          ],
        },
        {
          ciudad: "Paris",
          img: [
            "./assets/slides/paris1.jpg",
            "./assets/slides/paris2.jpg",
            "./assets/slides/paris3.jpg",
            "./assets/slides/paris4.jpg",
          ],
        },
        {
          ciudad: "Venice",
          img: [
            "./assets/slides/venice1.jpg",
            "./assets/slides/venice2.jpg",
            "./assets/slides/venice3.jpg",
            "./assets/slides/venice4.jpg",
          ],
        },
        {
          ciudad: "London",
          img: [
            "./assets/slides/london1.jpg",
            "./assets/slides/london2.jpeg",
            "./assets/slides/london3.jpg",
            "./assets/slides/london4.jpg",
          ],
        },
      ],
      [
        {
          ciudad: "Buenos Aires",
          img: [
            "./assets/slides/baires1.jpg",
            "./assets/slides/baires2.png",
            "./assets/slides/baires3.jpg",
            "./assets/slides/baires4.jpg",
          ],
        },
        {
          ciudad: "Rio de Janeiro",
          img: [
            "./assets/slides/rio1.png",
            "./assets/slides/rio2.jpg",
            "./assets/slides/rio3.png",
            "./assets/slides/rio4.jpg",
          ],
        },
        {
          ciudad: "Punta del Este",
          img: [
            "./assets/slides/punta1.jpg",
            "./assets/slides/punta2.jpg",
            "./assets/slides/punta3.jpg",
            "./assets/slides/punta4.jpg",
          ],
        },
        {
          ciudad: "Cartagena de Indias",
          img: [
            "./assets/slides/carta1.jpg",
            "./assets/slides/carta2.jfif",
            "./assets/slides/carta3.jpg",
            "./assets/slides/carta4.jpg",
          ],
        },
      ],
      [
        {
          ciudad: "Berlin",
          img: [
            "./assets/slides/berlin1.jpg",
            "./assets/slides/berlin2.jpg",
            "./assets/slides/berlin3.jpg",
            "./assets/slides/berlin4.jpg",
          ],
        },
        {
          ciudad: "Atenas",
          img: [
            "./assets/slides/atenas1.jpg",
            "./assets/slides/atenas2.jpg",
            "./assets/slides/atenas3.jpg",
            "./assets/slides/atenas4.jpg",
          ],
        },
        {
          ciudad: "Fujiyama Honshu",
          img: [
            "./assets/slides/fuji1.jpg",
            "./assets/slides/fuji2.jpg",
            "./assets/slides/fuji3.jpg",
            "./assets/slides/fuji4.jpg",
          ],
        },
        {
          ciudad: "Hong Kong",
          img: [
            "./assets/slides/hongkong1.jpg",
            "./assets/slides/hongkong2.jpg",
            "./assets/slides/hongkong3.jpg",
            "./assets/slides/hongkong4.jpg",
          ],
        },
      ],
    ],
  };

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
        <h3 className="my-2 over">Popular myTineraries</h3>
        <CarouselIndicators />
        <div className="carousel-inner flex-grow-1" key="2">
          {fotos.slides.map((slide, index) => (
            <CarouselItem slideContent={slide} index={index} key={index} />
          ))}
        </div>
        <CarouselButtons />
      </div>
    </div>
  );
};

export default Carousel;
