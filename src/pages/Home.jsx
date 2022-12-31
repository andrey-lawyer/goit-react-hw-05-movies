import { ListPopularMovies } from 'components/ListPopularMovies';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  return (
    <main>
      <h1>Home</h1>
      <ListPopularMovies state={{ from: location }} />
    </main>
  );
};
export default Home;
