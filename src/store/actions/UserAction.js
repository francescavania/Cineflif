const GET_USER_REQUESTED = 'GET_USER_REQUESTED'
const EDIT_USER_REQUESTED = 'EDIT_USER_REQUESTED'


export const getUserAction = (token) => {
    return {
        type: GET_USER_REQUESTED ,
        payload: token,
    };
};

export const editUserAction = (username,email,passsword,image,token) => {
    // console.log(username,email,passsword,image,"editUserAction")
    return {
        type: EDIT_USER_REQUESTED ,
        payload: {username,email,passsword,image,token},
    };
};
