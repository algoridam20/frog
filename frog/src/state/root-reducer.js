import { combineReducers } from "redux";
import { runGraphAlgoReducer } from "./reducers/graph-visualizer-reducer";

export default combineReducers({
  algorithm: runGraphAlgoReducer,
});
