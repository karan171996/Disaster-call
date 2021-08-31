import { SUBMIT_ENTERIES_ERROR, SUBMIT_ENTERIES_SUCCESS } from "../actionTypes";

let initialState = {
  submitResponse: undefined,
};
const userSubmits = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_ENTERIES_SUCCESS:
    case SUBMIT_ENTERIES_ERROR:
      return {
        ...state,
        submitResponse: action?.message,
      };
    default:
      return state;
  }
};

export default userSubmits;
