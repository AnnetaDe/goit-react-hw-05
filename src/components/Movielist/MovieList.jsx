import { Link } from 'react-router-dom';

import s from './MovieList.module.css';
export const MovieList = ({ moviesArray }) => {
  return (
    <div className={s.listContainer}>
      <ul>
        {moviesArray.map(item => {
          return (
            <li key={item.id}>
              <div className={s.title}>
                <h3>{item.title}</h3>
              </div>
              <Link to={`/movies/${item.id}`}>
                <div className={s.imgholder}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                    alt={item.title}
                    width={400}
                  />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default MovieList;
