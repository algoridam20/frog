import { delay } from "./time-utils";
import { all, take, takeLatest, call, put } from "redux-saga/effects";
import { visitEdge, visitNode } from "../actions/graph-visualizer-actions";
export const visitEdgeGenerator = function* ({
  toId,
  fromId,
  delayTime = 1500,
}) {
  yield delay(delayTime / 2);
  yield put(visitEdge({ fromId, toId }));
  yield delay(delayTime / 2);
};

export const visitNodeGenerator = function* ({ id, delayTime = 1500 }) {
  yield delay(delayTime / 2);
  yield put(visitNode({ id }));
  yield delay(delayTime / 2);
};
