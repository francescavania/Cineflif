  
import axios from 'axios';
import {Alert} from 'react-native';
import {takeLatest, put, all, call} from 'redux-saga/effects';

import API,{endPoint} from "../Api";

function* LoginSaga({payload}){
    try {
        const response = yield API.post(endPoint.loginUser,{
            username: payload.username,
            password: payload.password,
        })
        console.log(response,"response")
        console.log(payload,"payload")
        yield put({ type: 'LOGIN_SUCCESS', response });
    } catch (error) {
        console.log(error)
        yield put({ type: 'LOGIN_ERROR', error });
    }
}

function* LogOut() {
    yield put({
      type: 'LOGOUT',
    });
  }

export function* authWatcher() {
    yield all([takeLatest('LOGIN', LoginSaga), takeLatest('LOGOUT', LogOut)]);
}