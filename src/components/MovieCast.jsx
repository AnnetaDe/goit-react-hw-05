import { Link, useParams } from 'react-router-dom';
import { getMovieCast1 } from '../assets/servises/api';
import { useEffect, useState } from 'react';

export const MovieCast = () => {
  const id = useParams().id;
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await getMovieCast1(id);
        setCast(data);
        console.log('data', data);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchCast();
  }, []);
  console.log('cast', cast);

  return (
    <div>
      <h2>Cast</h2> <Link to={'./'}></Link>
      <ul>
        <li>
          {cast.map(item => (
            <div key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                alt={item.name}
                width={200}
              />
              <p>{item.name}</p>
              <p>{item.character}</p>
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
};
export default MovieCast;
