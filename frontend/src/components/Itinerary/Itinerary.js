import Avatar from "./Avatar";
import Collapse from "./Collapse";
import LikesAndComments from "./LikesAndComments";
import MainContent from "./MainContent";
import PriceAndDuration from "./PriceAndDuration";
import ItineraryContainer from "./ItineraryContainer";

const Itinerary = ({ itinerary, index, ...props }) => {
  return (
    <ItineraryContainer>
      <div className="col-12 col-md-5">
        <div
          className="itineraryImg foto"
          style={{
            backgroundImage: `url(${itinerary.img})`,
            height: "40vh",
            width: "100%",
          }}
        ></div>
      </div>
      <div className="col-12 col-md-7 mt-4 mt-md-0">
        <div className="row">
          <div className="d-flex align-items-center justify-content-between col-12">
            <Avatar itinerary={itinerary} />
            <LikesAndComments itinerary={itinerary} {...props} />
          </div>
          <MainContent itinerary={itinerary} />
          <PriceAndDuration itinerary={itinerary} />
        </div>
      </div>
      <Collapse index={index} />
    </ItineraryContainer>
  );
};

export default Itinerary;
