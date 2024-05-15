// Link to="/movies/:movieId/cast" – посилання на сторінку з акторським складом фільму.
// Link to="/movies/:movieId/reviews" – посилання на сторінку з оглядами фільму.

import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMoviesById } from '../assets/servises/api';
import { useEffect, useRef, useState } from 'react';
export const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  console.log('location', location);
  const goBack = useRef(location.state ?? '/');

  const id = useParams().id;

  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await getMoviesById(id);
        setMovie(data);
      } catch (error) {
        setError(true);
        console.log('error', error);
      } finally {
        setloading(false);
      }
    };
    fetchMovie();
  }, [id]);
  console.log('moviestate', movie);
  return (
    <>
      <div>
        <h2>movie</h2>
        {loading && <h2>Loading...</h2>}
        {error && <h2>Something went wrong</h2>}
        {movie && (
          <>
            <h2>
              {movie.title} {movie.id}
            </h2>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt={movie.title}
            />
            <p>{movie.overview}</p>
          </>
        )}
      </div>

      <Link to={goBack.current}>Go Back </Link>
      <Link to={`cast`}>Cast</Link>
      <Link to={`reviews`}>Reviews</Link>
      <Outlet />
    </>
  );
};
export default MovieDetailsPage;
