import express from "express";
import {
  UserDetailController,
  getLocations
} from "../controllers/UserDetail";

const router = express.Router();

router.route("/add").post(UserDetailController);
router.route("/get-locations").get(getLocations);

export default router;
