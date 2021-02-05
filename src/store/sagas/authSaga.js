import axios from 'axios';
import {Alert} from 'react-native';
import {takeLatest, put, all, call} from 'redux-saga/effects';

import API,{endPoint} from "../Api";

import * as RootNavigation from '../../navigation/RootNavigation';

function* loginSaga({payload}){
    try {
        const response = yield API.post(endPoint.loginUser,{
            username: payload.username,
            password: payload.password,
        })
        yield put({ type: 'LOGIN_SUCCESS', payload:{response,username:payload.username}});
    } catch (error) {
        console.log(error)
        // yield put({ type: 'LOGIN_ERROR', error });
    }
}

function* registerSaga({payload}){
    console.log(payload,"payload reg saga")
    try {
        const response = yield API.post(endPoint.signUpUser,{
            email:payload.email,
            username: payload.username,
            password: payload.password,
        })
        yield put({ type: 'REGISTER_SUCCESS', payload:{username:payload.username}});
        yield put(RootNavigation.navigate('auth',{}))
    } catch (error) {
        console.log(error)
        // yield put({ type: 'REGISTER_ERROR', error });
    }
}

export function* authWatcher() {
    yield all([
        takeLatest('LOGIN', loginSaga), 
        takeLatest('REGISTER', registerSaga), 
    ]);
}