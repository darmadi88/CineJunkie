import React from 'react'
import { View, Text, Image, StyleSheet, ActivityIndicator, TouchableNativeFeedback } from 'react-native'
// import { Image } from 'react-native-elements'

export default function MovieItem({ movie, onPress }) {
    return (
        <TouchableNativeFeedback onPress={onPress}>
            <View style={styles.itemContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                        style={{ width: '100%', aspectRatio: 2 / 3, }}
                        resizeMode="cover"
                        PlaceholderContent={<ActivityIndicator />}
                    />
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.title}>{movie.title}</Text>
                </View>
            </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        margin: 8,
        marginBottom: 0,
        flex: 1,
    },
    imageContainer: {
        elevation: 2,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#ccc'
    },
    detailContainer: {
        flexDirection: 'column',
        flex: 1,
        paddingVertical: 8,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
})
