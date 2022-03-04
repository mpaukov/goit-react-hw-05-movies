import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as movieAPI from '../../../services/movie-api';

import { Image, Wrapper } from './MovieDetails.styled';
import placeholderImg from '../../../images/placeholder.bmp';
import { Description } from './MovieDetails.styled';
import { Title } from './MovieDetails.styled';
import { ImageThumb } from './MovieDetails.styled';

export function MovieDetailsPage() {
  const [data, setData] = useState(null);
  console.log(
    '🚀 ~ file: MovieDetailsPage.js ~ line 13 ~ MovieDetailsPage ~ data',
    data
  );

  const { movieId } = useParams();

  useEffect(() => {
    movieAPI.fetchDetails(movieId).then(setData);
  }, [movieId]);

  return (
    <>
      {data && (
        <Wrapper>
          <ImageThumb>
            <Image
              src={
                data.poster_path
                  ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
                  : placeholderImg
              }
              alt={data.original_title}
              loading="lazy"
            />
          </ImageThumb>
          <Description>
            <Title>{data.original_title}</Title>
          </Description>
        </Wrapper>
      )}
    </>
  );
}
