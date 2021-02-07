import {takeLatest, put, all, call} from 'redux-saga/effects';
import axios from "axios";
import {Alert} from 'react-native';

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

 function* deleteReview({payload}) {
    console.log(payload,'deleteReview payload ID')
    const {reviewId,token} = payload
    try {
        const del = yield API.delete(endPoint.deleteReviewById+reviewId,{
            headers:{
                "Authorization" : "Bearer " + payload.token,
                'Content-Type': 'application/json'
            }
        })
        yield console.log(del,"delllllllllllllllll")
        if (del.status === 200) {
            const payload = {payload:token}
            Alert.alert('Review deleted!')
            yield call(fetchUserReview,payload)
        }
    } catch (e) {
        console.log(e)
    }
 }


export function* reviewWatcher() {
    yield all([
        takeLatest('GET_REVIEW_REQUESTED', fetchUserReview), 
        takeLatest('DELETE_REVIEW_REQUESTED', deleteReview), 
        // takeLatest('REGISTER', registerSaga), 
    ]);
}