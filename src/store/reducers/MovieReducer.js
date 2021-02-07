const initialState= {
    movies : [],
    genres : [],
    selectedGenre:'',
    selectedGenreName:'',
    selectedMovie:{},
    reviews:[]
}

export default (state = initialState , action) => {
    // console.log(action,"masuk reducer")
    switch (action.type){
        case 'GENRE_FETCH_SUCCEEDED':
            return {
                ...state,
                genres:action.genres.data,
                selectedGenre : action.genres.data[0]._id,
                selectedGenreName : action.genres.data[0].genre
            }
        case 'MOVIE_FETCH_SUCCEEDED':
            return {
                ...state,
                selectedGenre:action.payload.genreId,
                selectedGenreName:action.payload.genreName,
                movies:action.payload.movies
            }
        case 'MOVIE_DETAIL_FETCH_SUCCEEDED':
            return {
                ...state,
                selectedMovie:action.movie
            }
        case 'SEARCH_MOVIE_FETCH_SUCCEEDED':
            return {
                ...state,
                movies:action.movie,
                selectedGenreName: "-"
            }
        case 'MOVIE_REVIEW_SUCCEEDED':
            return {
                ...state,
                reviews:action.movie,
                
            }
        default:
            return state;
    }
}