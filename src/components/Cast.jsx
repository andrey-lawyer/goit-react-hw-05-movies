import Notiflix from 'notiflix';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { axiosActorsMovie } from '../requests/axiosActorsMovie';

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
        <ul>
          {infoActors.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              {profile_path ? (
                <img src={profile_path} alt={name} />
              ) : (
                <img
                  src=" https://cdn.pixabay.com/photo/2016/09/14/08/18/film-1668918_1280.jpg"
                  alt={name}
                  style={{ width: '92px' }}
                />
              )}
              <p>{name}</p>
              <p> Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default Cast;
