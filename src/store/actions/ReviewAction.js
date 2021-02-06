export const GET_REVIEW_REQUESTED = 'GET_REVIEW_REQUESTED'

export const ActionFetchReview = (username) => {
  return {
    type: GET_REVIEW_REQUESTED,
    payload:username
  };
};
