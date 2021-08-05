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
    fetch("https://picsum.photos/v2/list?page=2&limit=12")
      .then((res) => res.json())
      .then((fotos) =>
        this.setState({
          slides: [
            [...fotos].splice(0, 4),
            [...fotos].splice(4, 4),
            [...fotos].splice(8, 4),
          ],
        })
      );
  }

  render() {
    return (
      <div
        id="carouselToggler"
        className="carousel slide d-flex flex-column justify-content-center align-items-center min-vh-100"
        data-bs-ride="carousel"
      >
        <h3 className="text-light mt-2 over">
          Popular my<b>tineraries</b>
        </h3>
        <CarouselIndicators />
        <div className="carousel-inner container" key="2">
          {this.state.slides.map((slide, index) => (
            <Slide data={slide} index={index} key={index} />
          ))}
        </div>
        <CarouselButtons />
      </div>
    );
  }
}
