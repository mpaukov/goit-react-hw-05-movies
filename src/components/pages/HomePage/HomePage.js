import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../../../services/movie-api';

import { FilmCard, Gallery, Poster, Image } from './HomePage.styled';
import placeholderImg from '../../../images/placeholder.bmp';

function HomePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    movieAPI.fetchTrending().then(setData);
  }, []);

  return (
    <Gallery>
      {data &&
        data.results.map(
          ({
            id,
            poster_path,
            original_title,
            vote_average,
            release_date,
            genre_ids,
          }) => {
            return (
              <FilmCard key={id}>
                <Link to={`${id}`}>
                  <Poster>
                    <Image
                      src={
                        poster_path
                          ? 'https://image.tmdb.org/t/p/w500' + poster_path
                          : placeholderImg
                      }
                      alt={original_title}
                      loading="lazy"
                    />
                  </Poster>
                </Link>
              </FilmCard>
            );
          }
        )}
    </Gallery>
  );
}

export { HomePage };

//   function galleryArrayMarkup(array) {
//     const galleryMarkup = array.results
//       .map(
//         ({
//           poster_path,
//           original_title,
//           vote_average,
//           release_date,
//           genre_ids,
//         }) => {
//           return `<li class="gallery-list__item">

//                 <a class="gallery-list__card">
//                     <div class="gallery-list__poster">
//                         <img class="gallery-list__img" src="${
//                           poster_path
//                             ? 'https://image.tmdb.org/t/p/w500' + poster_path
//                             : folder
//                         }" alt="${original_title}"  loading="lazy" />
//                     </div>
//                     </div>
//                     <div class="gallery-list__description">
//                     <h2 class="gallery-list__titel">${original_title}</h2>
//                     <div class="gallery-list__statics">

//                         <p class="gallery-list__text">${
//                           galleryGenresMarkup(genre_ids)
//                             ? galleryGenresMarkup(genre_ids)
//                             : 'no information'
//                         } | <span class="gallery-list__text-aftertext">${
//             new Date(release_date).getFullYear()
//               ? new Date(release_date).getFullYear()
//               : 'no information'
//           }</span> </p>

//                         <span class="gallery-list__rating">${vote_average}</span>
//                     </div>
//                 </div>
//                 </a>
//             </li>
// `;
//         }
//       )
//       .join('');
//     refs.gallery.insertAdjacentHTML('beforeend', galleryMarkup);
//   }
