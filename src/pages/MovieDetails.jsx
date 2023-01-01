import Notiflix from 'notiflix';
import {
  BlockFlexOne,
  InfoFilm,
  BlockInfoFilm,
  NavBack,
  BlockInfoToo,
  Information,
  NavCastReviews,
  TitleFilm,
} from './MovieDetails.Styled';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import React, { useState, useEffect, Suspense } from 'react';
import { axiosFullInfoMovie } from '../requests/axiosFullInfoMovie';
const MovieDetails = () => {
  const { movieId } = useParams();
  const [infoMovie, setInfoMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

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
  const { newGenres, title, overview, imageMovie, userScore } = infoMovie;
  const location = useLocation();

  const [locationUser, setLocationUser] = useState('/');
  useEffect(() => {
    if (location.state) {
      setLocationUser(location.state.from);
    }
  }, [location.state]);

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
          <NavBack to={locationUser}>{'\u261A'} Go Back</NavBack>
          <BlockFlexOne>
            <img src={imageMovie} alt={imageMovie} />
            <BlockInfoFilm>
              <TitleFilm>{title}</TitleFilm>
              <InfoFilm>User Score {userScore}%</InfoFilm>
              <h2>Overview</h2>
              <InfoFilm>{overview}</InfoFilm>
              <h2>Genres</h2>
              <InfoFilm>{newGenres}</InfoFilm>
            </BlockInfoFilm>
          </BlockFlexOne>
          <BlockInfoToo>
            <Information>Additional information</Information>
            <ul>
              <li>
                <NavCastReviews to="cast">Cast</NavCastReviews>
              </li>
              <li>
                <NavCastReviews to="reviews">Reviews</NavCastReviews>
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
