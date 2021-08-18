import UpcomingMovies from '../UpcomingMovies';
import PopularMovies from '../PopularMovies';

export default function Home() {
  return (
    <div className="container">
      <PopularMovies />
      <UpcomingMovies />
    </div>
  )
}
