import { useRef, useState } from "react";
import { connect } from "react-redux";
import usersActions from "../../../redux/actions/usersActions";
import Comment from "./Comment";
import Picker from "emoji-picker-react";

const Comments = ({ itinerary, ...props }) => {
  const { comments, _id } = itinerary;
  const [com, setCom] = useState("");
  const [newComments, setNewComments] = useState(comments);
  const autoScroll = useRef("");
  const emoRef = useRef("");
  const [emoji, setEmoji] = useState(true);

  const onEmojiClick = (event, emojiObject) => {
    console.log(emojiObject);
    setCom(com + emojiObject.emoji);
  };
  const emojiOn = (e) => {
    setEmoji(!emoji);
  };

  const handleComment = async (e, bool) => {
    if (bool && e.key !== "Enter") {
      return false;
    }
    if (com && props.user) {
      const c = {
        user: {
          _id: await props.getId(),
          img: props.user.img,
          first_name: props.user.first_name,
        },
        comment: com,
      };
      setNewComments([...newComments, c]);
      await props.comment(_id, "post", com);
      autoScroll.current.scrollTo(0, autoScroll.current.scrollHeight);
      setCom("");
    }
  };
  return (
    <div className="col-12 col-md-6">
      <div className="d-flex flex-column" style={{ height: "50vh" }}>
        <div
          style={{ height: "90%" }}
          className="navbar-nav-scroll"
          ref={autoScroll}
        >
          {newComments.map((comm, index) => (
            <Comment comm={comm} id={_id} key={index} />
          ))}
        </div>
        <div className="commentInput d-flex w-100 flex-wrap">
          <span className={`${emoji ? "d-none" : "d-block"} w-100`}>
            <Picker
              onEmojiClick={onEmojiClick}
              pickerStyle={{ width: "100%" }}
            />
          </span>
          <input
            type="text"
            placeholder="Ingresa tu comentario"
            className="input"
            style={{
              width: "85%",
              padding: "3px",
              margin: "0",
              fontSize: "1rem",
            }}
            value={com}
            onKeyPress={(e) => handleComment(e, true)}
            onChange={(e) => setCom(e.target.value)}
          />
          <span ref={emoRef}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-cursor-fill mx-2"
              style={{ cursor: "pointer" }}
              viewBox="0 0 16 16"
              onClick={(e) => handleComment(e, false)}
            >
              <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
            </svg>
            <svg
              onClick={emojiOn}
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-emoji-smile"
              style={{ cursor: "pointer" }}
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
            </svg>
          </span>
        </div>
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
  getId: usersActions.getId,
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
