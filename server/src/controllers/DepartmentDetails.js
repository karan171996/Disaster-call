import { io } from "../../config/socket";

import UserDetailModal from "../models/UserDetail";

// Read Department Details
var interval;
export const getDepartmentData = async (req, res, next) => {
  try {
    let locations = await UserDetailModal.find({
      department: req.query.department,
    });
    if (interval) {
      clearInterval(interval);
    }
    interval = setInterval(() => {
      io.sockets.emit("department", locations);
      console.log("department", req.query.department);
    }, 5000);

    res.status(200).json({ locations });

    next();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
