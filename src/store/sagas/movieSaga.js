import {takeLatest, put, all, call} from 'redux-saga/effects';
import axios from "axios";
import {Alert} from 'react-native';

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
        // console.log(movie,"payload SELECT_MOVIE_REQUESTED movie")
        yield put({type: "MOVIE_DETAIL_FETCH_SUCCEEDED", movie:movie.data.data});
    } catch (e) {
        console.log(e)
    }
 }

function* fetchSearchMovie({payload}) {
    // console.log(payload,"payload search")
    try {
        const movie = yield API.get(endPoint.searchByTitle+payload)
        yield put({type: "SEARCH_MOVIE_FETCH_SUCCEEDED", movie:movie.data.data});
    } catch (e) {
        console.log(e)
    }
}

function* fetchMoviewReview({payload}) {
    // console.log(payload,"fetchMoviewReview saga ")
    try {
        const movie = yield API.get(endPoint.getReviewByMovieId+payload.movieId,{
            headers:{
                "Authorization" : "Bearer " + payload.token,
                'Content-Type': 'application/json'
            }
        })
        console.log(movie,"payload fetchMoviewReview")
            yield put({type: "MOVIE_REVIEW_SUCCEEDED", movie:movie.data.data});
    } catch (e) {
        console.log(e)
    }
 }

 function* addReview({payload}) { 
     console.log(payload,"payload addReview")
     const {movieId,token} = payload
    try {
        const review = yield API.post(endPoint.createReview,{
            movieId:payload.movieId,
            rating:payload.rating,
            review:payload.review,
        },{
            headers:{
                "Authorization" : "Bearer " + payload.token,
                'Content-Type': 'application/json'
            }
        })
        console.log(review)
        if(review.status == 200){
            Alert.alert("add revieew berhasil")
            const payload = {payload:{movieId:movieId,token:token}}
            console.log(payload,"payload mau di kirim")
            yield call(fetchMoviewReview,payload)
        }
        // if(review.status == 200){
        //     const payload = {movieId:payload.movieId,token:payload.token}
        //     console.log(payload,"payload mau di kirim")
        //     yield call(fetchMoviewReview,payload)
        // }
            // yield put({type: "MOVIE_REVIEW_SUCCEEDED", movie:movie.data.data});
    } catch (e) {
        console.log(e)
    }
 }

export function* movieWatcher() {
    yield all([takeLatest('GENRE_FETCH_REQUESTED', fetchGenre),
    takeLatest('SELECT_GENRE_REQUESTED', fetchMovie),
    takeLatest('SELECT_MOVIE_REQUESTED', fetchMovieById),
    takeLatest('SEARCH_MOVIE_REQUESTED', fetchSearchMovie),
    takeLatest('MOVIE_REVIEW_REQUESTED', fetchMoviewReview),
    takeLatest('ADD_REVIEW_REQUESTED', addReview),
]);
}
