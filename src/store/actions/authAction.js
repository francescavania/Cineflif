const LOGIN = 'LOGIN'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'


export const loginAction = (username, password) => {
    return {
        type: LOGIN ,
        payload: {username, password},
    };
};
  
export const loginSuccess = (data) => {
    return {
        type: LOGIN_SUCCESS,
        payload: data,
    };
}