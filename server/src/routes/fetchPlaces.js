import express from 'express';
import {
  getPlaceController
} from "../controllers/fetchLocations";

const router = express.Router();

router.route("/get-place").get(getPlaceController);

export default router;
