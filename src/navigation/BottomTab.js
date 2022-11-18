import React from "react";
import Svg, { G, Path, Rect } from 'react-native-svg';
import Home from "../pages/menu/home/Home";
import Search from "../pages/menu/search/Search";
import Create from "../pages/menu/create/Create"
import Notification from "../pages/menu/notification/Notification";
import Profile from "../pages/menu/profile/Profile";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import Login from "../pages/auth/login/Login";
import AccountStack from "./AccountStack"

const Tab = createBottomTabNavigator();

export const BottomTab = () => {

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    innactiveTintColor: "#857B7C",
                    activeTintColor: "#231E1A",
                    title: 'Help On'
                }}
                
            >
                <Tab.Screen
                    name="Inicio"
                    component={Home}
                    options={{
                        tabBarIcon: () => (
                            <Svg
                                width="24" height="24" viewBox="0 0 24 24" fill="none"
                            >
                                <G>
                                    <Path d="M9.13478 20.7733V17.7156C9.13478 16.9351 9.77217 16.3023 10.5584 16.3023H13.4326C13.8102 16.3023 14.1723 16.4512 14.4393 16.7163C14.7063 16.9813 14.8563 17.3408 14.8563 17.7156V20.7733C14.8539 21.0978 14.9821 21.4099 15.2124 21.6402C15.4427 21.8705 15.7561 22 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0008C21.1356 20.3588 21.5 19.487 21.5 18.5778V9.86686C21.5 9.13246 21.1721 8.43584 20.6046 7.96467L13.934 2.67587C12.7737 1.74856 11.1111 1.7785 9.98539 2.74698L3.46701 7.96467C2.87274 8.42195 2.51755 9.12064 2.5 9.86686V18.5689C2.5 20.4639 4.04738 22 5.95617 22H7.87229C8.55123 22 9.103 21.4562 9.10792 20.7822L9.13478 20.7733Z" fill="#857B7C" />
                                </G>
                            </Svg>
                        )
                    }}
                />
                <Tab.Screen
                    name="Crear nuevo proyecto"
                    component={Create}
                    options={{
                        tabBarIcon: () => (
                            <Svg
                                width="56" height="100" viewBox="0 8 56 56" fill="none" 
                            >
                                <G >
                                    <Rect width="56" height="56" rx="28" fill="#C96C26" />
                                    <Path d="M28 22L28 34" stroke="white" stroke-width="2" stroke-linecap="round" />
                                    <Path d="M34 28L22 28" stroke="white" stroke-width="2" stroke-linecap="round" />
                                </G>
                            </Svg>
                        ),
                        title: 'Crear nuevo proyecto'
                    }}
                />
                <Tab.Screen
                    name="Perfil"
                    component={AccountStack}
                    headerShown = {false}
                    options={{
                        headerShown: false,
                        tabBarIcon: () => (
                            <Svg
                                width="24" height="24" viewBox="0 0 24 24" fill="none"
                            >
                                <G>
                                    <Path d="M21 21C20.44 19.08 17.5 15 12 15C6.5 15 3.56 19.08 3 21" stroke="#857B7C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <Path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#857B7C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </G>
                            </Svg>
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}