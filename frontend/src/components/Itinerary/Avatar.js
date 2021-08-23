const Avatar = ({ itinerary }) => (
  <div className="avatar d-flex">
    <div
      className="avatarImg"
      style={{
        backgroundImage: `url(${itinerary.user.avatar})`,
      }}
    ></div>
    <span className="px-2 fs-2 fw-bold">{itinerary.user.name}</span>
  </div>
);

export default Avatar;
