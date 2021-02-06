const initialState= {
    movies : [],
    genres : [],
    selectedGenre:'',
    selectedGenreName:'',
    selectedMovie:{}
}

export default (state = initialState , action) => {
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
        default:
            return state;
    }
}