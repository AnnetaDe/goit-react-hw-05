import { useEffect, useState } from 'react';
import { MovieList } from '../components/MovieList';
import { useLocation } from 'react-router-dom';
import { trendingMovies } from '../assets/servises/api';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const result = await trendingMovies();
        setMovies(result);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchMovies();
  }, []);
  console.log(movies);

  return (
    <>
      <h3>Trending</h3>

      <MovieList moviesArray={movies} />

      {/* <Outlet /> */}
    </>
  );
};
export default HomePage;
