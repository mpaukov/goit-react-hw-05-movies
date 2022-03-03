import styled from '@emotion/styled';

export const Gallery = styled.ul`
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const FilmCard = styled.li`
  width: 100%;
  display: flex;
  flex-basis: calc(100% / 2 - 30px);
  @media screen and (min-width: 1024px) {
    flex-basis: calc(100% / 3 - 30px);
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const Poster = styled.div`
  position: relative;
  border-radius: 5px;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  align-items: flex-start;
  flex-direction: column;
`;

export const Genres = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  color: #ff6b08;
`;

export const ReleaseDate = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  color: #ff6b08;
`;

export const RatingWrapper = styled.p`
  display: flex;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  color: #ff6b08;
`;

export const Rating = styled.span`
  display: flex;
  margin-left: 10px;
  background: #ff6b01;
  border-radius: 5px;
  width: 36px;
  height: 16px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: #ffffff;
`;

export const Description = styled.div`
  padding-top: 10px;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  color: rgb(108, 108, 108);
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
`;
