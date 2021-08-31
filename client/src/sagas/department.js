import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actionTypes";
import * as Api from "../api";

function* departmentAlert(action) {
  try {
    const departmentAlertResponse = yield call(
      Api.departmentAlerts,
      action.payload
    );
    if (departmentAlertResponse?.status === 200) {
      yield put({
        type: actionTypes.DEPARTMENT_DATA_SUCCESS,
        department: departmentAlertResponse?.data?.locations ?? [],
        departmentMessage: "success",
      });
    } else {
      yield put({
        type: actionTypes.DEPARTMENT_DATA_ERROR,
        department: [],
        departmentMessage: "error",
      });
    }
  } catch (e) {
    yield put({
      type: actionTypes.DEPARTMENT_DATA_ERROR,
      department: [],
      departmentMessage: e,
    });
  }
}

export function* departmentAlertSaga() {
  yield takeEvery(actionTypes.DEPARTMENT_DATA_REQUEST, departmentAlert);
}
function* departmentSaga() {
  yield all([fork(departmentAlertSaga)]);
}
export default departmentSaga;
