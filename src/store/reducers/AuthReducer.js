const intialState = {
    // user: null,
    // loading: false,
    // errorMessage: '',
    token:'',
    // isLogged:false,
    username:''
  };

  const authReducer = (state = intialState , action) => {
    switch (action.type){
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          token: action.payload.response.data.data.token,
          username : action.payload.username
        };
      case 'REGISTER_SUCCESS':
        return {
          ...state,
          username : action.payload.username
        };
      case 'LOGOUT':
        return {
          ...state,
          token : ''
        };
      default:
            return state;
    }
  }

  export default authReducer