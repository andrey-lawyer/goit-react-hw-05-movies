import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NavItem } from './ListMovies.Styled';
export const ListSearchMovies = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <NavItem to={`${id}`} state={{ from: location }}>
                <p>{title}</p>
              </NavItem>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

ListSearchMovies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
