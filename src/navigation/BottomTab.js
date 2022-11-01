import React from "react";
import Home from "../pages/menu/home/Home";
import Search from "../pages/menu/search/Search";
import Create from "../pages/menu/create/Create"
import Notification from "../pages/menu/notification/Notification";
import Profile from "../pages/menu/profile/Profile";

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component = {Home} />
            <Tab.Screen name="Search" component = {Search} />
            <Tab.Screen name="Create" component = {Create} />
            <Tab.Screen name="Notification" component = {Notification} />
            <Tab.Screen name="Profile" component = {Profile} />
        </Tab.Navigator>
    );
}