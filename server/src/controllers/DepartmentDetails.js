import mongoose from "mongoose";
import { io } from "../../config/socket";

import UserDetailModal from "../models/UserDetail";

// Read Department Details
export const getDepartmentData = async (req, res, next) => {
  try {
    await UserDetailModal.findByIdAndRemove({
      _id: mongoose.Types.ObjectId(req.body.location),
    });
    res.status(201).json({ response: "success" });

    next();
  } catch (err) {
    console.log("err", err);
    res.status(400).json({ message: err.message });
  }
};
