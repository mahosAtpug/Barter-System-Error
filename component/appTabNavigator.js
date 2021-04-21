import React from "react"
import {Image} from "react-native"
import {createBottomTabNavigator } from "react-navigation-tabs"
import ExchangeScreen from "../screens/exchangeScreen"
import HomeScreen from "../screens/homeScreen"

export const AppTabNavigator  = createBottomTabNavigator({
    DonateBooks:{
        screen:HomeScreen,
        navigationOptions:{
            tabBarIcon:<Image source={require("../assets/Barter.png")} style={{width:20 , height:20}} />,
            tabBarLabel:"Home Screen"
        }
    },

    RequestBooks:{
        screen:ExchangeScreen,
        navigationOptions:{
            tabBarIcon:<Image source={require("../assets/Barter.png")} style={{width:20 , height:20}}/>,
            tabBarLabel:"Exchange Screen"
        }
    }
})