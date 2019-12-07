import { all, call, put, takeEvery } from "redux-saga/effects";

const fetchCounterAPI = (count = 5) =>
  new Promise(rs => {
    setTimeout(() => {
      rs(count);
    }, 5000);
  });

function* fetchCounter(action) {
  const data = yield call(fetchCounterAPI, action.count);
  yield put({
    type: "SAVE_COUNT",
    count: data,
  });
}

function* loadCounter() {
  yield takeEvery("LOAD_COUNT", fetchCounter);
}

export default function* rootSaga() {
  yield all([loadCounter()]);
}
