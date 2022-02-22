import {
    GET_MOVIES,
    GET_MOVIE,
    SET_LOADING,
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_MOVIES: 
            return {
                ...state,
                movies: action.payload,
                loading: false,
            }
        case GET_MOVIE:
            return {
                ...state,
                movie: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}