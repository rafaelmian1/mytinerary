import React, { useState, useEffect } from "react";
import CarouselToggler from "./CarouselToggler";
import CarouselItem from "./CarouselItem";
import CarouselIndicators from "./CarouselIndicators";
import CarouselButtons from "./CarouselButtons";
import Image from "../Image";
import { Link } from "react-router-dom";
import axios from "axios";

const Carousel = () => {
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/corousel/slides")
      .then((res) => setSlides(res.data.response));
  }, []);
  return (
    <CarouselToggler>
      <CarouselIndicators />
      <div className="carousel-inner flex-grow-1">
        {slides.map((slide, index) => (
          <CarouselItem index={index} key={index}>
            {slide.map((image) => {
              return (
                <div className="col-12 col-lg-6 g-4" key={image.ciudad}>
                  <Link to={`/city/${image._id}`}>
                    <Image image={image} card={false} carousel={true}>
                      <div className="descripcion d-flex flex-column align-items-center">
                        <h5 className="mx-3 fs-1">{image.ciudad}</h5>
                      </div>
                    </Image>
                  </Link>
                </div>
              );
            })}
          </CarouselItem>
        ))}
      </div>
      <CarouselButtons />
    </CarouselToggler>
  );
};

export default Carousel;
