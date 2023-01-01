import axios from 'axios';

export function axiosActorsMovie(id) {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=cbd8d541379b4f719065dc7272b2c5fd`
    )
    .then(promise => {
      const actors = promise.data.cast.map(
        ({ id, name, character, profile_path }) => ({
          id,
          name,
          character,
          profile_path,
        })
      );
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
      const newActors = actors.map(info => ({
        ...info,
        profile_path: info.profile_path
          ? base_url + poster_sizes[1] + info.profile_path
          : null,
      }));
      return newActors;
    });
}
