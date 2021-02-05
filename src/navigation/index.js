import 'react-native-gesture-handler'
import React from 'react';
import AuthStack from './AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import MainTab from './MainTab';
import { navigationRef } from './RootNavigation';

const Navigation = () =>{
  return (
    <NavigationContainer ref={navigationRef}>
        {/* <AuthStack/> */}
        <MainTab/>
    </NavigationContainer>
  )
};

export default Navigation;