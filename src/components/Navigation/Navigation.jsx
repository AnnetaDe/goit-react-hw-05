import { NavLink, Link } from 'react-router-dom';
import s from './Navigation.module.css';
import clsx from 'clsx';
export const Navigation = () => {
  return (
    <header className={s.header}>
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
