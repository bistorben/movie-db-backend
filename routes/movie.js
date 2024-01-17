import express from "express";
import { getMovies } from "../controllers/movieController.js";

const router = express.Router();

router.route("/:amount").get(getMovies);

export default router;
