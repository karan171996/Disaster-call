import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actionTypes";
import * as Api from "../api";

function* submitEntry(action) {
  try {
    const entryResponse = yield call(Api.addUserDetails, action.payload);
    if (entryResponse?.status === 201) {
      yield put({
        type: actionTypes.SUBMIT_ENTERIES_SUCCESS,
        message: "success",
      });
    } else {
      yield put({
        type: actionTypes.SUBMIT_ENTERIES_SUCCESS,
        message: "error",
      });
    }
  } catch (e) {
    yield put({ type: actionTypes.SUBMIT_ENTERIES_ERROR, message: e });
  }
}

export function* submitEnteriesSaga() {
  yield takeEvery(actionTypes.SUBMIT_ENTERIES_REQUEST, submitEntry);
}
function* userSaga() {
  yield all([fork(submitEnteriesSaga)]);
}
export default userSaga;
