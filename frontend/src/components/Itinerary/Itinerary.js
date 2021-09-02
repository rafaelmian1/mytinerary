import Avatar from "./Main/Avatar";
import Collapse from "./Collapse/Collapse";
import LikesAndComments from "./Main/LikesAndComments";
import MainContent from "./Main/MainContent";
import PriceAndDuration from "./Main/PriceAndDuration";
import ItineraryContainer from "./Main/ItineraryContainer";
import Activities from "./Collapse/Activities";
import Comments from "./Collapse/Comments";

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
            <Avatar user={itinerary.user} />
            <LikesAndComments itinerary={itinerary} {...props} />
          </div>
          <MainContent itinerary={itinerary} />
          <PriceAndDuration itinerary={itinerary} />
        </div>
      </div>
      <Collapse index={index} itinerary={itinerary} {...props}>
        <Comments itinerary={itinerary} {...props} />
        <Activities id={itinerary._id} />
      </Collapse>
    </ItineraryContainer>
  );
};

export default Itinerary;
