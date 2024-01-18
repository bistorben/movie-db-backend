import Movie from "../models/movieModel.js";

const getMovies = async (req, res) => {
  const amount = +req.params.amount;
  try {
    const movies = await Movie.find()
      .select("title plot poster genre")
      .limit(amount);
    res.send(movies);
  } catch (err) {
    console.log(err);
  }
};

const getMoviesBySearch = async (req, res) => {
  const title = req.query.title;
  // const { title } = req.params;
  console.log(title);
  try {
    const movies = await Movie.find({
      title: { $regex: new RegExp(title, "i") },
    })
      .select("title plot poster")
      .limit(30);
    res.send(movies);
  } catch (err) {
    console.log(err);
  }
};

export { getMovies, getMoviesBySearch };
