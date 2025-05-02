import { readMovies } from './movies/movies.js'; // const { readMovies } = require('./movies');

readMovies()
  .then((movies) => console.log(movies))
  .catch((err) => console.error(err));
