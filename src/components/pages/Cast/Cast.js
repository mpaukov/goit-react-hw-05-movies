import { useState, useEffect } from 'react';
import * as movieAPI from '../../../services/movie-api';

export function Cast({ movieId }) {
  const [data, setData] = useState(null);
  console.log('🚀 ~ file: Cast.js ~ line 3 ~ Cast ~ data', data);

  useEffect(() => {
    movieAPI.fetchCast(movieId).then(setData);
    return () => {
      setData(null);
    };
  }, [movieId]);
  return (
    <>
      <ul>
        {data &&
          data.cast.map(({ original_name, character, profile_path, id }) => {
            return (
              <li key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={original_name}
                />
                <p>Name: {original_name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
}
