import { NavLink, Link } from 'react-router-dom';
import s from './Navigation.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};
export const Navigation = () => {
  return (
    <header className={s.header}>
      <ul>
        <li>
          <NavLink className={buildLinkClass} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={buildLinkClass} to="/movie_search">
            Movies
          </NavLink>
        </li>
      </ul>
      <Link to="/"></Link>
    </header>
  );
};
export default Navigation;
