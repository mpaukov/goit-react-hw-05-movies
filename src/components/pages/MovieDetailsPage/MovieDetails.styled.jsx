import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
`;

export const ImageThumb = styled.div`
  margin-right: 50px;
  flex-basis: 100%;
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: fit-content;
`;

export const Title = styled.h2`
  font-weight: 700;
`;

export const Label = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

export const OverviewText = styled.p`
  font-size: 16px;
  font-weight: 500;
`;
