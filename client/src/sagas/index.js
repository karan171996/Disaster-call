import locationSaga from "./locations";
import userSaga from "./user";
import departmentSaga from "./department";

import { all, fork } from "redux-saga/effects";

function* disasterSaga() {
  yield all([fork(locationSaga), fork(userSaga), fork(departmentSaga)]);
}

export default disasterSaga;
