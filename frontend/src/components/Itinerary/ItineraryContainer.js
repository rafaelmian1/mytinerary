const ItineraryContainer = ({ children }) => (
  <div className="py-4 container-md container-fluid">
    <div className="itinerariesContainer bg-light row">{children}</div>
  </div>
);

export default ItineraryContainer;
