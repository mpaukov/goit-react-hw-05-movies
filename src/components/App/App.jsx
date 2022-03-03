import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { HomePage } from '../pages/HomePage/HomePage';
import { Navigation } from '../Navigation/Navigation';
import { NotFoundPage } from '../pages/NotFound/NotFoundPage';
import { Header } from './App.styled';
import { Container } from 'CommonStyled/CommonStyled';

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
          <Route path="movies" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
