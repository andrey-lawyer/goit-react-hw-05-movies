import Notiflix from 'notiflix';
import React, { useState, useEffect } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

import { FormMovies } from './FormMovies';
import { axiosSearchMovie } from '../requests/axiosSearchMovie';
import { ListSearchMovies } from 'components/ListSearchMovies';

const Movies = () => {
  const [searchName, setSearchName] = useState('');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = searchName => {
    setSearchName(searchName);
    setData([]);
  };

  useEffect(() => {
    if (!searchName) {
      return;
    }
    setIsLoading(true);
    axiosSearchMovie(searchName)
      .then(data => {
        if (data) {
          navigate(`/movies?query=${searchName}`, { replace: true });
        }
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
  }, [navigate, searchName]);
  return (
    <main>
      <FormMovies onSubmit={handleFormSubmit} />
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
