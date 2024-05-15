import { NavLink, Link } from 'react-router-dom';
import clsx from 'clsx';
export const Navigation = () => {
  return (
    <header>
      <h2>Navigation in header</h2>
      <ul>
        <li>
          <NavLink className={'activeLink'} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={'activeLink'} to="/movie_search">
            Movies
          </NavLink>
        </li>
      </ul>
      <Link to="/"></Link>
    </header>
  );
};
export default Navigation;
