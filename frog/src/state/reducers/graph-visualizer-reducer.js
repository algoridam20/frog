import {
  RUN_GRAPH_ALGO_REQUEST,
  RUN_GRAPH_ALGO_SUCCESS,
  RUN_GRAPH_ALGO_FAILURE,
  SET_GRAPH_REQUEST,
  VISIT_EDGE,
  VISIT_NODE,
} from "../actions/graph-visualizer-actions";
import { visitEdgeHelper, visitNodeHelper } from "../utils/reducer-utils";

export const runGraphAlgoReducer = (state = {}, action) => {
  switch (action.type) {
    case RUN_GRAPH_ALGO_REQUEST:
      return { isRunning: true, algo: action.payload.algo };
    case RUN_GRAPH_ALGO_SUCCESS:
      return { isRunning: false, algo: action.payload.algo };
    case RUN_GRAPH_ALGO_FAILURE:
      return { isRunning: false, algo: action.payload.algo, error: true };
    default:
      return state;
  }
};

export const setGraphReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_GRAPH_REQUEST:
      return { ...action.payload };
    case VISIT_EDGE:
      const { fromId, toId } = action.payload;
      return { ...visitEdgeHelper({ fromId, toId, graph: state }) };
    case VISIT_NODE:
      const { id } = action.payload;
      return { ...visitNodeHelper({ id, graph: state }) };
    default:
      return state;
  }
};
