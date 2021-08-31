import { combineReducers } from "redux";
import locations from "./locations";
import userDetails from "./useDetails";
import department from "./departmentData";

const rootReducers = combineReducers({
  locations,
  userDetails,
  department,
});

export default rootReducers;
