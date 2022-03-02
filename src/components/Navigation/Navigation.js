import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink
      to="/"
      className={({ isActive }) =>
        !isActive ? `${css.link}` : `${css.activeLink}`
      }
    >
      Home
    </NavLink>
    <NavLink
      to="/movies"
      className={({ isActive }) =>
        !isActive ? `${css.link}` : `${css.activeLink}`
      }
    >
      Movies
    </NavLink>
  </nav>
);

export { Navigation };

// '/' - компонент <HomePage>, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
// /movies/:movieId/reviews - компонент <Reviews>, информация об обзорах. Рендерится на странице <MovieDetailsPage>.
