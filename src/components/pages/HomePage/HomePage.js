import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../../../services/movie-api';

function HomePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    movieAPI.fetchTrending().then(setData);
  }, []);

  return (
    <ul>
      {data &&
        data.results.map(({ id, original_title, poster_path, title }) => {
          return (
            <li key={id}>
              <Link to={`/movie/${id}`}>
                {`Original title: ${original_title}, title:  ${title}`}
              </Link>
            </li>
          );
        })}
    </ul>
  );
}

export { HomePage };
