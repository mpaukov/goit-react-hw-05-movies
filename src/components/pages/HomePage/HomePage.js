import { useState, useEffect } from 'react';

import * as movieAPI from '../../../services/movie-api';
import { Gallery } from '../../Gallery/Gallery';

function HomePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    movieAPI.fetchTrending().then(setData);
  }, []);

  return <>{data && <Gallery data={data} />}</>;
}

export { HomePage };
