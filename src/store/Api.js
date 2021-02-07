import axios from 'axios';

export default axios.create({
  baseURL: 'https://cineflix-dev.herokuapp.com'
});


export const endPoint = {
    searchByTitle: '/api/movies/search?search=',
    searchByTag: '/api/movies/tag?tag=',
    searchByGenre: '/api/movies/category?id=',
    getMovieById: '/api/movies/id?id=',

    getReviewByMovieId: '/api/review/open/movie?movieId=',
    getAllGenres:'/api/movies/category/all',


    signUpUser: '/api/users/register',
    getUser: '/api/users/profile',
    loginUser: '/api/users/login',
    updateUser:'/api/users/update',

    createReview: '/api/review/create',
    getReviewByUsername: '/api/review/open/user',
    deleteReviewById: '/api/review/delete?id=',
    
    
}
