const initialState = {
    movies: [],
    movie: {},
    loading: false,
}

const moviesReducer = (state = initialState, action) => {
    console.log('action ::', action)
    
    switch (action.type) {
        case "SEARCH_MOVIES":
            console.log('search ::', action)
            return {
                ...state,
                movies: action.payload,
                loading: false
            };
        // case "GET_MOVIE":
        //     return state - 1;
        // case "CLEAR_MOVIES":
        //     return state - 1;
        // case "SET_LOADING":
        //     return state - 1;
        default:
            return state;
    }
}

export default moviesReducer;