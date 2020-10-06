import { combineReducers } from "redux";
import member from "./user_reducer";
import posts from "./post_reducer";
<<<<<<< HEAD
=======
import galleries from "./gallery_reducer";
>>>>>>> 8e7e16d4fc75d61415269dda68efc4dd4d8f6455

const rootReducer = combineReducers({
  member,
  posts,
<<<<<<< HEAD
=======
  galleries,
>>>>>>> 8e7e16d4fc75d61415269dda68efc4dd4d8f6455
});

export default rootReducer;
