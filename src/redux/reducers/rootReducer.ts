import { combineReducers } from "redux";
import { placesReducer } from "./places";
import { userReducer } from "./user";

export const rootReducer = combineReducers({
  places: placesReducer,
  user: userReducer,
});
