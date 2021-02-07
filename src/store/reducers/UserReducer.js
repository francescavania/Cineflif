const intialState = {
    image:'',
    _id:'',
    username:'',
    email:'',
  };

  const userReducer = (state = intialState , action) => {
    console.log(action,"userreducer")
    switch (action.type){
      case 'GET_USER_SUCCESS':
        return {
          ...state,
          _id: action.payload._id,
          username : action.payload.username,
          email : action.payload.email,
          image : action.payload.image,
        };
      case 'EDIT_USER_SUCCESS':
        return {
          ...state,
          username : action.payload.username,
          email : action.payload.email
        };
      default:
            return state;
    }
  }

  export default userReducer