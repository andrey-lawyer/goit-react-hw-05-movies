import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { NavItem } from './ListMovies.Styled';

export const ListMovies = ({ films }) => {
  const location = useLocation();

  return (
    <ul>
      {films.map(({ id, title }) => (
        <li key={id}>
          <NavItem to={`/movies/${id}`} state={{ from: location }}>
            <p>{title}</p>
          </NavItem>
        </li>
      ))}
    </ul>
  );
};

ListMovies.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
