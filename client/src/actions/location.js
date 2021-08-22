import { GET_LOCATIONS } from "../actionTypes";

const locations = (loctionObjects) => {
  return {
    type: GET_LOCATIONS,
    payload: loctionObjects,
  };
};

export default {
  locations,
};
