import Notiflix from 'notiflix';
import React, { useState, useEffect } from 'react';
import { Watch } from 'react-loader-spinner';
import { axiosPopularMovies } from '../requests/axiosPopularMovies';
import { TitleTrending } from '../components/ListMovie/ListMovies.Styled';
import { ListMovies } from '../components/ListMovie/ListMovies';

const Home = () => {
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
