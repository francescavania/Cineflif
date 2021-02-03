const intialState = {
    email: '',
    user: null,
    password: '',
    loading: false,
    errorMessage: '',
    token:'',
    isLogged:false
  };

  export default (state = intialState , { type, payload }) => {
    switch (type){

        default:
            return state;
    }
  }