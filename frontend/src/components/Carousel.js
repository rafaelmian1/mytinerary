import React from "react";
import CarouselButtons from "./CarouselButtons";
import CarouselIndicators from "./CarouselIndicators";
import Slide from "./Slide";

// import Slides from "./Slides";

export default class Carousel extends React.Component {
  // state = {
  //   slides: [],
  // };

  // componentDidMount() {
  //   fetch("https://picsum.photos/v2/list?page=2&limit=12")
  //     .then((res) => res.json())
  //     .then((fotos) =>
  //       this.setState({
  //         slides: [
  //           [...fotos].splice(0, 4),
  //           [...fotos].splice(4, 4),
  //           [...fotos].splice(8, 4),
  //         ],
  //       })
  //     );
  // }

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
      <div
        id="carouselToggler"
        className="carousel slide d-flex flex-column justify-content-center align-items-center vh90 mt-4"
        data-bs-ride="carousel"
      >
        <h3 className="text-light mt-2 over">
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
    );
  }
}
