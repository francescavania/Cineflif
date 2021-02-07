import {takeLatest, put, all, call} from 'redux-saga/effects';
import axios from "axios";

import API,{endPoint} from "../Api";

function* fetchUserReview({payload}) {
    console.log(payload,'fetchUserReview payload')
    try {
        const reviews = yield API.get(endPoint.getReviewByUsername,{
            headers:{
                "Authorization" : "Bearer " + payload,
                'Content-Type': 'application/json'
            }
        })
        yield console.log(reviews,"reviews")
        yield put({type: "REVIEW_FETCH_SUCCEEDED", reviews:reviews.data.data});
    } catch (e) {
        console.log(e)
    }
 }

export function* reviewWatcher() {
    yield all([
        takeLatest('GET_REVIEW_REQUESTED', fetchUserReview), 
        // takeLatest('REGISTER', registerSaga), 
    ]);
}