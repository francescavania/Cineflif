import {takeLatest, put, all, call} from 'redux-saga/effects';
import axios from "axios";

import API,{endPoint} from "../Api";

function* fetchGenre() {
    try {
        const genres = yield API.get(endPoint.getAllGenres)
        // yield console.log(genres,"genres")
        yield put({type: "GENRE_FETCH_SUCCEEDED", genres:genres.data});
        const payload = {payload : {genreId : genres.data.data[0]._id,genreName : genres.data.data[0].genre}}
        yield call(fetchMovie,payload)
    } catch (e) {
        console.log(e)
    }
 }

function* fetchMovie({payload}) {
    try {
        const movies = yield API.get(endPoint.searchByGenre+payload.genreId)
        yield put({type: "MOVIE_FETCH_SUCCEEDED", payload:{movies:movies.data.data,genreId:payload.genreId,genreName:payload.genreName}});
    } catch (e) {
        console.log(e)
    }
 }

function* fetchMovieById({payload}) {
    try {
        const movie = yield API.get(endPoint.getMovieById+payload)
        console.log(movie,"payload SELECT_MOVIE_REQUESTED movie")
        yield put({type: "MOVIE_DETAIL_FETCH_SUCCEEDED", movie:movie.data.data});
    } catch (e) {
        console.log(e)
    }
 }

function* fetchMoviewReview(payload) {
    try {
        const movie = yield API.get(endPoint.getReviewByMovieId+payload)
        console.log(movie,"payload fetchMoviewReview")
        // yield put({type: "MOVIE_DETAIL_FETCH_SUCCEEDED", movie:movie.data.data});
    } catch (e) {
        console.log(e)
    }
 }

export function* movieWatcher() {
    yield all([takeLatest('GENRE_FETCH_REQUESTED', fetchGenre),
    takeLatest('SELECT_GENRE_REQUESTED', fetchMovie),
    takeLatest('SELECT_MOVIE_REQUESTED', fetchMovieById)]);
}
