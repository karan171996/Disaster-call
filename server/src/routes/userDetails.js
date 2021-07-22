import express from "express";
import {
  UserDetailController,
  getPlaceController,
} from "../controllers/UserDetail";

const router = express.Router();

router.route("/add").post(UserDetailController);
router.route("/get-place").get(getPlaceController);

export default router;
