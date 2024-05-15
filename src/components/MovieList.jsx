import { Link, useLocation } from 'react-router-dom';
import { trendingMovies } from '../assets/servises/api';
import { useEffect, useState } from 'react';
import { MovieDetailsPage } from '../pages/MovieDetailsPage';

export const MovieList = ({ moviesArray }) => {
  // const [movies, setMovies] = useState([]);
  // const location = useLocation();
  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     try {
  //       const result = await trendingMovies();
  //       setMovies(result);
  //     } catch (error) {
  //       console.log('error', error);
  //     }
  //   };
  //   fetchMovies();
  // }, []);

  // console.log('loca', location);
  // console.log(movies);

  return (
    <div>
      <ul>
        {moviesArray.map(item => {
          return (
            <li key={item.id}>
              <h3>{item.title}</h3>

              <Link to={`/movies/${item.id}`}>
                <p>movie/{item.id}</p>
                <p>id {item.id}</p>
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
export default MovieList;
