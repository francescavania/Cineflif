import { all } from "redux-saga/effects";
import { authWatcher } from "./AuthSaga";
import { movieWatcher } from "./MovieSaga";
import { userWatcher } from "./UserSaga";
import { reviewWatcher } from "./ReviewSaga";

export default function* rootSaga(){
    yield all([
        authWatcher(),
        movieWatcher(),
        userWatcher(),
        reviewWatcher()
    ])
}