import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import usersActions from "../../../redux/actions/usersActions";

const EditDeleteButtons = ({ userId, functions, ...props }) => {
  const [authorized, setAuthorized] = useState(null);
  useEffect(() => {
    props.user && getUserId();
    // eslint-disable-next-line
  }, []);
  const getUserId = async () => {
    setAuthorized((await props.getId()) === userId);
  };
  return (
    <>
      {authorized && (
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            style={{ cursor: "pointer" }}
            fill="currentColor"
            className="bi bi-pen-fill"
            viewBox="0 0 16 16"
            onClick={functions[0]}
          >
            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            style={{ cursor: "pointer" }}
            fill="currentColor"
            className="bi bi-trash-fill"
            viewBox="0 0 16 16"
            onClick={functions[1]}
          >
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
          </svg>
        </span>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.users.user,
  };
};
const mapDispatchToProps = {
  getId: usersActions.getId,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditDeleteButtons);
