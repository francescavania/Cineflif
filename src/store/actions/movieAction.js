export const GENRE_FETCH_REQUESTED = 'GENRE_FETCH_REQUESTED';
export const MOVIE_FETCH_REQUESTED = 'MOVIE_FETCH_REQUESTED';

export const ActionFetchGenre = (payload) => {
  return {
    type: GENRE_FETCH_REQUESTED
  };
};

export const ActionFetchMovie = (payload) => {
    return {
      type: MOVIE_FETCH_REQUESTED
    };
  };