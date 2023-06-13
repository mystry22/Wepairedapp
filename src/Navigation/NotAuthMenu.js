import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Signin from "../Screens/notAuth/Signin";
import Signup1 from "../Screens/notAuth/Signup1";
import ChangePassword from "../Screens/notAuth/ChangePassword";
import EnterPassword from "../Screens/notAuth/EnterPassword";
import PasswordOTP from "../Screens/notAuth/PasswordOTP";

const Nav = createStackNavigator();

const NotAuthNav = () => {

    return (
        <Nav.Navigator screenOptions={{
            headerShown: false
        }}
            initialRouteName='Signin1'
        >

            <Nav.Screen name="Signin1" component={Signin} />
            <Nav.Screen name="Signup1" component={Signup1} />
            <Nav.Screen name="ChangePassword" component={ChangePassword} />
            <Nav.Screen name="EnterPassword" component={EnterPassword} />
            <Nav.Screen name="PasswordOTP" component={PasswordOTP} />

        </Nav.Navigator>
    )
}

export default NotAuthNav;