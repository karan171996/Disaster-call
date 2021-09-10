import express from "express";
import { getDepartmentData } from "../controllers/DepartmentDetails";

const router = express.Router();

router.route("/delete-locations").post(getDepartmentData);

export default router;
