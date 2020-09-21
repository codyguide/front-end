import { combineReducers } from "redux";
import member from "./user_reducer";
import posts from "./post_reducer";

const rootReducer = combineReducers({
  member,
  posts,
});

export default rootReducer;
