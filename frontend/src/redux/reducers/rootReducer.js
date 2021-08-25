import { combineReducers } from "redux";
import carouselReducer from "./carouselReducer";
import citiesReducer from "./citiesReducer";
import itinerariesReducer from "./itinerariesReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  carousel: carouselReducer,
  cities: citiesReducer,
  itineraries: itinerariesReducer,
  users: usersReducer,
});

export default rootReducer;
