import Movie from "../models/movieModel.js";

const getMovies = async (req, res) => {
  const amount = +req.params.amount;
  try {
    const movies = await Movie.find().select("title").limit(amount);
    res.send(movies);
  } catch (err) {
    console.log(err);
  }
};

export { getMovies };
