import handleCard from "./handleCard";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cards: handleCard,
});

export default rootReducer;
