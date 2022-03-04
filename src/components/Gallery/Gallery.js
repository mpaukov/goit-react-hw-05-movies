import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  FilmCard,
  Board,
  Poster,
  Image,
  Description,
  Title,
  Wrapper,
  Genres,
  ReleaseDate,
  Rating,
  RatingWrapper,
} from './Gallery.styled';
import placeholderImg from '../../images/placeholder.bmp';

export function Gallery({ data }) {
  return (
    <Board>
      {data &&
        data.results.map(
          ({
            id,
            poster_path,
            original_title,
            vote_average,
            release_date,
            genre_ids,
          }) => {
            return (
              <FilmCard key={id}>
                <Link to={`movies/${id}`}>
                  <Poster>
                    <Image
                      src={
                        poster_path
                          ? `https://image.tmdb.org/t/p/w500${poster_path}`
                          : placeholderImg
                      }
                      alt={original_title}
                      loading="lazy"
                    />
                  </Poster>
                  <Description>
                    <Title>{`Original Title: ${original_title}`}</Title>
                    <Wrapper>
                      <Genres>{`Genres: ${genre_ids}`}</Genres>
                      <ReleaseDate>
                        {`Release Date: ${
                          release_date
                            ? new Date(release_date).getFullYear()
                            : 'no information'
                        }`}
                      </ReleaseDate>
                      <RatingWrapper>
                        Rating:
                        <Rating>{vote_average}</Rating>
                      </RatingWrapper>
                    </Wrapper>
                  </Description>
                </Link>
              </FilmCard>
            );
          }
        )}
    </Board>
  );
}

Gallery.propTypes = {
  data: PropTypes.object.isRequired,
};
