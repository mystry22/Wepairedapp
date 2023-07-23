import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screens/auth/Home'
import CreateCommunity from "../Screens/auth/CreateCommunity";

const Nav = createStackNavigator();
const HomeStack = () => {
    return(
        <Nav.Navigator screenOptions={{
            headerShown:false
        }}
        initialRouteName='Home_Screen'
        >
            <Nav.Screen name="Home_Screen"  component={Home}/>
            <Nav.Screen name="CreateCommunity"  component={CreateCommunity}/>
         
        </Nav.Navigator>
    )
}

export default HomeStack;