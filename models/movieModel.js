import { Schema, model } from "mongoose";

const movieSchema = new Schema({});

const Movie = model("Movie", movieSchema, "movies");

export default Movie;
