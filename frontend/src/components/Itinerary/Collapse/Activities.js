import { connect } from "react-redux";
import CarouselButtons from "../../Carousel/CarouselButtons";
import CarouselIndicators from "../../Carousel/CarouselIndicators";
import CarouselItem from "../../Carousel/CarouselItem";
import CarouselToggler from "../../Carousel/CarouselToggler";
import Image from "../../Image";

const Activities = ({ id, ...props }) => {
  const act = props.activities.find(
    (activities) => activities.length > 0 && activities[0].itinerary === id
  );
  return (
    <div className="col-12 col-md-6 order-first order-md-last">
      {act && (
        <CarouselToggler id={"iti" + act[0].itinerary}>
          <CarouselIndicators number={3} id={"iti" + act[0].itinerary} />
          <div className="carousel-inner flex-grow-1 actInner">
            {act.map((activity, index) => (
              <CarouselItem index={index} key={activity._id + index}>
                <Image image={activity} act={true} />
              </CarouselItem>
            ))}
          </div>
          <CarouselButtons
            act={true}
            key={act[0]._id}
            id={"iti" + act[0].itinerary}
            interval={2000}
          />
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
