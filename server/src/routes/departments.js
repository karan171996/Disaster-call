import express from "express";
import { getDepartmentData } from "../controllers/DepartmentDetails";

const router = express.Router();

router.route("/get-locations").get(getDepartmentData);

export default router;
