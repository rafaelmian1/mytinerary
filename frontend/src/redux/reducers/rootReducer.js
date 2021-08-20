import { combineReducers } from "redux";
import carouselReducer from "./carouselReducer";
import citiesReducer from "./citiesReducer";
import itinerariesReducer from "./itinerariesReducer";

const rootReducer = combineReducers({
  carousel: carouselReducer,
  cities: citiesReducer,
  itineraries: itinerariesReducer,

  // usersReducer:,
});

export default rootReducer;
