import React from "react";

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
                <div
                  className="d-flex align-items-end text-light justify-content-center fotito"
                  style={{
                    backgroundImage: `url(${foto.img})`,
                  }}
                >
                  <div className="descripcion d-flex align-items-center">
                    <h5 className="mx-3">{foto.ciudad}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
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
        className="carousel-control-prev color"
        type="button"
        data-bs-target="#carouselToggler"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button
        className="carousel-control-next color"
        type="button"
        data-bs-target="#carouselToggler"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </>
  );
};

export default class Carousel extends React.Component {
  fotos = {
    slides: [
      [
        {
          ciudad: "Madrid",
          img: "https://www.anibaltrejo.com/wp-content/uploads/2012/09/ES_Madrid_Cibeles_Fountain-120117172623.jpg",
        },
        {
          ciudad: "Paris",
          img: "https://tipsparatuviaje.com/wp-content/uploads/2019/09/museo-de-louvre.jpg",
        },
        {
          ciudad: "Venice",
          img: "http://www.ambitalia.com.uy/img/lugares-bonitos-en-venecia.jpg",
        },
        {
          ciudad: "London",
          img: "https://205015-618756-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/04/que-ver-londres.jpeg",
        },
      ],
      [
        {
          ciudad: "Buenos Aires",
          img: "https://i.pinimg.com/originals/da/b4/38/dab4387b0ff9546df64e94c4af6b0207.jpg",
        },
        {
          ciudad: "Rio de Janeiro",
          img: "https://marketingsimulator.net/nanfer/wp-content/uploads/sites/188/2016/08/copa-672x372.png",
        },
        {
          ciudad: "Punta del Este",
          img: "https://www.costacruceros.com/content/dam/costa/costa-magazine/articles-magazine/travel/punta-del-este-travel/Porto-Nuestra-Senora-de-la-Candelaria-punta-del-este_m.jpg.image.694.390.low.jpg",
        },
        {
          ciudad: "Cartagena de Indias",
          img: "https://content.r9cdn.net/rimg/dimg/16/60/a2791cb8-city-26923-164d787a3c1.jpg?width=1200&height=630&crop=true",
        },
      ],
      [
        {
          ciudad: "Berlin",
          img: "https://www.lugaresturisticos.pro/wp-content/uploads/2019/06/la-catedral-de-berlin-1024x640.jpg",
        },
        {
          ciudad: "Grecia",
          img: "https://images.lucentcms.com/greca/2019/08/5d4d84b26cb42-santorini-7.jpg",
        },
        {
          ciudad: "Fujiyama Honshu",
          img: "https://aseguratuviajefacil.com/wp-content/uploads/2019/03/ASEGURA-TU-VIAJE-FACIL-13-Lugares-turi%CC%81sticos-de-Japo%CC%81n.jpg",
        },
        {
          ciudad: "Hong Kong",
          img: "https://turismolatrach.cl/wp-content/uploads/2018/08/hongkong.jpg",
        },
      ],
    ],
  };

  render() {
    return (
      <>
        <div className="carouselsinho">
          <div
            className="car"
            style={{
              backgroundImage: 'url("./assets/fondo.jpg")',
            }}
          ></div>
          <div
            className="container-fluid min-vh-100 car"
            style={{
              backgroundImage: 'url("./assets/fondo.jpg")',
            }}
          ></div>
          <div
            id="carouselToggler"
            className="w-100 carousel slide d-flex flex-column justify-content-center align-items-center vh90"
            data-bs-ride="carousel"
          >
            <h3 className="text-light my-2 over">
              Popular my<b>tineraries</b>
            </h3>
            <CarouselIndicators />
            <div className="carousel-inner container flex-grow-1" key="2">
              {this.fotos.slides.map((slide, index) => (
                <Slide data={slide} index={index} key={index} />
              ))}
            </div>
            <CarouselButtons />
          </div>
        </div>
      </>
    );
  }
}
