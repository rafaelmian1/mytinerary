import React from "react";

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
        <source src="./assets/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <div className="subcontent text-dark">
          <h1 className="fw-bold my-4">MyTinerary</h1>
          <h5 className="fw-bold">
            Find your perfect trip, designed by insiders who know and love their
            cities!
          </h5>
          <button type="button" className="btn btn-dark btn-lg px-4 gap-3">
            Click me!
          </button>
        </div>
      </div>
    </>
  );
};

export default BackgroundVideo;
