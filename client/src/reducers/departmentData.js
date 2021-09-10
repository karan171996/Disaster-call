import { LOCATION_DELETE_SUCCESS, LOCATION_DELETE_ERROR } from "../actionTypes";

const department = (state = {}, action) => {
  switch (action.type) {
    case LOCATION_DELETE_SUCCESS:
    case LOCATION_DELETE_ERROR:
      return {
        ...state,
        locationDeleteMessage: action?.locationDeleteMessage,
      };
    default:
      return state;
  }
};

export default department;
