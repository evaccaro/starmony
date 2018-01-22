import { combineReducers } from "redux";
import horoscopesReducer from "./horoscopesReducer";

const rootReducer = combineReducers({
  horoscopes: horoscopesReducer
});

export default rootReducer;
