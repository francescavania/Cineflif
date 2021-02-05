import {takeLatest, put, all, call} from 'redux-saga/effects';

import API,{endPoint} from "../Api";

function* fetchGenre() {
    try {
        const genres = yield API.get(endPoint.getAllGenres)
        // yield console.log(genres,"genres")
        yield put({type: "GENRE_FETCH_SUCCEEDED", genres:genres.data});
    } catch (e) {
        console.log(e)
    }
 }

function* fetchMovie() {
    try {
        const movie = yield API.get(endPoint.getReviewByMovieId)
        yield put({type: "MOVIE_FETCH_SUCCEEDED", movie: movie});
    } catch (e) {
        console.log(e)
    }
 }

export function* movieWatcher() {
    yield all([takeLatest('GENRE_FETCH_REQUESTED', fetchGenre)]);
}