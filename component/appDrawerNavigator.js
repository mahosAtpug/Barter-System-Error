import React from "react";
import {createDrawerNavigator} from "react-navigation-drawer";
import {AppTabNavigator} from "./AppTabNavigator";
import {CustomSideBarMenu} from "./customSideBarMenu";
import SettingScreen from "../screens/settingScreen"

export const AppDrawerNavigator = createDrawerNavigator({
   
    Home : {
        screen:AppTabNavigator
    },

 },

 {
    contentComponent : CustomSideBarMenu
 },
 
 {
     initialRouteName : "Home" 
 }
)