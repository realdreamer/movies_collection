import UpcomingMovies from '../UpcomingMovies';
import PopularMovies from '../PopularMovies';
import TrendingMovies from '../TrendingMovies';
import NowPlayingMovies from '../NowPlayingMovies';

export default function Home() {
  return (
    <div className="container">
      <TrendingMovies />
      <NowPlayingMovies />
      <PopularMovies />
      <UpcomingMovies />
    </div>
  )
}
