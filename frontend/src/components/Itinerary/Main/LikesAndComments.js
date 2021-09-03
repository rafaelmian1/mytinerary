import usersActions from "../../../redux/actions/usersActions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import "../../../styles/itineraries.css";
import { toast } from "react-toastify";

const LikesAndComments = ({ itinerary, userId, index, ...props }) => {
  const [stopper, setStopper] = useState(true);
  const [likes, setLikes] = useState(itinerary.likes.likes);
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    setLiked(itinerary.likes.users.includes(userId));
    // eslint-disable-next-line
  }, [userId]);
  const clickHandler = async (bool) => {
    if (!stopper) {
      return false;
    }
    if (!props.user) {
      toast.error("You must be logged in to like the itineraries", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      return false;
    }
    setStopper(false);
    let response = await props.like(bool, itinerary._id);

    if (response.success) {
      if (bool) {
        setLikes(likes + 1);
        setLiked(bool);
      } else {
        setLikes(likes - 1);
        setLiked(bool);
      }
      setStopper(true);
    }
  };

  return (
    <div>
      {liked ? (
        // eslint-disable-next-line
        <a
          className="like-button liked"
          onClick={() => stopper && clickHandler(!liked)}
        >
          <span className="like-icon">
            <div className="heart-animation-1"></div>
            <div className="heart-animation-2"></div>
          </span>
          {likes}
        </a>
      ) : (
        // eslint-disable-next-line
        <a
          className="like-button"
          onClick={() => stopper && clickHandler(!liked)}
        >
          <span className="like-icon">
            <div className="heart-animation-1"></div>
            <div className="heart-animation-2"></div>
          </span>
          {likes}
        </a>
      )}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(LikesAndComments);
