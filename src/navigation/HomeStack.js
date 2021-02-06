import { createStackNavigator } from '@react-navigation/stack';

import React from 'react'
import { Movie, Home } from '../screens';
import { connect } from 'react-redux'
import AuthStack from './AuthStack';

const Stack = createStackNavigator();

const HomeStack = (props) => (
  <Stack.Navigator initialRouteName="home" headerMode="none">
    <Stack.Screen name="home" component={Home} />
    <Stack.Screen name="movie" component={Movie} />
    <Stack.Screen name="AuthStack" component={props.token===''?AuthStack:Movie} />
  </Stack.Navigator>
);

const mapStateToProps = (state) => ({
  token : state.authReducer.token
})

const mapDispatchToProps = {
  
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeStack);