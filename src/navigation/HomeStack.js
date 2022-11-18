import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Register from '../pages/auth/register/Register'
import Login from '../pages/auth/login/Login'
import Home from '../pages/menu/home/Home'
import ProjectDatails from '../pages/project/projectDetails/ProjectDetails'


const Stack = createStackNavigator()

export default function HomeStack() {
    return (
        <Stack.Navigator
            initialRouteName="home"
        >
            <Stack.Screen
                name="home"
                component={Home}
                options={{
                    title: "¿A quien quieres ayudar hoy?"
                }}
            />
            <Stack.Screen
                name="projectDetail"
                component={ProjectDatails}
                options={{
                    title: "Detalle del proyecto"
                }}

            />
        </Stack.Navigator>
    )
}