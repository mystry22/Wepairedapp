import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import ChatScreen from "../Screens/auth/ChatScreen";
import ChatScreenDef from "../Screens/auth/ChatScreenForDefChannels";
import TabMenu from "./TabMenu";


const Nav = createStackNavigator();
const ChatMenu = () => {
    
    return(
        <Nav.Navigator screenOptions={{
            headerShown:false
        }}
        initialRouteName='Home'
        >
            <Nav.Screen name="Tabmenu" component={TabMenu} />
            <Nav.Screen name="ChatScreen"  component={ChatScreen} />
            <Nav.Screen name="ChatScreenDef"  component={ChatScreenDef} />
         
        </Nav.Navigator>
    )
}

export default ChatMenu;