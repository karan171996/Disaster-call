import axios from "axios";
export const getPlaces = async (value) => {
  try {
    const response = await axios.get("http://localhost:3030/get-place", {
      params: {
        place: value,
      },
    });
    return response;
  } catch (err) {
    console.log(err);
    return {};
  }
};
