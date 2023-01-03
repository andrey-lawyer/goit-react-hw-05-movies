import React, { useState, useEffect, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

import Notiflix from 'notiflix';

import { axiosFullInfoMovie } from '../requests/axiosFullInfoMovie';

import { FilmInfo } from '../components/FilmInfo/FilmInfo';
import {
  NavBack,
  BlockInfoToo,
  Information,
  NavCastReviews,
} from '../components/MovieDetails/MovieDetails.Styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [infoMovie, setInfoMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  useEffect(() => {
    setIsLoading(true);
    axiosFullInfoMovie(movieId)
      .then(data => {
        setInfoMovie(data);
      })
      .catch(() => {
        Notiflix.Notify.failure('Something went wrong...');
      })
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <>
      {isLoading ? (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4a3b98"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      ) : (
        <main>
          <NavBack to={backLinkHref}>{'\u261A'} Go Back</NavBack>
          {infoMovie && <FilmInfo infoMovie={infoMovie} />}
          <BlockInfoToo>
            <Information>Additional information</Information>
            <ul>
              <li>
                <NavCastReviews state={{ from: backLinkHref }} to="cast">
                  Cast
                </NavCastReviews>
              </li>
              <li>
                <NavCastReviews state={{ from: backLinkHref }} to="reviews">
                  Reviews
                </NavCastReviews>
              </li>
            </ul>
          </BlockInfoToo>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </main>
      )}
    </>
  );
};
export default MovieDetails;
