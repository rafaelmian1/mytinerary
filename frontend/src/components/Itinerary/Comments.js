import { useState } from "react";
import { connect } from "react-redux";
import itinerariesActions from "../../redux/actions/itinerariesActions";
import usersActions from "../../redux/actions/usersActions";

const Comments = ({ itinerary, ...props }) => {
  const { comments, _id } = itinerary;
  const [comment, setComment] = useState("");
  const handleEnter = async (e) => {
    e.key === "Enter" &&
      comment &&
      props.user &&
      (await props.comment(comment, _id)) &&
      (await props.getItineraries(props)) &&
      setComment("");
  };
  return (
    <div className="col-12 col-md-6">
      <div className="d-flex flex-column" style={{ height: "40vh" }}>
        <div style={{ height: "90%" }}>
          {comments.map((comment, index) => (
            <div key={index}>
              <div className="avatar d-flex">
                <div
                  className="avatarImg"
                  style={{
                    backgroundImage: `url(${comment.user.img})`,
                    height: "80px",
                    width: "80px",
                  }}
                ></div>
                <span className="px-2 fs-2 fw-bold">
                  {comment.user.first_name}
                </span>
              </div>
              <p>{comment.comment}</p>
            </div>
          ))}
        </div>
        <input
          type="text"
          placeholder="Ingresa tu comentario"
          value={comment}
          onKeyPress={handleEnter}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.users.user,
  };
};

const mapDispatchToProps = {
  comment: usersActions.comment,
  getItineraries: itinerariesActions.getItineraries,
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
