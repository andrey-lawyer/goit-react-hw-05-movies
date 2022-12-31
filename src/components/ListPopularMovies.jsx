import Notiflix from 'notiflix';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Watch } from 'react-loader-spinner';
import { axiosPopularMovies } from '../requests/axiosPopularMovies';

export const ListPopularMovies = ({ state }) => {
  const [popularFilms, setPopularFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axiosPopularMovies()
      .then(data => {
        setIsLoading(false);
        setPopularFilms(data);
      })
      .catch(() => {
        Notiflix.Notify.failure('Something went wrong...');
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Watch
          height="80"
          width="80"
          radius="48"
          color="#4fa94d"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      ) : (
        <main>
          <h2>Popular Movies</h2>
          {popularFilms.length > 0 && (
            <ul>
              {popularFilms.map(({ id, title }) => (
                <li key={id}>
                  <Link to={`movies/${id}`} state={state}>
                    <p>{title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </main>
      )}
    </>
  );
};
