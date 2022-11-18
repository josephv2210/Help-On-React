import { Image, Text, View, TextInput, TouchableHighlight, Alert } from 'react-native'
// import Checkbox from 'expo-checkbox';
import styles from './styles';
import gStyles from '../../styles/generalStyles';
import React, { Component, useState } from 'react'

const showAlert = () =>
  Alert.alert(
    "invalid-oauth-client-id: ",
    "The OAuth client ID provided is either invalid or does not match the specified API key.",
    [
      {
        text: "OK",
        style: "cancel",
      },
    ],
    {
      cancelable: true,
    }
  );

  const Alert2 = () =>
  Alert.alert(
    "network-request-failed: ",
    "A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
    [
      {
        text: "OK",
        style: "cancel",
      },
    ],
    {
      cancelable: true,
    }
  );
export default class LogingForm extends Component {
    state = {
        email: '',
        password: ''
    }

    onSubmitEdit = () => {
        // this.setState({ terms: this.isChecked })
        console.log(this.state)
    }

    handleEmail = (text) => {
        this.setState({ email: text })
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }


    googleRegister = () => {
        console.log("Inicia registro con google")
    }

    render() {
        return (
            <View>
                <View style={gStyles.formContainer}>
                    <View style={gStyles.formContent} >

                        <View style={gStyles.formTextInput}>
                            <Text style={gStyles.labelInput}>Correo</Text>
                            <TextInput
                                style={gStyles.inputPlaceholder}
                                placeholder="Correo"
                                keyboardType="email"
                                placeholderTextColor="#B9BCBE"
                                autoCapitalize="none"
                                onChangeText={this.handleEmail}
                            />
                        </View>

                        <View style={gStyles.formTextInput}>
                            <Text style={gStyles.labelInput}>Contraseña</Text>
                            <TextInput
                                style={gStyles.inputPlaceholder}
                                placeholder="Contraseña"
                                keyboardType="password"
                                placeholderTextColor="#B9BCBE"
                                autoCapitalize="none"
                                onChangeText={this.handlePassword}
                                secureTextEntry={true}
                            />
                        </View>

                        <TouchableHighlight onPress={Alert2}>
                            <Image
                                style={styles.googleImage}
                                source={require('../../../src/assets/Icons/google-plus.png')}
                            />
                        </TouchableHighlight>
                        <Text style={gStyles.labelCheck}>Iniciar sesión por otro metodo</Text>

                        <TouchableHighlight style={gStyles.standarButton} onPress={showAlert}>
                            <Text style={gStyles.standarButtonLabel}>INICIAR SESIÓN</Text>
                        </TouchableHighlight>



                    </View>
                </View>
            </View>
        )
    }
}