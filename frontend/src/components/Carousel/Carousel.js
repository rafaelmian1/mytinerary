import React, { useState, useEffect } from "react";
import CarouselToggler from "./CarouselToggler";
import CarouselItem from "./CarouselItem";
import CarouselIndicators from "./CarouselIndicators";
import CarouselButtons from "./CarouselButtons";
import Image from "../Image";
import { Link } from "react-router-dom";
import axios from "axios";

const Carousel = (props) => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/carousel")
      .then((res) => {
        if (res.data.success) {
          setSlides(res.data.response);
        } else {
          throw new Error(res.data.response);
        }
      })
      .catch((err) => {
        alert(err.message.includes("error") ? err.message : "Failed to fetch");
        console.error(err.message);
        props.history.push("/error");
      });
    // eslint-disable-next-line
  }, []);
  window.scrollTo(0, 0);

  return (
    <CarouselToggler>
      <CarouselIndicators />
      <div className="carousel-inner flex-grow-1">
        {slides.map((slide, index) => (
          <CarouselItem index={index} key={index}>
            {slide.map((image) => {
              return (
                <div className="col-12 col-lg-6 g-4" key={image.city}>
                  <Link to={`/city/${image._id}`}>
                    <Image image={image} card={false} carousel={true}>
                      <div className="description">
                        <h5 className="px-3 fs-1">{image.city}</h5>
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
