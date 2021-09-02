import usersActions from "../../../redux/actions/usersActions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

const LikesAndComments = ({ itinerary, index, ...props }) => {
  const [stopper, setStopper] = useState(true);
  const [likes, setLikes] = useState(itinerary.likes.likes);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    JSON.parse(localStorage.getItem("token")) &&
      setLiked(itinerary.likes.users.includes(setId()));
    // eslint-disable-next-line
  }, []);
  const setId = async () => {
    return await props.getId();
  };

  const clickHandler = async (bool) => {
    if (!stopper) {
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
    <div style={{ height: "50px", width: "50px" }}>
      {liked ? (
        <button
          className="likes"
          onClick={() => stopper && clickHandler(!liked)}
        >
          {likes} ❤️
        </button>
      ) : (
        <button
          className="likes"
          onClick={() => props.user && stopper && clickHandler(!liked)}
        >
          {likes} 🤍
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
  getId: usersActions.getId,
};

export default connect(mapStateToProps, mapDispatchToProps)(LikesAndComments);
