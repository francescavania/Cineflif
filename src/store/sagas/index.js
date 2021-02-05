import { all } from "redux-saga/effects";
import { authWatcher } from "./AuthSaga";
import { movieWatcher } from "./MovieSaga";

export default function* rootSaga(){
    yield all([
        authWatcher(),
        movieWatcher()
    ])
}