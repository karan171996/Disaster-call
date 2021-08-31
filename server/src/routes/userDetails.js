import express from "express";
import { UserDetailController } from "../controllers/UserDetail";

const router = express.Router();

router.route("/add").post(UserDetailController);

export default router;
