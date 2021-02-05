const LOGIN = 'LOGIN'
const REGISTER = 'REGISTER'
const LOGOUT = 'LOGOUT'


export const loginAction = (username, password) => {
    return {
        type: LOGIN ,
        payload: {username, password},
    };
};
  
export const registerAction = (username,email,password) => {
    return {
        type: REGISTER,
        payload: {username,email,password},
    };
}

export const logoutAction = () => {
    return {
        type: LOGOUT ,
    };
};