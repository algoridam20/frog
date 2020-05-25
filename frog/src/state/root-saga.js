import { all, fork } from "redux-saga/effects";
import { watchRunAlgoReq } from "./sagas/graph-algo-sagas";

export default function* rootSaga() {
  yield all([fork(watchRunAlgoReq)]);
}
