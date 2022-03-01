import { useState, useEffect } from 'react';
import { HomePage } from './HomePage/HomePage';

const response = fetch(
  `https://api.themoviedb.org/3/trending/movie/day?api_key=24c8ddc74be8f953136bc2eedf6878db`
)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(({ results }) => results);

export function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await response;
      setData(data);
    })();
  }, []);

  return (
    <>
      <HomePage data={data} />
    </>
  );
}
