const MainContent = ({ itinerary }) => (
  <>
    <h4 className="mt-4">{itinerary.title}</h4>
    <p>{itinerary.description}</p>
    <p>
      {itinerary.hashtags.map((hash, index) => (
        <span className="hashtag" key={index}>
          {"#" + hash + " "}
        </span>
      ))}
    </p>
  </>
);

export default MainContent;
