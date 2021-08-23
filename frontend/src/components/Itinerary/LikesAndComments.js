const LikesAndComments = ({ itinerary }) => (
  <div style={{ height: "50px", width: "50px" }}>
    {itinerary.likes ? (
      <div>{itinerary.likes} &#65039;</div>
    ) : (
      <div>{itinerary.likes} &#129293;</div>
    )}
    <div>{itinerary.comments.length} &#128172;</div>
  </div>
);

export default LikesAndComments;
