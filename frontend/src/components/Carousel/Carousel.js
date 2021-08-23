import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CarouselToggler from "./CarouselToggler";
import CarouselItem from "./CarouselItem";
import CarouselIndicators from "./CarouselIndicators";
import CarouselButtons from "./CarouselButtons";
import Image from "../Image";
import { connect } from "react-redux";
import carouselActions from "../../redux/actions/carouselActions";

const Carousel = (props) => {
  useEffect(() => {
    props.slides.length === 0 && props.getSlides(props);
    // eslint-disable-next-line
  }, []);
  window.scrollTo(0, 0);

  return (
    <CarouselToggler>
      <CarouselIndicators />
      <div className="carousel-inner flex-grow-1">
        {props.slides.map((slide, index) => (
          <CarouselItem index={index} key={index}>
            {slide.map((city) => {
              return (
                <div className="col-12 col-lg-6 g-4" key={city.city}>
                  <Link to={`/cities/${city._id}`}>
                    <Image image={city} card={false} carousel={true}>
                      <div className="description">
                        <h5 className="px-3 fs-1">{city.city}</h5>
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

const mapDispatchToProps = {
  getSlides: carouselActions.getSlides,
};

const mapStateToProps = (state) => {
  return {
    slides: state.carousel.slides,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
