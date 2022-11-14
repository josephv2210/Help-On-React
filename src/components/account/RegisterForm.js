import { Image, Text, View, TextInput, TouchableHighlight } from 'react-native'
// import Checkbox from 'expo-checkbox';
import CheckBox from "expo-checkbox";
import styles from './styles';
import gStyles from '../../styles/generalStyles';
import React, { Component, useState } from 'react'

function Check(params) {
    const [isChecked, setChecked] = useState(true);

    params = isChecked;

    return (
        <View style={gStyles.formCheckBox}>
            <CheckBox
                style={gStyles.inputCheckBox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#C96C26' : undefined}
            />
            <Text style={gStyles.labelCheck}>Acepto terminos y condiciones</Text>
        </View>
    );
}

export default class RegisterForm extends Component {
    
    state = {
        email: '',
        password: '',
        terms: true
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

                        <Check
                            isChecked='true'
                        />

                        <TouchableHighlight onPress={this.googleRegister}>
                            <Image
                                style={styles.googleImage}
                                source={require('../../../src/assets/Icons/google-plus.png')}
                            />
                        </TouchableHighlight>
                        <Text style={gStyles.labelCheck}>Iniciar sesión por otro metodo</Text>

                        <TouchableHighlight style={gStyles.standarButton} onPress={this.onSubmitEdit}>
                            <Text style={gStyles.standarButtonLabel}>REGISTRARSE</Text>
                        </TouchableHighlight>

                        

                    </View>
                </View>
            </View>
        )
    }
}