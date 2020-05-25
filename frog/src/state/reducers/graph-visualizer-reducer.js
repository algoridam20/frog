import {
  RUN_GRAPH_ALGO_REQUEST,
  RUN_GRAPH_ALGO_SUCCESS,
  RUN_GRAPH_ALGO_FAILURE,
} from "../actions/graph-visualizer-actions";

export const runGraphAlgoReducer = (state = {}, action) => {
  console.log(action, "......");
  switch (action.type) {
    case RUN_GRAPH_ALGO_REQUEST:
      return { isRunning: true, algo: action.payload };
    case RUN_GRAPH_ALGO_SUCCESS:
      return { isRunning: false, algo: action.payload };
    case RUN_GRAPH_ALGO_FAILURE:
      return { isRunning: false, algo: action.payload, error: true };
    default:
      return state;
  }
};
