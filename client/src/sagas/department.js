import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actionTypes";
import * as Api from "../api";

function* departmentAlert(action) {
  try {
    const departmentAlertResponse = yield call(
      Api.locationAlerts,
      action.payload
    );
    if (departmentAlertResponse?.status === 201) {
      yield put({
        type: actionTypes.LOCATION_DELETE_SUCCESS,
        locationDeleteMessage: "success",
      });
    } else {
      yield put({
        type: actionTypes.LOCATION_DELETE_ERROR,
        locationDeleteMessage: "error",
      });
    }
  } catch (e) {
    yield put({
      type: actionTypes.LOCATION_DELETE_ERROR,
      department: [],
      locationDeleteMessage: e,
    });
  }
}

export function* departmentAlertSaga() {
  yield takeEvery(actionTypes.LOCATION_DELETE_REQUEST, departmentAlert);
}
function* departmentSaga() {
  yield all([fork(departmentAlertSaga)]);
}
export default departmentSaga;
