import { createStackNavigator } from '@react-navigation/stack';

import React from 'react'
import { Movie, Home } from '../screens';

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="home" headerMode="none">
    <Stack.Screen name="home" component={Home} />
    <Stack.Screen name="movie" component={Movie} />
  </Stack.Navigator>
);

export default HomeStack;