import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Home, Profile, Reviews } from '../screens';
import Colors from '../config/Colors';

const Tab = createBottomTabNavigator();


const MainTab = () => {
    return (
        <Tab.Navigator 
            initialRouteName="Home"
            tabBarOptions={{
                showLabel: false,
                activeTintColor: Colors.red,
                inactiveTintColor: Colors.darkGray,
                keyboardHidesTabBar: true
            }}
        >
            <Tab.Screen 
                name="Reviews" 
                component={Reviews} 
                options={{
                    tabBarIcon: ({ color , size}) => (
                        <Icon name="chatbubble-outline" color={color} size={size}/>
                    ),
                }}
            />
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarIcon: ({ color, size}) => (
                        <Icon name="home" color={color} size={size}/>
                    ),
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={Profile} 
                options={{
                    tabBarIcon: ({ color , size}) => (
                        <Icon name="people" color={color} size={size}/>
                    ),
                    tabBarVisible:true,
                }}
                
            />
        </Tab.Navigator>
    )
}

export default MainTab

