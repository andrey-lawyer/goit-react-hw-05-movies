import axios from 'axios';

export function axiosReviewsMovie(id) {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=cbd8d541379b4f719065dc7272b2c5fd`
    )
    .then(promise => {
      const reviews = promise.data.results.map(
        ({ id, author, author_details: { username }, content }) => ({
          id,
          author,
          username,
          content,
        })
      );
      return reviews;
    });
}
