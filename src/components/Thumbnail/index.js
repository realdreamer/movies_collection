export default function Thumbnail({title, overview, posterPath}) {
  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={title} />
      <h3>{title}</h3>
      <p>{overview}</p>
    </div>
  );
}
