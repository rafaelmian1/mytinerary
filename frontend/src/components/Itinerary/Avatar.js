const Avatar = ({ user }) => (
  <div className="avatar d-flex">
    <div
      className="avatarImg"
      style={{
        backgroundImage: `url(${user.avatar})`,
      }}
    ></div>
    <span className="px-2 fs-2 fw-bold">{user.name}</span>
  </div>
);

export default Avatar;
