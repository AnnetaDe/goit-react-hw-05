import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../assets/servises/api';
import s from './MovieReviews.module.css';

export const MovieReviews = () => {
  const id = useParams().id;
  const [review, setReviews] = useState([]);
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getMovieReviews(id);
        setReviews(data);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchReviews();
  }, [id]);
  console.log('review', review);
  return (
    <div className={s.reviewsContainer}>
      <h2>Reviews</h2>
      <ul>
        <li>
          {review.map(item => (
            <div key={item.id} className={s.reviewsLi}>
              <h3>{item.author}</h3>
              <p>{item.content}</p>
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
};
export default MovieReviews;
