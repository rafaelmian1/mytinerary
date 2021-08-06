import React from "react";
import { Link } from "react-router-dom";

const BackgroundVideo = () => {
  return (
    <>
      <video
        autoPlay="autoplay"
        loop="loop"
        muted
        id="video-id"
        className="video"
      >
        <source src="./assets/video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <div className="subcontent">
          <h1 className="fw-bold my-4">MyTinerary</h1>
          <h5 className="mb-4">
            Find your perfect trip, designed by insiders who know and love their
            cities!
          </h5>
          <button type="button" className="px-4 gap-3 go">
            <Link to="./cities">
              <span className="link">See more!</span>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default BackgroundVideo;
