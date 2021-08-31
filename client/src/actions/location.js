import { GET_LOCATIONS_REQUEST } from "../actionTypes";

export const locations = (loctionObjects) => {
  return {
    type: GET_LOCATIONS_REQUEST,
    payload: loctionObjects,
  };
};
