import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Register from '../pages/auth/register/Register'
import Login from '../pages/auth/login/Login'


const Stack = createStackNavigator()

export default function AccountStack() {
    return (
        <Stack.Navigator
            initialRouteName="register"
        >
            <Stack.Screen
                name="login"
                component={Login}
                options={{
                    title: "Iniciar Sesión"
                }}
            />
            <Stack.Screen
                name="register"
                component={Register}
                options={{
                    title: "Registrarse"
                }}

            />
        </Stack.Navigator>
    )
}