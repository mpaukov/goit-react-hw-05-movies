import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as movieAPI from '../../../services/movie-api';

import {
  Image,
  Label,
  OverviewText,
  Wrapper,
  Description,
  Title,
  ImageThumb,
} from './MovieDetails.styled';
import placeholderImg from '../../../images/placeholder.bmp';

export function MovieDetailsPage() {
  const [data, setData] = useState(null);
  console.log(
    '🚀 ~ file: MovieDetailsPage.js ~ line 13 ~ MovieDetailsPage ~ data',
    data
  );

  const { movieId } = useParams();

  useEffect(() => {
    movieAPI.fetchDetails(movieId).then(setData);
    return () => {
      setData(null);
    };
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
            <Title>
              {`${data.original_title} (${
                data.release_date
                  ? new Date(data.release_date).getFullYear()
                  : 'no information about release Date'
              })`}
            </Title>
            <Label>Overview:</Label>
            <OverviewText>{data.overview}</OverviewText>
            <Label>Genres:</Label>
            <OverviewText>
              {data.genres.map(genre => genre.id).join(', ')}
            </OverviewText>
          </Description>
        </Wrapper>
      )}
    </>
  );
}
