export const SET_GRAPH_REQUEST = "SET_GRAPH_REQUEST";
export const SET_GRAPH_SUCCESS = "SET_GRAPH_SUCCESS";
export const SET_GRAPH_FAILURE = "SET_GRAPH_FAILURE";

export const RUN_GRAPH_ALGO_REQUEST = "RUN_GRAPH_ALGO_REQUEST";
export const RUN_GRAPH_ALGO_SUCCESS = "RUN_GRAPH_ALGO_SUCCESS";
export const RUN_GRAPH_ALGO_FAILURE = "RUN_GRAPH_ALGO_FAILURE";

export const VISIT_EDGE = "VISIT_EDGE";
export const VISIT_NODE = "VISIT_NODE";

export const runGraphAlgoRequest = ({ algo }) => ({
  type: RUN_GRAPH_ALGO_REQUEST,
  payload: { algo },
});

export const setGraphRequest = (payload) => ({
  type: SET_GRAPH_REQUEST,
  payload,
});

export const visitEdge = ({ fromId, toId }) => ({
  type: VISIT_EDGE,
  payload: { fromId, toId },
});

export const visitNode = ({ id }) => ({
  type: VISIT_NODE,
  payload: { id },
});
