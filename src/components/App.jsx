import { Routes, Route, useNavigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { Navigation } from './Navigation/Navigation';
import { NotFoundPage } from './pages/NotFound/NotFoundPage';
import { useEffect } from 'react';

export function App() {
  let navigate = useNavigate();
  useEffect(() => {
    navigate('../');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </header>
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
