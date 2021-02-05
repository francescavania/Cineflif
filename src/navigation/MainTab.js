import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Home, Profile, Reviews } from '../screens';
import Colors from '../config/Colors';
import HomeStack from './HomeStack';
import AuthStack from './AuthStack';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux'

const Tab = createBottomTabNavigator();

const MainTab = (props) => {
    return (
        <Tab.Navigator 
            initialRouteName="homeStack"
            tabBarOptions={{
                showLabel: false,
                activeTintColor: Colors.red,
                inactiveTintColor: Colors.darkGray,
                keyboardHidesTabBar: true
            }}
            
        >
            <Tab.Screen 
                name="Reviews" 
                component={props.token===''?AuthStack : Reviews} 
                options={{
                    tabBarIcon: ({ color , size}) => (
                        <Icon name="chatbubble-outline" color={color} size={size}/>
                    ),
                }}
            />
            <Tab.Screen 
                name="homeStack" 
                component={HomeStack} 
                options={{
                    tabBarIcon: ({ color, size}) => (
                        <Icon name="home" color={color} size={size}/>
                    ),
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={props.token===''?AuthStack : Profile}  
                options={{
                    tabBarIcon: ({ color , size}) => (
                        <Icon name="people" color={color} size={size}/>
                    ),       
                }}
                
            />
        </Tab.Navigator>
    )
}

const mapStateToProps = (state) => ({
    token : state.authReducer.token
})

const mapDispatchToProps = {
    
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainTab);

