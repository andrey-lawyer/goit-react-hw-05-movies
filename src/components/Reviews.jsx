import Notiflix from 'notiflix';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { axiosReviewsMovie } from '../requests/axiosReviewsMovie';
import {
  ReviewsList,
  ReviewsItem,
  AuthorPost,
  Message,
} from './Reviews.Styled';
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
        <ReviewsList>
          {infoReviews.map(({ id, author, username, content }) => (
            <ReviewsItem key={id}>
              <AuthorPost>Author: {author} </AuthorPost>
              <p>{content}</p>
            </ReviewsItem>
          ))}
        </ReviewsList>
      ) : (
        <Message> We do not have any reviews for this movie</Message>
      )}
    </>
  );
};
export default Reviews;
