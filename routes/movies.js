import express from "express";
import {
  getMovies,
  getMoviesBySearch,
} from "../controllers/movieController.js";

const router = express.Router();

router.route("/:amount").get(getMovies);
router.route("/search").get(getMoviesBySearch);

export default router;
