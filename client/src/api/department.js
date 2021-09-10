import axios from "axios";

export const locationAlerts = async (departmentId) => {
  try {
    const response = await axios.post(
      "http://localhost:3030/department/delete-locations",
      {
        location: departmentId,
      }
    );
    return response;
  } catch (err) {
    console.log(err);
    return {};
  }
};
