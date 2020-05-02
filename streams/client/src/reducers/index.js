import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form"; // reducer as formReducer : sytex for renaming the exported function
import authReducer from "./authReducer";
import streamReducer from "./streamReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  stream: streamReducer,
});
