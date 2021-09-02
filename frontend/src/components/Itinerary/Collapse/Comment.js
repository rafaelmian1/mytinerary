import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import usersActions from "../../../redux/actions/usersActions";
import EditDeleteButtons from "./EditDeleteButtons";

const Comment = ({ comm, id, ...props }) => {
  const [com, setCom] = useState(comm.comment);
  const [comment, setComment] = useState(comm.comment);
  const [editConfirm, setEditConfirm] = useState(false);
  let commentRef = useRef();
  let componentRef = useRef();

  const editConfirmButton = (e) => {
    commentRef.current.disabled = editConfirm;
    commentRef.current.className = editConfirm
      ? "input text-start"
      : "bg-light";
    !editConfirm && setComment(com);
    editConfirm && props.comment(id, "update", comment, com);
    setEditConfirm(!editConfirm);
  };

  const deleteComment = (e) => {
    commentRef.current.className = "d-none";
    componentRef.current.className = "d-none";
    props.comment(id, "delete", com);
  };

  return (
    <div ref={componentRef}>
      {comm && (
        <div className="avatar d-flex">
          <div
            className="avatarImg"
            style={{
              backgroundImage: `url(${comm.user.img})`,
              backgroundSize: "contain",
              height: "50px",
              width: "50px",
            }}
          ></div>
          <span className="px-2 fs-5 fw-bold">{comm.user.first_name}</span>
        </div>
      )}
      <div className="w-100 d-flex justify-content-between">
        <input
          type="text"
          className="input text-start"
          disabled
          ref={commentRef}
          style={{
            width: "80%",
            padding: "3px",
            margin: "0",
            fontSize: "1rem",
          }}
          value={com}
          onChange={() => setCom(commentRef.current.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.target.disabled = true;
              e.target.className = "input text-start";
              props.comment(id, "update", comment, com);
            }
          }}
        />
        <EditDeleteButtons
          userId={comm.user._id}
          functions={[editConfirmButton, deleteComment]}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  comment: usersActions.comment,
  getId: usersActions.getId,
};

export default connect(null, mapDispatchToProps)(Comment);
