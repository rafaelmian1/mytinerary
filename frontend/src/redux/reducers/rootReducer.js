import { combineReducers } from "redux";
import carouselReducer from "./carousel";
import citiesReducer from "./cities";
import itinerariesReducer from "./itineraries";
const rootReducer = combineReducers({
  carousel: carouselReducer,
  cities: citiesReducer,
  itineraries: itinerariesReducer,
  // usersReducer:,
});

export default rootReducer;
