import 'react-native-gesture-handler'
import React from 'react';
import AuthStack from './AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import MainTab from './MainTab';

const Navigation = () =>{
  return (
    <NavigationContainer>
        <AuthStack/>
        {/* <MainTab/> */}
    </NavigationContainer>
  )
};

export default Navigation;