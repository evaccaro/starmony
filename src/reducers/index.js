import { combineReducers } from "redux";
import horoscopesReducer from "./horoscopes_reducer";
import users_reducer from "./users_reducer";
import starSignReducer from "./star_signs_reducer";

const rootReducer = combineReducers({
  user: users_reducer,
  horoscopes: horoscopesReducer,
  signs: starSignReducer
});

export default rootReducer;
