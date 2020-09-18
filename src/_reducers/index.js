import { combineReducers } from "redux";
import member from "./user_reducer";

const rootReducer = combineReducers({
  member,
});

export default rootReducer;
