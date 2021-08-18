const {
  REACT_APP_API_BASE_URL,
  REACT_APP_API_BASE_VERSION,
  REACT_APP_API_KEY,
} = process.env;

const BASE_URL = `${REACT_APP_API_BASE_URL}/${REACT_APP_API_BASE_VERSION}`

const MOVIE_BASE_URL = `${BASE_URL}/movie`;

export const URLS = {
  CONFIGURATION: `${BASE_URL}/configuration?api_key=${REACT_APP_API_KEY}`,
  UPCOMING_MOVIES: `${MOVIE_BASE_URL}/upcoming?api_key=${REACT_APP_API_KEY}`
}
