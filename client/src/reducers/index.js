import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import storyReducer from "./storyReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorReducer,
  story: storyReducer
});

export default rootReducer;
