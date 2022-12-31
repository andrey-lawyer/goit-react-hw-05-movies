import axios from 'axios';

export function axiosPopularMovies() {
  return axios
    .get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=cbd8d541379b4f719065dc7272b2c5fd`
    )
    .then(promise => {
      const newData = promise.data.results.map(({ id, title }) => ({
        id,
        title,
      }));
      return newData;
    });
}
