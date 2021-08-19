import './index.css';

export default function MovieInfo({
  bannerPath,
  genres,
  movieDuration,
  overview,
  posterPath,
  rating,
  tagline,
  title,
  year,
}) {
  return (
    <div className="movie__banner" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${bannerPath})` }}>
      <div className="movie__meta-info">
        <img
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={title}
          className="movie__poster"
        />
        <div className="move-info">
          <h2 className="movie-info__title">{title} ({year})</h2>
          <p className="movie-info__genres">
            <strong>Genres:</strong> {genres}
          </p>
          <div className="mc-flex">
            <h4 className="movie__rating">Rating: {rating}</h4>
            <span className="mc-dot-separator">&middot;</span>
            <h4 className="movie__time">Movie duration: {movieDuration}</h4>
          </div>
          <p className="movie__tagline">{tagline}</p>
          <h3>Overview</h3>
          <p className="movie__overview-info">{overview}</p>
        </div>
      </div>
    </div>
  );
}
