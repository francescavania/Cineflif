export const GET_REVIEW_REQUESTED = 'GET_REVIEW_REQUESTED'

export const ActionFetchReview = (token) => {
  return {
    type: GET_REVIEW_REQUESTED,
    payload:token
  };
};

export const ActionDeleteReview = (token,reviewId) => {
  return {
    type: 'DELETE_REVIEW_REQUESTED',
    payload:{token,reviewId}
  };
};

