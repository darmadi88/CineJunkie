import React, { useState, useContext, useEffect } from 'react'
import { View, FlatList } from 'react-native'
import MovieItem from '../components/atoms/MovieItem'
import MoviesContext from '../context/movies/moviesContext';

export default function MovieList({ navigation }) {
    const [page, setPage] = useState(1)

    const moviesContext = useContext(MoviesContext);
    const { movies, getMovies, getMovie } = moviesContext;

    useEffect(() => {
        getMovies(page);
        setPage(page + 1);
    }, [])

    const goToMovieDetail = async (movieId) => {
        getMovie(movieId).then(() =>
            navigation.navigate("Movie Detail")
        );
    }

    const handleLoadMore = () => {
        getMovies(page);
        setPage(page + 1);
    }

    return (
        <View style={{ height: '100%' }}>
            <FlatList
                data={movies}
                onEndReached={() => handleLoadMore()}
                numColumns={2}
                columnWrapperStyle={{ flexWrap: 'wrap', padding: 8 }}
                renderItem={({ item }) => <MovieItem movie={item} key={item.id} onPress={() => goToMovieDetail(item.id)} />}
            />
        </View>
    )
}
