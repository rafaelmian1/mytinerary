import React from "react";
import CarouselButtons from "./CarouselButtons";
import CarouselIndicators from "./CarouselIndicators";
import Slide from "./Slide";

// import Slides from "./Slides";

export default class Carousel extends React.Component {
  state = {
    slides: [],
  };

  componentDidMount() {
    fetch("https://picsum.photos/v2/list?page=2&limit=16")
      .then((res) => res.json())
      .then((fotos) =>
        this.setState({
          slides: [
            [...fotos].splice(0, 4),
            [...fotos].splice(4, 4),
            [...fotos].splice(8, 4),
            [...fotos].splice(12, 4),
          ],
        })
      );
  }

  render() {
    return (
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide flex-grow-1"
        data-bs-ride="carousel"
      >
        <CarouselIndicators />
        <div className="carousel-inner container-sm pb-5">
          {this.state.slides.map((slide, index) => (
            <Slide data={slide} index={index} />
          ))}
        </div>
        <CarouselButtons />
      </div>
    );
  }
}
