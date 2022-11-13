import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native'
// import Checkbox from 'expo-checkbox';
import styles from './styles';
import gStyles from '../../styles/generalStyles';

import React, { Component } from 'react'

export default class RegisterForm extends Component {

    state = {
        nameProyect: '',
        email: '',
        password: '',
        terms: false
    }

    onSubmitEdit = () => {
        console.log(this.state)
    }

    handleNameProyect = (text) => {
        this.setState({ nameProyect: text })
    }
    handleEmail= (text) => {
        this.setState({ email: text })
    }
    handlePassword= (text) => {
        this.setState({ password: text })
    }
    handleTerms= () => {
        this.setState({ terms: !terms })
    }

    render() {
        return (
            <View>
                <View style={gStyles.formContainer}>
                    <View style={gStyles.formContent} >

                        <View style={gStyles.formTextInput}>
                            <Text style={gStyles.labelInput}>Nombre</Text>
                            <TextInput
                                style={gStyles.inputPlaceholder}
                                placeholder="Nombre"
                                keyboardType="default"
                                placeholderTextColor="#B9BCBE"
                                autoCapitalize="none"
                                onChangeText={this.handleNameProyect}
                            />
                        </View>

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
                        
                        {/* <View style={gStyles.formCheckBox}>
                            <Text style={gStyles.labelInput}>Contraseña</Text>
                            <Checkbox
                                style={gStyles.inputPlaceholder}
                                onChangeValue={this.handlePassword}
                                value={this.state.terms}
                                secureTextEntry={true}
                                color={isChecked ? '#4630EB' : undefined}
                            />
                        </View> */}


                        <TouchableHighlight style={gStyles.standarButton} onPress={this.onSubmitEdit}>
                            <Text style={gStyles.standarButtonLabel}>REGISTRARSE</Text>
                        </TouchableHighlight>

                    </View>
                </View>
            </View>
        )
    }
}