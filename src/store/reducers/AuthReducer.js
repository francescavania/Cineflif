const intialState = {
    email: '',
    // user: null,
    password: '',
    // loading: false,
    // errorMessage: '',
    token:'',
    // isLogged:false,
    username:''
  };

  const authReducer = (state = intialState , action) => {
    console.log(action,"action reducer")
    switch (action.type){
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          token: action.response.data.data.token,
        };
      case 'LOGIN_ERROR':
        return { ...state, payload }; //masih gatau
      default:
            return state;
    }
  }

  export default authReducer