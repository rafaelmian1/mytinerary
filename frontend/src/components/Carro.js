import React from "react";
import { useState } from "react";

export default class Carro extends React.Component {
  fotos = {
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

  render() {
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
            {this.fotos.slides.map((slide, index) => (
              <Slide data={slide} index={index} key={index} />
            ))}
          </div>
          <CarouselButtons />
        </div>
      </div>
    );
  }
}

const Slide = ({ data, index }) => {
  return (
    <div
      className={`carousel-item ${index === 0 && "active"}`}
      data-bs-interval="4000"
    >
      <div className="d-flex w-100 flex-column align-items-center">
        <div className="row w-75 flex-grow-1">
          {data.map((foto) => {
            return (
              <div className="col-12 col-lg-6 g-4" key={foto.ciudad}>
                <Foto foto={foto} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Foto = ({ foto }) => {
  const [pepe, setPepe] = useState(0);
  const mouseHandler = (e) => {
    setPepe(pepe === 3 ? 0 : pepe + 1);
    e.target.backgroundImage = `url(${foto.img[pepe]}`;
  };

  return (
    <div
      className="d-flex align-items-end text-light justify-content-center fotito"
      id={foto.ciudad}
      onMouseEnter={mouseHandler}
      onClick={mouseHandler}
      style={{
        backgroundImage: `url(${foto.img[pepe]})`,
      }}
    >
      <div className="descripcion d-flex align-items-center">
        <h5 className="mx-3">{foto.ciudad}</h5>
      </div>
    </div>
  );
};

const CarouselIndicators = () => {
  return (
    <div className="carousel-indicators d-none d-lg-flex" key="tuki">
      <button
        type="button"
        data-bs-target="#carouselToggler"
        data-bs-slide-to="0"
        className="active color"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselToggler"
        data-bs-slide-to="1"
        aria-label="Slide 2"
        className="color"
      ></button>
      <button
        className="color"
        type="button"
        data-bs-target="#carouselToggler"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
  );
};

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
