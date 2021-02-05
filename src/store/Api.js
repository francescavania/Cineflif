import axios from 'axios';

export default axios.create({
  baseURL: 'https://cineflixmovieapp.herokuapp.com'
});


export const endPoint = {
    searchByTitle: '/api/movies/search',
    searchByTag: '/api/movies/tag?tag=',
    searchByCategory: '/api/movies/category?genre=',

    getReviewByMovieId: '/api/review/open/movie?movieId=',


    signUpUser: '/api/users/register',
    getUser: '/api/users/profile',
    loginUser: '/api/users/login',

    createReview: '/api/review/create',
    getReviewByUserId: '/api/review/open/id?id=',
    deleteReviewById: '/api/review/delete?id=',
    
    
}

// export default url