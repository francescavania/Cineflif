export const GENRE_FETCH_REQUESTED = 'GENRE_FETCH_REQUESTED';
export const MOVIE_FETCH_REQUESTED = 'MOVIE_FETCH_REQUESTED';
export const SELECT_GENRE_REQUESTED = 'SELECT_GENRE_REQUESTED'
export const SELECT_MOVIE_REQUESTED = 'SELECT_MOVIE_REQUESTED'
export const GET_MOVIE_REVIEW_REQUESTED = 'GET_MOVIE_REVIEW_REQUESTED'
export const SEARCH_MOVIE_REQUESTED = 'SEARCH_MOVIE_REQUESTED'

export const ActionFetchGenre = () => {
  return {
    type: GENRE_FETCH_REQUESTED
  };
};

export const ActionSelectGenre = (genreId,genreName) => {
  return {
    type: SELECT_GENRE_REQUESTED,
    payload:{genreId,genreName},
  };
};

export const ActionSelectMovie = (movieId) => {
  return {
    type: SELECT_MOVIE_REQUESTED,
    payload:movieId,
  };
};

export const ActionGetMovieReview = (movieId) => {
  return {
    type: GET_MOVIE_REVIEW_REQUESTED,
    payload:movieId,
  };
};

export const ActionSearchMovie = (search) => {
  return {
    type: SEARCH_MOVIE_REQUESTED,
    payload:search,
  };
};

// export const ActionGetMovieById = (movieId) => {
//   return {
//     type: SELECT_MOVIE_REQUESTED,
//     payload:{genreId,genreName},
//   };
// };