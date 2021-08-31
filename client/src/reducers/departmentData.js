import { DEPARTMENT_DATA_SUCCESS, DEPARTMENT_DATA_ERROR } from "../actionTypes";

const department = (state = {}, action) => {
  switch (action.type) {
    case DEPARTMENT_DATA_SUCCESS:
    case DEPARTMENT_DATA_ERROR:
      return {
        ...state,
        department: action?.department,
        departmentMessage: action?.departmentMessage,
      };
    default:
      return state;
  }
};

export default department;
