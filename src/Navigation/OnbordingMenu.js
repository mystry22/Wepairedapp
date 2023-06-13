import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import Onboard1 from "../Screens/notAuth/Onboarding";
import Onboard2 from "../Screens/notAuth/Onboarding2";
import Onboard3 from "../Screens/notAuth/Onboarding3";

const Nav = createStackNavigator();
const OnboadingMenu = () => {
  return (
    <Nav.Navigator screenOptions={{
        headerShown:false
    }}
    initialRouteName='Onboard'
    >
        <Nav.Screen name="Onboard1"  component={Onboard1}/>
        <Nav.Screen name="Onboard2"  component={Onboard2}/>
        <Nav.Screen name="Onboard3"  component={Onboard3}/>
        
    </Nav.Navigator>
  )
}

export default OnboadingMenu;