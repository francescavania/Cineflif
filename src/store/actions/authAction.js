const LOGIN = 'LOGIN'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'


export const ActionLogin = (email, password) => {
    return {
        type: LOGIN ,
        payload: {email, password},
    };
};
  
export const LoginSuccess = (data) => {
    return {
        type: LOGIN_SUCCESS,
        payload: data,
    };
}