import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { Navigation } from './Navigation/Navigation';
import { NotFoundPage } from './pages/NotFound/NotFoundPage';

export function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
