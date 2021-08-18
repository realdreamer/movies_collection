const {
  REACT_APP_API_BASE_URL,
  REACT_APP_API_BASE_VERSION,
} = process.env;

const BASE_URL = `${REACT_APP_API_BASE_URL}/${REACT_APP_API_BASE_VERSION}`

const MOVIE_BASE_URL = `${BASE_URL}/movie`;

export const URLS = {
  CONFIGURATION: `${BASE_URL}/configuration`,
  UPCOMING_MOVIES: `${MOVIE_BASE_URL}/upcoming`,
  POPULAR_MOVIES: `${MOVIE_BASE_URL}/popular`,
  MOVIE_DETAILS: `${MOVIE_BASE_URL}`,
  GENRES_LIST: `${BASE_URL}/genre/movie/list`,
}
