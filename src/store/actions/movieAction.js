export const MOVIE_FETCH_REQUESTED = 'MOVIE_FETCH_REQUESTED';


export const ActionFetchMovie = (payload) => {
    return {
      type: MOVIE_FETCH_REQUESTED,
      payload : payload
    };
  };