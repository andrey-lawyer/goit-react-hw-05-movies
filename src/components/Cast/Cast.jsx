import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Notiflix from 'notiflix';

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
              {profile_path ? (
                <img src={profile_path} alt={name} />
              ) : (
                <img
                  src=" http://tinleychamber.org/wp-content/uploads/2019/01/no-image-available.png"
                  alt={name}
                  style={{ width: '154px', height: '231px' }}
                />
              )}
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
