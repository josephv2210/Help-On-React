import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../pages/menu/home/Home'
import ProjectDetails from '../pages/project/projectDetails/ProjectDetails'
import ProjectList from '../pages/project/projectList/ProjectList'


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
                name="projectDetails"
                component={ProjectDetails}
                options={{
                    title: "Detalle del proyecto"
                }}
            />
            <Stack.Screen
                name="projectList"
                component={ProjectList}
                options={{
                    title: "Listas de proyectos"
                }}
            />
        </Stack.Navigator>
    )
}