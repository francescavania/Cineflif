const intialState = {
    image:'',
    _id:'',
    username:'',
    email:'',
  };

  const userReducer = (state = intialState , action) => {
    switch (action.type){
      case 'GET_USER_SUCCESS':
        return {
          ...state,
          _id: action.payload._id,
          username : action.payload.username,
          email : action.payload.email,
          image : action.payload.image,
        };
      default:
            return state;
    }
  }

  export default userReducer