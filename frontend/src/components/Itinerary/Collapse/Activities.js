import { connect } from "react-redux";
import CarouselIndicators from "../../Carousel/CarouselIndicators";
import CarouselItem from "../../Carousel/CarouselItem";
import CarouselToggler from "../../Carousel/CarouselToggler";
import Image from "../../Image";

const Activities = ({ id, ...props }) => {
  const act = props.activities.find(
    (activities) => activities.length > 0 && activities[0].itinerary === id
  );
  return (
    <div className="col-12 col-md-6">
      {act && (
        <CarouselToggler>
          <CarouselIndicators number={3} />
          <div className="carousel-inner flex-grow-1">
            {act.map((activity, index) => (
              <CarouselItem index={index} key={index}>
                <Image image={activity} act={true} />
              </CarouselItem>
            ))}
          </div>
        </CarouselToggler>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    activities: state.activities.activities,
  };
};

export default connect(mapStateToProps)(Activities);
