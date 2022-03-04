import { useParams, Link, Routes, Route } from 'react-router-dom';
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
import { Cast } from '../Cast/Cast';

export function MovieDetailsPage() {
  const [data, setData] = useState(null);

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
                  : 'no information about release date'
              })`}
            </Title>
            <Label>Overview:</Label>
            <OverviewText>{data.overview}</OverviewText>
            <Label>Genres:</Label>
            <OverviewText>
              {data.genres.map(genre => genre.id).join(', ')}
            </OverviewText>
            <p>
              <Link to="cast">Cast</Link>
            </p>
            <p>
              <Link to="reviews">Reviews</Link>
            </p>
          </Description>
        </Wrapper>
      )}
      <Routes>
        <Route path="cast" element={<Cast movieId={movieId} />} />
      </Routes>
    </>
  );
}
