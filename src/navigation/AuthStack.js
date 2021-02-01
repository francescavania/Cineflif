import { createStackNavigator } from '@react-navigation/stack';

import React from 'react'
import { Login, Register } from '../screens';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            headerMode="none"
            initialRouteName="auth"
        >
            <Stack.Screen name="auth" component={Login} />
            <Stack.Screen name="register" component={Register} />
        </Stack.Navigator>
    )
}

export default AuthStack
