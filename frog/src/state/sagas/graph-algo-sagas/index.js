import { all, take, takeLatest, call, put } from "redux-saga/effects";
import {
  RUN_GRAPH_ALGO_REQUEST,
  RUN_GRAPH_ALGO_SUCCESS,
  RUN_GRAPH_ALGO_FAILURE,
} from "../../actions/graph-visualizer-actions";
import { delay } from "../../../utils/time-utils";

export const runGraphAlgoRequest = function* (action) {
  const { payload } = action;
  try {
    yield delay(3000);
    yield put({ type: RUN_GRAPH_ALGO_SUCCESS, payload });
  } catch (error) {
    yield put({ type: RUN_GRAPH_ALGO_FAILURE, payload });
  }
};

export const watchRunAlgoReq = function* () {
  yield all([takeLatest(RUN_GRAPH_ALGO_REQUEST, runGraphAlgoRequest)]);
};
