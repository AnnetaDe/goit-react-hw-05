import { Link, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import s from './MoviePage.module.css';
import { SearchBox } from '../components/Search/SearchBox';
import { getMovies } from '../assets/servises/api';
import { MovieList } from '../components/Movielist/MovieList';

export const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const movieName = searchParams.get('name') ?? '';
  console.log('movieName', movieName);
  const visible = movies.filter(item =>
    item.original_title.toLowerCase().includes(movieName.toLowerCase())
  );

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMovies();
        setMovies(data);
        console.log('data', data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);
  console.log('movies', movies);

  console.log('visible', visible);

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <div className={s.movPage}>
      <div>
        <SearchBox value={movieName} onChange={updateQueryString} />
      </div>
      {/* <MovieList movies={movies} /> */}

      <ul className={s.movList}>
        {visible.map(item => {
          return (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <Link to={`/movies/${item.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                  alt={item.title}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MoviesPage;
