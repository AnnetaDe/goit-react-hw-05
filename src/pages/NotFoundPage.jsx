import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div>
      <h2>Not Found Page</h2>
      <Link to="/">home</Link>
    </div>
  );
};
export default NotFoundPage;
