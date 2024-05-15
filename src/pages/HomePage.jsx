import { useEffect, useState } from 'react';
import { MovieList } from '../components/Movielist/MovieList';
import { trendingMovies } from '../assets/servises/api';
import s from './HomePage.module.css';

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
      <MovieList moviesArray={movies} />

      {/* <Outlet /> */}
    </>
  );
};
export default HomePage;
