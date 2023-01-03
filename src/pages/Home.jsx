import React, { useState, useEffect } from 'react';
import { Watch } from 'react-loader-spinner';

import Notiflix from 'notiflix';

import { axiosPopularMovies } from '../requests/axiosPopularMovies';

import { ListMovies } from '../components/ListMovie/ListMovies';
import { TitleTrending } from '../components/ListMovie/ListMovies.Styled';

const Home = () => {
  const [popularFilms, setPopularFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axiosPopularMovies()
      .then(data => {
        setPopularFilms(data);
      })
      .catch(() => {
        Notiflix.Notify.failure('Something went wrong...');
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <main>
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
          {popularFilms.length > 0 && <ListMovies films={popularFilms} />}
        </>
      )}
    </main>
  );
};
export default Home;
