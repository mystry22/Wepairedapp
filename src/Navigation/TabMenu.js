import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Home from "../Navigation/HomeCommunityMenu";
import Profile from "../Screens/auth/Profile";
import VideoConference from '../Screens/auth/VideoConference';
import Chat from "../Navigation/ChatMenu";
import colors from "../Utils/color";
const Nav = createBottomTabNavigator();

const TabMenu = () => {
    return (
        <Nav.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,


        }}>
            <Nav.Screen name="Home" component={Home} options={{
                tabBarIcon: () => (
                    <View style={style.allig}>
                        <Ionicons name='home-outline' size={28} color={colors.dark} />
                        <Text style={style.menuText}>Home</Text>
                    </View>

                )
            }} />

            <Nav.Screen name="Chating" component={Chat} options={{
                tabBarIcon: () => (
                    <View style={style.allig}>
                        <Ionicons name='chatbox-outline' size={28} color={colors.dark} />
                        <Text style={style.menuText}>Chat</Text>
                    </View>
                )
            }} />

            <Nav.Screen name="VideoConference" component={VideoConference} options={{
                tabBarIcon: () => (
                    <View style={style.allig}>
                        <AntDesign name='videocamera' size={28} color={colors.dark} />
                        <Text style={style.menuText}>Video</Text>
                    </View>
                )
            }} />

            <Nav.Screen name="Profile" component={Profile} options={{
                tabBarIcon: () => (
                    <View style={style.allig}>
                        <Ionicons name='person-outline' size={28} color={colors.dark} />
                        <Text style={style.menuText}>Profile</Text>
                    </View>
                )
            }} />


        </Nav.Navigator>
    )
}

export default TabMenu;
const style = StyleSheet.create({
    allig: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    menuText: {
        color: colors.dark,
        fontWeight: '700',
        alignSelf: 'center'
    }
})