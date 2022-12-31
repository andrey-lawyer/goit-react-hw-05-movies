import Notiflix from 'notiflix';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
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
  const { newGenres, id, title, overview, imageMovie, userScore } = infoMovie;
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
          <h1>{title}</h1>
          <Link to={locationUser}> Go Back</Link>
          <img src={imageMovie} alt={imageMovie} />
          <p>User Score</p>
          <span>{userScore}%</span>
          <p>Overview</p>
          <span>{overview}</span>
          <p>Genres</p>
          <span>{newGenres}</span>
          <p>Additional information</p>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </main>
      )}
    </>
  );
};
export default MovieDetails;
