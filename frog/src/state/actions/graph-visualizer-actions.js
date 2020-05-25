export const RUN_GRAPH_ALGO_REQUEST = "RUN_GRAPH_ALGO_REQUEST";
export const RUN_GRAPH_ALGO_SUCCESS = "RUN_GRAPH_ALGO_SUCCESS";
export const RUN_GRAPH_ALGO_FAILURE = "RUN_GRAPH_ALGO_FAILURE";

export const runGraphAlgoRequest = (payload) => ({
  type: RUN_GRAPH_ALGO_REQUEST,
  payload,
});
