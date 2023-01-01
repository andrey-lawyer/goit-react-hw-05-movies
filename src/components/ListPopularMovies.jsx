import Notiflix from 'notiflix';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import { Watch } from 'react-loader-spinner';
import { axiosPopularMovies } from '../requests/axiosPopularMovies';
import { NavItem, TitleTrending } from './ListMovies.Styled';
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
        <>
          <TitleTrending>Trending today</TitleTrending>
          {popularFilms.length > 0 && (
            <ul>
              {popularFilms.map(({ id, title }) => (
                <li key={id}>
                  <NavItem to={`movies/${id}`} state={state}>
                    <p>{title}</p>
                  </NavItem>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </>
  );
};

ListPopularMovies.propTypes = {
  state: PropTypes.object.isRequired,
};
