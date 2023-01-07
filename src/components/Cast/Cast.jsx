import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Notiflix from 'notiflix';

import imageMovies from '../../images/no-image-available.png';
import { axiosActorsMovie } from '../../requests/axiosActorsMovie';

import { GalleryCast, NameActor, ActorItem } from './Cast.Styled';
import { Message } from '../Reviews/Reviews.Styled';
const Cast = () => {
  const { movieId } = useParams();
  const [infoActors, setInfoActors] = useState([]);

  useEffect(() => {
    axiosActorsMovie(movieId)
      .then(data => {
        setInfoActors(data);
      })
      .catch(() => {
        Notiflix.Notify.failure('Something went wrong...');
      });
  }, [movieId]);

  return (
    <>
      {infoActors.length > 0 ? (
        <GalleryCast>
          {infoActors.map(({ id, name, character, profile_path }) => (
            <ActorItem key={id}>
              <img
                src={profile_path ?? imageMovies}
                alt={name}
                style={{ width: '154px', height: '231px' }}
              />
              <NameActor>{name}</NameActor>
              <p> Character: {character}</p>
            </ActorItem>
          ))}
        </GalleryCast>
      ) : (
        <Message> We do not have any actors for this movie</Message>
      )}
    </>
  );
};
export default Cast;
