const itinerariesReducer = (state = { itineraries: [] }, action) => {
  switch (action.type) {
    case "GET_ITINERARIES":
      return {
        ...state,
        itineraries: action.payload,
      };
    case "FILTER_ITINERARIES":
      return {
        ...state,
        itineraries: state.itineraries.sort((a, b) => {
          return action.payload ? a.likes - b.likes : b.likes - a.likes;
        }),
      };
    default:
      return state;
  }
};

export default itinerariesReducer;
