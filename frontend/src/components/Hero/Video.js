const Video = () => (
  <video autoPlay="autoplay" loop="loop" muted id="video-id" className="video">
    <source src="./assets/video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

export default Video;
