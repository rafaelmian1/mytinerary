const itinerariesReducer = (state = { itineraries: [] }, action) => {
  switch (action.type) {
    case "GET_ITINERARIES":
      return {
        ...state,
        itineraries: action.payload,
      };
    case "SORT_ITINERARIES":
      return {
        ...state,
        itineraries: state.itineraries.sort((a, b) => {
          return action.payload ? a.likes - b.likes : b.likes - a.likes;
        }),
      };
    case "RESET":
      return {
        ...state,
        itineraries: [],
      };
    default:
      return state;
  }
};

export default itinerariesReducer;
