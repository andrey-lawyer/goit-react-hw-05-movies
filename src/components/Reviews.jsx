import Notiflix from 'notiflix';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { axiosReviewsMovie } from '../requests/axiosReviewsMovie';

const Reviews = () => {
  const { movieId } = useParams();
  const [infoReviews, setInfoReviews] = useState({});
  useEffect(() => {
    axiosReviewsMovie(movieId)
      .then(data => {
        setInfoReviews(data);
      })
      .catch(() => {
        Notiflix.Notify.failure('Something went wrong...');
      });
  }, [movieId]);

  return (
    <>
      {infoReviews.length > 0 ? (
        <ul>
          {infoReviews.map(({ id, author, username, content }) => (
            <li key={id}>
              <p>Author: {author} </p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p> We do not have any reviews for this movie</p>
      )}
    </>
  );
};
export default Reviews;
