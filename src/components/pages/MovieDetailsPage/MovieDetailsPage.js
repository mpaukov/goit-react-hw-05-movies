import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as movieAPI from '../../../services/movie-api';

import { Image } from './MovieDetails.styled.jsx';
import placeholderImg from '../../../images/placeholder.bmp';

export function MovieDetailsPage() {
  const [data, setData] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    movieAPI.fetchDetails(movieId).then(setData);
  }, [movieId]);

  return (
    <>
      {data && (
        <Image
          src={
            data.poster_path
              ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
              : placeholderImg
          }
          alt={data.original_title}
          loading="lazy"
        />
      )}
    </>
  );
}
