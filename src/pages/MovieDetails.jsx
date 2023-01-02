import Notiflix from 'notiflix';
import { FilmInfo } from '../components/FilmInfo/FilmInfo';
import {
  BlockFlexOne,
  InfoFilm,
  BlockInfoFilm,
  NavBack,
  BlockInfoToo,
  Information,
  NavCastReviews,
  TitleFilm,
} from '../components/MovieDetails/MovieDetails.Styled';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import React, { useState, useEffect, Suspense } from 'react';
import { axiosFullInfoMovie } from '../requests/axiosFullInfoMovie';
const MovieDetails = () => {
  const { movieId } = useParams();
  const [infoMovie, setInfoMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  useEffect(() => {
    setIsLoading(true);
    axiosFullInfoMovie(movieId)
      .then(data => {
        setIsLoading(false);
        setInfoMovie(data);
      })
      .catch(() => {
        Notiflix.Notify.failure('Something went wrong...');
      });
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
