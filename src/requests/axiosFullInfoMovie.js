import axios from 'axios';

export function axiosFullInfoMovie(id) {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=cbd8d541379b4f719065dc7272b2c5fd`
    )
    .then(promise => {
      const {
        genres,
        homepage,
        id,
        title,
        overview,
        popularity,
        poster_path,
        vote_average,
      } = promise.data;
      const newArrayGenres = genres.map(el => el.name);
      const newGenres = newArrayGenres.join(' ');
      const userScore = Math.round(vote_average * 10);
      const poster_sizes = [
        'w92',
        'w154',
        'w185',
        'w342',
        'w500',
        'w780',
        'original',
      ];
      const base_url = 'http://image.tmdb.org/t/p/';
      const imageMovie = base_url + poster_sizes[4] + poster_path;
      return {
        newGenres,
        id,
        title,
        overview,
        popularity,
        imageMovie,
        userScore,
      };
    });
}
