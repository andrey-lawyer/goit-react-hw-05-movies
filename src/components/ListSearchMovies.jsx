import { Link, useLocation } from 'react-router-dom';
export const ListSearchMovies = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <h2>Search Movies</h2>
      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                <p>{title}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
