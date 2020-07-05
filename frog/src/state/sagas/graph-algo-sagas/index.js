import { all, take, takeLatest, call, put, select } from "redux-saga/effects";
import {
  RUN_GRAPH_ALGO_REQUEST,
  RUN_GRAPH_ALGO_SUCCESS,
  RUN_GRAPH_ALGO_FAILURE,
} from "../../actions/graph-visualizer-actions";
import { delay } from "../../utils/time-utils";
import { runDFS } from "./dfs";

export const getCurrentGraph = (state) => state.graph;
export const runGraphAlgoRequest = function* (action) {
  const { algo, graph } = action.payload;
  try {
    yield delay(1000);
    let currentGraph = yield select(getCurrentGraph);
    yield runDFS(currentGraph);
    yield put({ type: RUN_GRAPH_ALGO_SUCCESS, payload: { algo } });
  } catch (error) {
    yield put({ type: RUN_GRAPH_ALGO_FAILURE, payload: { algo } });
  }
};

export const watchRunAlgoReq = function* () {
  yield all([takeLatest(RUN_GRAPH_ALGO_REQUEST, runGraphAlgoRequest)]);
};
