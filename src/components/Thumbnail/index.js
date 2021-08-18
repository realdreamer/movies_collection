import './index.css';

export default function Thumbnail({title, overview, posterPath}) {
  return (
    <div className="movie-thumbnail">
      <img
        className="thumbnail__image"
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title}
      />
      <h3 className="thumbnail__title">{title}</h3>
    </div>
  );
}
