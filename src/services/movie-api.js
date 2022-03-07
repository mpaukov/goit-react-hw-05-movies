async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not Found'));
}

export function fetchTrending() {
  return fetchWithErrorHandling(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=24c8ddc74be8f953136bc2eedf6878db`
  );
}

export function fetchSearch(query) {
  return fetchWithErrorHandling(
    `https://api.themoviedb.org/3/search/movie?api_key=24c8ddc74be8f953136bc2eedf6878db&query=${query}`
  );
}

export function fetchDetails(movieId) {
  return fetchWithErrorHandling(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=24c8ddc74be8f953136bc2eedf6878db`
  );
}

export function fetchCast(movieId) {
  return fetchWithErrorHandling(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=24c8ddc74be8f953136bc2eedf6878db`
  );
}

export function fetchReview(movieId) {
  return fetchWithErrorHandling(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=24c8ddc74be8f953136bc2eedf6878db`
  );
}
