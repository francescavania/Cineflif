const initialState= {
    movies : [],
    genres : [],
}

export default (state = initialState , action) => {
    console.log(action,"actiongenre")
    switch (action.type){
        case 'GENRE_FETCH_SUCCEEDED':
            return {
                ...state,
                genres:action.genres.data
            }
        case 'MOVIE_FETCH_SUCCEEDED':
            return {
                ...state,
                movies:payload.movies
            }
        default:
            return state;
    }
}