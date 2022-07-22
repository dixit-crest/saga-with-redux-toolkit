import { call, put, takeEvery } from "redux-saga/effects";
import { getCatSuccess } from "./catState";

function* workCatsFetch() {
  const cat = yield call(() =>
    fetch("https://jsonplaceholder.typicode.com/todos")
  );
  const formatted = yield cat.json();
  yield put(getCatSuccess(formatted));
}

function* catSaga() {
  yield takeEvery("cats/getCatFetch", workCatsFetch);
}
export default catSaga;
