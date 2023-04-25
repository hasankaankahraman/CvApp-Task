import React from "react";
import { View,Text,StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import {DrawerContent} from './Pages/DrawerContent';


import Login from './Pages/Login';
import SignUP from "./Pages/SignUp";
import TechInfo from "./Pages/TechInfo";
import SplashScreenImage from "./Pages/Splash";
import Publisher from "./Pages/PublisherInfo";
import ProfileInfo from "./Pages/ProfileInfo";


const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const DrawerNav = createDrawerNavigator();


function Drawer(){
  return(
    <DrawerNav.Navigator drawerContent={props => <DrawerContent {...props}/>} screenOptions={{headerShown:false}}>
      <DrawerNav.Screen name="Hakkımızda" component={Publisher}/>
    </DrawerNav.Navigator>
  )
}

function Tab(){
  return(
    <BottomTab.Navigator screenOptions={{headerShown:false}}>
      <BottomTab.Screen name="TechInfo" component={TechInfo}/>
      <BottomTab.Screen name="Dashboard" component={Drawer}/>
      {/* <BottomTab.Screen name="ProfileInfo" component={ProfileInfo}/> */}
    </BottomTab.Navigator>
  )
}

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreenImage}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="SignUp" component={SignUP}/>
        <Stack.Screen name="Tab" component={Tab}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

