import { combineReducers } from "redux";
import { runDFSReducer } from "./graph-visualizer-reducer";

export default combineReducers({
  locale: runDFSReducer,
});
