import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import Chat from "../Screens/auth/Chat";
import ChatScreen from "../Screens/auth/ChatScreen";
import ChatScreenDef from "../Screens/auth/ChatScreenForDefChannels";

const Nav = createStackNavigator();
const ChatMenu = () => {
    
    return(
        <Nav.Navigator screenOptions={{
            headerShown:false
        }}
        initialRouteName='Chat'
        >
            <Nav.Screen name="Chat"  component={Chat}/>
            <Nav.Screen name="ChatScreen"  component={ChatScreen} />
            <Nav.Screen name="ChatScreenDef"  component={ChatScreenDef} />
         
        </Nav.Navigator>
    )
}

export default ChatMenu;