import axios from 'axios';

export function axiosSearchMovie(nameMovie) {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=cbd8d541379b4f719065dc7272b2c5fd&query=${nameMovie}`
    )
    .then(promise => {
      const newData = promise.data.results.map(({ id, title }) => ({
        id,
        title,
      }));
      return newData;
    });
}
