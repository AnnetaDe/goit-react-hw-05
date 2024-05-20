import { Link, useParams } from 'react-router-dom';
import { getMovieCast1 } from '../../assets/servises/api';
import { useEffect, useState } from 'react';
import s from './MovieCast.module.css';
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
  }, [id]);
  console.log('cast', cast);

  return (
    <div className={s.cast}>
      <Link to={'./'}></Link>
      {cast.map(item => (
        <div key={item.id} className={s.inner}>
          <div className={s.imgConteiner}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
              alt={item.name}
              width={120}
            />
          </div>
          <div className={s.castT}>
            <p>{item.name}</p>
            <p>{item.character}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default MovieCast;
