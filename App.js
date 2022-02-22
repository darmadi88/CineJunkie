import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MovieList from './src/screens/movieList';

import MoviesState from './src/context/movies/MoviesState';
import MovieDetail from './src/screens/movieDetail';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <MoviesState>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Movie List" component={MovieList} />
          <Stack.Screen name="Movie Detail" component={MovieDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </MoviesState>
  );
};

export default App;
