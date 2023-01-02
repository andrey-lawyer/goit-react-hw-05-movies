import Notiflix from 'notiflix';
import React, { useState, useEffect } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { useSearchParams } from 'react-router-dom';

import { FormMovies } from '../components/FormMovie/FormMovies';
import { axiosSearchMovie } from '../requests/axiosSearchMovie';
import { ListSearchMovies } from 'components/ListSearchMovie/ListSearchMovies';

const Movies = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) {
      return;
    }
    setIsLoading(true);
    axiosSearchMovie(query)
      .then(data => {
        setIsLoading(false);
        if (!data.length) {
          Notiflix.Notify.failure(
            'Sorry, there are no images matching your search query.Please try again.'
          );
          return;
        }
        setData(data);
      })
      .catch(() => {
        Notiflix.Notify.failure('Something went wrong...');
      });
  }, [searchParams]);
  return (
    <main>
      <FormMovies />
      {isLoading ? (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      ) : (
        <ListSearchMovies movies={data} />
      )}
    </main>
  );
};
export default Movies;
