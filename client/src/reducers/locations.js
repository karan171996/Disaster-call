import { GET_LOCATIONS } from "../actionTypes";

const mapLocation = (state = {}, action) => {
  switch (action.type) {
    case GET_LOCATIONS:
      return {
        ...state,
        locations: action.payload,
      };
    default:
      return state;
  }
};

export default mapLocation;
