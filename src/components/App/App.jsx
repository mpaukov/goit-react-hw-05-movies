import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { Navigation } from '../Navigation/Navigation';
import { NotFoundPage } from '../pages/NotFound/NotFoundPage';
import { Header } from './App.styled';
import { Container } from 'CommonStyled/Common.styled';
import { HomePage } from '../pages/HomePage/HomePage';
import { MoviesPage } from 'components/pages/MoviesPage/MoviesPage';
import { MovieDetailsPage } from 'components/pages/MovieDetailsPage/MovieDetailsPage';

export function App() {
  let navigate = useNavigate();
  useEffect(() => {
    navigate('../');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </>
  );
}
