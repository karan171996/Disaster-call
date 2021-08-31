import { GET_LOCATIONS_SUCCESS, GET_LOCATIONS_ERROR } from "../actionTypes";

const mapLocation = (state = {}, action) => {
  switch (action.type) {
    case GET_LOCATIONS_ERROR:
    case GET_LOCATIONS_SUCCESS:
      return {
        ...state,
        location: action?.location,
        locationMessage: action?.message,
      };
    default:
      return state;
  }
};

export default mapLocation;
