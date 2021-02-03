import axios from "axios";
import { Alert } from "react-native";
import { takeLatest,put,all, call } from "redux-saga/effects";

function* fetchMovie(action) {
    try {

    //    const movie = yield call(Api, action.payload.token);
    const movie = yield call()
        yield put({type: "MOVIE_FETCH_SUCCEEDED", movie: movie});
    } catch (e) {
        console.log(e)
    }
 }