import Notiflix from 'notiflix';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { axiosActorsMovie } from '../requests/axiosActorsMovie';
import { GalleryCast, NameActor, ActorItem } from './Cast.Styled';

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
      {infoActors.length > 0 && (
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
      )}
    </>
  );
};
export default Cast;
