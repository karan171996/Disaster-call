import axios from "axios";

async function getPlaces(value) {
  try {
    const response = await axios.get("http://localhost:3030/get-place", {
      params: {
        place: value,
      },
    });
    return response.data;
  } catch (e) {
    return {};
  }
}

export const addUserDetails = (values, latitude, longitude) => {
  axios
    .post("http://localhost:3030/userDetails/add", {
      ...values,
      latitude: latitude,
      longitude: longitude,
    })
    .then((response) => response?.data?.newUserDetail)
    .catch((error) => {
      console.log(error);
      return {};
    });
};

export { getPlaces };
