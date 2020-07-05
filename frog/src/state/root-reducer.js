import { combineReducers } from "redux";
import {
  runGraphAlgoReducer,
  setGraphReducer,
} from "./reducers/graph-visualizer-reducer";

export default combineReducers({
  algorithm: runGraphAlgoReducer,
  graph: setGraphReducer,
});
