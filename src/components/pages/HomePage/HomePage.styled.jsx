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
`;

export const Poster = styled.div`
  position: relative;
  border-radius: 5px;
  overflow: hidden;
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
`;
