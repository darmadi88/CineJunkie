import React, { useReducer } from 'react';
import MoviesContext from './moviesContext';
import MoviesReducer from './moviesReducer';
import {
    GET_MOVIES,
    GET_MOVIE,
    SET_LOADING,
} from '../types';

const MoviesState = props => {
    const initialState = {
        movies: [],
        movie: {},
        genres: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(MoviesReducer, initialState);

    // get movies
    const getMovies = async (page = 1, params = "") => {
        setLoading(true);
        
        const baseUrl = "https://api.themoviedb.org/3";
        const apiKey = "a3e128b42fdf8991f9609b48eb6c487b";
        const options = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json;charset=UTF-8"
            },
        };

        const url = `${baseUrl}/discover/movie?api_key=${apiKey}&page=${page}`;
        const fullUrl = url + params;

        await fetch(fullUrl, options)
            .then(resp => resp.json())
            .then(data => {
                console.log('get movies', data);
                dispatch({
                    type: GET_MOVIES,
                    payload: [...state.movies, ...data.results]
                })
            });
    }

    // get movie data
    const getMovie = async (movieId) => {
        const baseUrl = "https://api.themoviedb.org/3";
        const apiKey = "a3e128b42fdf8991f9609b48eb6c487b";
        const options = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json;charset=UTF-8"
            },
        };

        const url = `${baseUrl}/movie/${movieId}?api_key=${apiKey}`;

        await fetch(url, options)
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                dispatch({
                    type: GET_MOVIE,
                    payload: data
                })
            });
    }

    // set loading to true
    const setLoading = (payload) => {
        dispatch({ type: SET_LOADING, payload })
    }

    return <MoviesContext.Provider
        value={{
            movies: state.movies,
            movie: state.movie,
            genres: state.genres,
            loading: state.loading,
            getMovies,
            getMovie,
            setLoading,
        }}
    >
        {props.children}
    </MoviesContext.Provider>
}

export default MoviesState;