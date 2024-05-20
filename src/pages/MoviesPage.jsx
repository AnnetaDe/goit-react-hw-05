import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import s from './MoviesPage.module.css';
import { SearchBox } from '../components/Search/SearchBox';
import { getMoviesByQuerry2 } from '../assets/servises/api';
import { MovieList } from '../components/Movielist/MovieList';

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const q = searchParams.get('query') || '';
  useEffect(() => {
    if (!q) {
      return;
    }
    const fetchMovies = async () => {
      try {
        const movies = await getMoviesByQuerry2(q);
        setMovies(movies.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [q]);
  console.log(movies);
  return (
    <div className={s.movPage}>
      <SearchBox />
      <MovieList moviesArray={movies} />
    </div>
  );
};

export default MoviesPage;
