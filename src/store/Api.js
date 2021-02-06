import axios from 'axios';

export default axios.create({
  baseURL: 'https://cineflixmovieapp.herokuapp.com'
});


export const endPoint = {
    searchByTitle: '/api/movies/search',
    searchByTag: '/api/movies/tag?tag=',
    searchByGenre: '/api/movies/category?id=',

    getReviewByMovieId: '/api/review/open/movie?movieId=',
    getAllGenres:'/api/movies/category/all',


    signUpUser: '/api/users/register',
    getUser: '/api/users/profile',
    loginUser: '/api/users/login',

    createReview: '/api/review/create',
    getReviewByUserId: '/api/review/open/id?id=',
    deleteReviewById: '/api/review/delete?id=',
    
    
}

// export default url