const intialState = {
    review:[]
  };

  const reviewReducer = (state = intialState , action) => {
      console.log(action,"reviewReducerrrrrrrrrrrrrrrrrr")
    switch (action.type){
      case 'REVIEW_FETCH_SUCCEEDED':
        return {
          ...state,
          review: action.reviews,
        };
      default:
            return state;
    }
  }

  export default reviewReducer