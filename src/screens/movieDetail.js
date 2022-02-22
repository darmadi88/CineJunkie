import React, { useContext, useEffect } from 'react'
import { View, Image, Text, ActivityIndicator, StyleSheet, ScrollView } from 'react-native'
import MoviesContext from '../context/movies/moviesContext';
// import { Image, Rating } from 'react-native-elements'

export default function MovieDetail({ navigation }) {
    const moviesContext = useContext(MoviesContext);
    const { movie } = moviesContext;

    return (
        <ScrollView>
            <View>
                <Image
                    source={{ uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` }}
                    style={{ width: '100%', aspectRatio: 2.5, padding: 0, margin: 0 }}
                    resizeMode="cover"
                    PlaceholderContent={<ActivityIndicator />}
                />
                <View style={styles.headerContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                            style={{ width: 100, height: 150 }}
                            resizeMode="contain"
                            PlaceholderContent={<ActivityIndicator />}
                        />
                    </View>
                    <View style={styles.headerTextContainer}>
                        <Text style={styles.title}>{movie.title}</Text>
                        {
                            movie.tagline != "" && <Text style={styles.subTitle}>{movie.tagline}</Text>
                        }
                        <View style={{paddingTop: 16, paddingBottom: 8}}>
                            <View style={styles.headerTable}>
                                <Text style={{ flex: 1, fontWeight: 'bold' }}>Genres</Text>
                                <Text style={{ flex: 2 }}>{movie.genres.map(genre => genre.name).join(", ")}</Text>
                            </View>
                            <View style={styles.headerTable}>
                                <Text style={{ flex: 1, fontWeight: 'bold' }}>Language</Text>
                                <Text style={{ flex: 2 }}>{movie.original_language}</Text>
                            </View>
                            <View style={styles.headerTable}>
                                <Text style={{ flex: 1, fontWeight: 'bold' }}>Release</Text>
                                <Text style={{ flex: 2 }}>{movie.release_date}</Text>
                            </View>
                            <View style={styles.headerTable}>
                                <Text style={{ flex: 1, fontWeight: 'bold' }}>Production</Text>
                                <Text style={{ flex: 2 }}>{movie.production_companies.map(company => company.name).join(", ")}</Text>
                            </View>
                        </View>
                    </View>

                </View>
                <View style={styles.bodyContainer}>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.sectionTitle}>Rating</Text>
                        <Text style={styles.ratingAverage}>{parseFloat(movie.vote_average)}</Text>
                        {/* <Rating
                            imageSize={24}
                            readonly
                            type='custom'
                            ratingBackgroundColor='white'
                            tintColor="#f1f1f1"
                            ratingColor='#3498db'
                            startingValue={movie.vote_average / 2}
                            style={styles.ratings} /> */}
                        <Text>({movie.vote_count})</Text>
                    </View>
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={styles.sectionTitle}>Overview</Text>
                    <Text>{movie.overview}</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        paddingHorizontal: 16,
        flexDirection: 'row',
        top: -30,
    },
    imageContainer: {
        elevation: 3,
        width: 100,
        borderRadius: 8,
        overflow: 'hidden',
        aspectRatio: 2/3,
        backgroundColor: "#ccc"
    },
    headerTextContainer: {
        top: 40,
        paddingLeft: 16,
        flex: 1,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    subTitle: {
        fontSize: 17
    },
    headerTable: {
        flexDirection: 'row'
    },
    bodyContainer: {
        padding: 16,
        paddingBottom: 0,
    },
    sectionTitle: {
        fontWeight: 'bold',
        marginRight: 16
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    ratingAverage: {
        color: '#3498db',
        fontWeight: 'bold',
        fontSize: 20,
        marginRight: 8,
    },
    ratings: {
        marginRight: 8,
    }
})