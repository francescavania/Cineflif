import { all } from "redux-saga/effects";
import { authWatcher } from "./AuthSaga";

export default function* rootSaga(){
    yield all([
        authWatcher()
    ])
}