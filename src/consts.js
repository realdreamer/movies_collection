const {
  REACT_APP_API_BASE_URL,
  REACT_APP_API_BASE_VERSION,
} = process.env;

const BASE_URL = `${REACT_APP_API_BASE_URL}/${REACT_APP_API_BASE_VERSION}`

const MOVIE_BASE_URL = `${BASE_URL}/movie`;

export const URLS = {
  CONFIGURATION: `${BASE_URL}/configuration`,
  GENRES_LIST: `${BASE_URL}/genre/movie/list`,
  MOVIE_DETAILS: `${MOVIE_BASE_URL}`,
  NOW_PLAYING: `${MOVIE_BASE_URL}/now_playing`,
  POPULAR_MOVIES: `${MOVIE_BASE_URL}/popular`,
  TRENDING_MOVIES: `${BASE_URL}/trending/movie/day`,
  UPCOMING_MOVIES: `${MOVIE_BASE_URL}/upcoming`,
}
