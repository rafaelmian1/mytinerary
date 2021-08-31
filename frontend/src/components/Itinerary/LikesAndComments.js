import usersActions from "../../redux/actions/usersActions";
import { connect } from "react-redux";
import itinerariesActions from "../../redux/actions/itinerariesActions";
import { useState } from "react";

const LikesAndComments = ({ itinerary, index, ...props }) => {
  const [stopper, setStopper] = useState(true);
  const clickHandler = async (bool) => {
    if (!stopper) {
      return false;
    }
    setStopper(false);
    let response = await props.like(bool, itinerary._id);
    await props.getItineraries(props);
    if (response.success) {
      setStopper(true);
    }
  };
  return (
    <div style={{ height: "50px", width: "50px" }}>
      {props.user && itinerary.likes.users.includes(props.user.id) ? (
        <button
          className="likes"
          onClick={() => stopper && clickHandler(false)}
        >
          {itinerary.likes.likes} ❤️
        </button>
      ) : (
        <button
          className="likes"
          onClick={() => props.user && stopper && clickHandler(true)}
        >
          {itinerary.likes.likes} 🤍
        </button>
      )}
      <div>{itinerary.comments.length} &#128172;</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.users.user,
  };
};

const mapDispatchToProps = {
  like: usersActions.like,
  getItineraries: itinerariesActions.getItineraries,
};

export default connect(mapStateToProps, mapDispatchToProps)(LikesAndComments);
