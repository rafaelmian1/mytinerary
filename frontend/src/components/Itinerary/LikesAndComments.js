import usersActions from "../../redux/actions/usersActions";
import { connect } from "react-redux";
import itinerariesActions from "../../redux/actions/itinerariesActions";
import { useEffect, useState } from "react";

const LikesAndComments = ({ itinerary, index, ...props }) => {
  const [
    tranquiConElBotonPapuLoVasARomper,
    setTranquiConElBotonPapuLoVasARomper,
  ] = useState(true);
  useEffect(() => {
    props.getItineraries(props);
    // eslint-disable-next-line
  }, [props.user]);

  const clickHandler = async (bool) => {
    if (!tranquiConElBotonPapuLoVasARomper) {
      return false;
    }
    setTranquiConElBotonPapuLoVasARomper(false);
    let response = await props.itineraryLiked(bool, itinerary._id);
    if (response.success) {
      setTranquiConElBotonPapuLoVasARomper(true);
    }
  };
  return (
    <div style={{ height: "50px", width: "50px" }}>
      {tranquiConElBotonPapuLoVasARomper &&
      props.user &&
      props.user.liked.includes(itinerary._id) ? (
        <button
          className="likes"
          onClick={() =>
            tranquiConElBotonPapuLoVasARomper && clickHandler(false)
          }
        >
          {itinerary.likes} ❤️
        </button>
      ) : (
        <button
          className="likes"
          onClick={() =>
            props.user &&
            tranquiConElBotonPapuLoVasARomper &&
            clickHandler(true)
          }
        >
          {itinerary.likes} 🤍
        </button>
      )}
      <div>{itinerary.comments.length} &#128172;</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.users.user,
    itineraries: state.itineraries.itineraries,
  };
};

const mapDispatchToProps = {
  itineraryLiked: usersActions.itineraryLiked,
  getItineraries: itinerariesActions.getItineraries,
};

export default connect(mapStateToProps, mapDispatchToProps)(LikesAndComments);
