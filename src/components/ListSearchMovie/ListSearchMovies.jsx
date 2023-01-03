import PropTypes from 'prop-types';
import { ListMovies } from '../ListMovie/ListMovies';

export const ListSearchMovies = ({ movies }) => {
  return <>{movies.length > 0 && <ListMovies films={movies} />}</>;
};

ListSearchMovies.propTypes = {
  movies: PropTypes.array.isRequired,
};
