import axios from "axios";

export const departmentAlerts = async (department) => {
  try {
    const response = await axios.get(
      "http://localhost:3030/department/get-locations",
      {
        params: {
          department: department?.department,
        },
      }
    );
    return response;
  } catch (err) {
    console.log(err);
    return {};
  }
};
