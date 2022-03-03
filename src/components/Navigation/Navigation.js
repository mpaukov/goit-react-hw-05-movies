import { Container } from 'CommonStyled/CommonStyled';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { Nav, MenuItem } from './Navigation.styled';

const Navigation = () => {
  return (
    <Container>
      <nav>
        <Nav>
          <MenuItem>
            <NavLink
              to="/"
              className={({ isActive }) =>
                !isActive ? `${css.link}` : `${css.activeLink}`
              }
            >
              Home
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              to="movies"
              className={({ isActive }) =>
                !isActive ? `${css.link}` : `${css.activeLink}`
              }
            >
              Movies
            </NavLink>
          </MenuItem>
        </Nav>
      </nav>
    </Container>
  );
};

export { Navigation };

// '/' - компонент <HomePage>, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
// /movies/:movieId/reviews - компонент <Reviews>, информация об обзорах. Рендерится на странице <MovieDetailsPage>.
