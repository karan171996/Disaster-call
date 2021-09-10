import { LOCATION_DELETE_REQUEST } from "../actionTypes";

export const deleteLocationRequest = (payload) => {
  return {
    type: LOCATION_DELETE_REQUEST,
    payload,
  };
};
