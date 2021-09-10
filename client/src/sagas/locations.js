import { all, call, takeEvery, put, fork } from "redux-saga/effects";
import * as actionTypes from "../actionTypes";
import * as Api from "../api";

function* getLocations(action) {
  try {
    const locationsResponse = yield call(Api.getPlaces, action.payload);
    if (locationsResponse?.status === 200) {
      yield put({
        type: actionTypes.GET_LOCATIONS_SUCCESS,
        message: "success",
        location: locationsResponse?.data,
      });
    } else {
      yield put({
        type: actionTypes.GET_LOCATIONS_ERROR,
        message: "error",
        location: {},
      });
    }
  } catch (e) {
    yield put({
      type: actionTypes.GET_LOCATIONS_ERROR,
      message: "error",
      location: e,
    });
  }
}

export function* checkLocations() {
  yield takeEvery(actionTypes.GET_LOCATIONS_REQUEST, getLocations);
}
function* locationSaga() {
  yield all([fork(checkLocations)]);
}
export default locationSaga;
