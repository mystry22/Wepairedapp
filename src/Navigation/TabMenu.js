import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from "../Screens/auth/Home";
import Profile from "../Screens/auth/Profile";
import Community from "../Screens/auth/Community";
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

            <Nav.Screen name="Community" component={Community} options={{
                tabBarIcon: () => (
                    <View style={style.allig}>
                        <Ionicons name='people-outline' size={28} color={colors.dark} />
                        <Text style={style.menuText}>Community</Text>
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