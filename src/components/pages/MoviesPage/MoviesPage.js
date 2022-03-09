import { useState, lazy } from 'react';
import * as movieAPI from '../../../services/movie-api';
import { Gallery } from 'components/Gallery/Gallery';

import { SearchForm, Button, Label, Input } from './MoviesPage.styled';

const NotFoundPage = lazy(() => import('../NotFound/NotFoundPage.js'));

export default function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState(null);

  const handleInputChange = e => {
    setSearchQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const normalizeSearchQuery = searchQuery.trim().toLowerCase();
    if (!normalizeSearchQuery) {
      return;
    }
    movieAPI.fetchSearch(normalizeSearchQuery).then(setData);
    setSearchQuery('');
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <Input
          type="text"
          name="searchQuery"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <Button type="submit">
          <Label>Search</Label>
        </Button>
      </SearchForm>
      {data?.results?.length ? <Gallery data={data} /> : <NotFoundPage />}
    </>
  );
}
