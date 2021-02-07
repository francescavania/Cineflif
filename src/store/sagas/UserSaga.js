import axios from 'axios';
import {takeLatest, put, all, call} from 'redux-saga/effects';
import {Alert} from 'react-native';

import API,{endPoint} from "../Api";

function* getUserSaga({payload}){
    
    try {
        const user = yield API.get(endPoint.getUser,{
            headers:{
                "Authorization" : "Bearer " + payload,
                'Content-Type': 'application/json'
            }
        })
        yield put({ type: 'GET_USER_SUCCESS', payload:user.data.data});
    } catch (error) {
        console.log(error)
    }
}

function* editUserSaga({payload}){
    try {
        // const user = yield API.put(endPoint.updateUser,{
        //     username:payload.username,
        //     email:payload.email,
        //     password:payload.password,
        //     image:payload.image
        // },{
        //     headers:{
        //         "Authorization" : "Bearer " + payload.token,
        //         'Content-Type': 'application/json'
        //     },
        // })
        const user = yield API.put(endPoint.updateUser,{
            username:payload.username,
            email:payload.email,
        },{
            headers:{
                "Authorization" : "Bearer " + payload.token,
                'Content-Type': 'application/json'
            },
        })
        if (user.status === 200) {
            Alert.alert('Updated!')
        }
        yield put({ type: 'EDIT_USER_SUCCESS', payload});
    } catch (error) {
        console.log(error)
    }
}

function* editPhotoSaga({payload}){
    try {
        console.log(payload)
        // const photo = yield API.put(endPoint.updateUser,{
        //     username:payload.username,
        //     email:payload.email,
        // },{
        //     headers:{
        //         "Authorization" : "Bearer " + payload.token,
        //         'Content-Type': 'application/json'
        //     },
        // })
        // console.log(photo,"updatedddd")
        // yield put({ type: 'GET_USER_SUCCESS', payload:user.data.data});
    } catch (error) {
        console.log(error)
    }
}



export function* userWatcher() {
    yield all([
        takeLatest('GET_USER_REQUESTED', getUserSaga), 
        takeLatest('EDIT_USER_REQUESTED', editUserSaga), 
        takeLatest('EDIT_PHOTO_REQUESTED', editPhotoSaga), 
    ]);
}