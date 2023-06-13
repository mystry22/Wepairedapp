import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import Onboard1 from "../Screens/notAuth/Onboarding";
import Onboard2 from "../Screens/notAuth/Onboarding2";
import Onboard3 from "../Screens/notAuth/Onboarding3";
import Signin from "../Screens/notAuth/Signin";
import Signup1 from "../Screens/notAuth/Signup1";
import ChangePassword from "../Screens/notAuth/ChangePassword";
import EnterPassword from "../Screens/notAuth/EnterPassword";
import PasswordOTP from "../Screens/notAuth/PasswordOTP";

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
        <Nav.Screen name="Signin1" component={Signin} />
        <Nav.Screen name="Signup1" component={Signup1} />
        <Nav.Screen name="ChangePassword" component={ChangePassword} />
        <Nav.Screen name="EnterPassword" component={EnterPassword} />
        <Nav.Screen name="PasswordOTP" component={PasswordOTP} />
        
    </Nav.Navigator>
  )
}

export default OnboadingMenu;