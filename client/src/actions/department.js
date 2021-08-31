import { DEPARTMENT_DATA_REQUEST } from "../actionTypes";

export const departmentAlertRequest = (payload) => {
  return {
    type: DEPARTMENT_DATA_REQUEST,
    payload,
  };
};
