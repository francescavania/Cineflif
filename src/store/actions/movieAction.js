export const GENRE_FETCH_REQUESTED = 'GENRE_FETCH_REQUESTED';
export const MOVIE_FETCH_REQUESTED = 'MOVIE_FETCH_REQUESTED';
export const SELECT_GENRE_REQUESTED = 'SELECT_GENRE_REQUESTED'
export const SELECT_MOVIE_REQUESTED = 'SELECT_MOVIE_REQUESTED'

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
    payload:{genreId,genreName},
  };
};