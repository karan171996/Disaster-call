import axios from "axios";

export const addUserDetails = (values) => {
  axios
    .post("http://localhost:3030/userDetails/add", {
      ...values,
    })
    .then((response) => response?.data?.newUserDetail)
    .catch((error) => {
      console.log(error);
      return {};
    });
};
