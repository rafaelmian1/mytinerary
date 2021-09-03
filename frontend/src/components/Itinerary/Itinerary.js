import Avatar from "./Main/Avatar";
import Collapse from "./Collapse/Collapse";
import LikesAndComments from "./Main/LikesAndComments";
import MainContent from "./Main/MainContent";
import PriceAndDuration from "./Main/PriceAndDuration";
import ItineraryContainer from "./Main/ItineraryContainer";
import Activities from "./Collapse/Activities";
import Comments from "./Collapse/Comments";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import usersActions from "../../redux/actions/usersActions";

const Itinerary = ({ itinerary, index, ...props }) => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    props.user && getUserId();
    // eslint-disable-next-line
  }, []);
  const getUserId = async () => {
    setUserId(await props.getId());
  };
  const act = props.activities.find(
    (activities) =>
      activities.length > 0 && activities[0].itinerary === itinerary._id
  );
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
            <LikesAndComments
              itinerary={itinerary}
              userId={userId}
              {...props}
            />
          </div>
          <MainContent itinerary={itinerary} />
          <PriceAndDuration itinerary={itinerary} />
        </div>
      </div>
      <Collapse index={index} itinerary={itinerary} {...props}>
        {act && (
          <>
            <Comments itinerary={itinerary} userId={userId} {...props} />
            <Activities id={itinerary._id} />
          </>
        )}
      </Collapse>
    </ItineraryContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.users.user,
    activities: state.activities.activities,
  };
};

const mapDispatchToProps = {
  comment: usersActions.comment,
  getId: usersActions.getId,
};

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);
