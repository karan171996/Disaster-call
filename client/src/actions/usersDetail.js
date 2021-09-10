import { SUBMIT_ENTERIES_REQUEST } from "../actionTypes";

export const submitEntryRequest = (entry) => {
  return {
    type: SUBMIT_ENTERIES_REQUEST,
    payload: entry,
  };
};
