import { Image, Text, View, TextInput, TouchableHighlight, SafeAreaView, ScrollView } from 'react-native'
import styles from './styles';
import React, { Component } from 'react'
import gStyles from '../../styles/generalStyles'

export default class CreateForm extends Component {
    state = {
        name: '',
        description: '',
        category: '',
        tags: '',
        location: '',
        doing: ''
    }

    onSubmitEdit = () => {
        // this.setState({ terms: this.isChecked })
        console.log(this.state)
    }

    handleProyectName = (text) => {
        this.setState({ name: text })
    }
    handleDescription = (text) => {
        this.setState({ description: text })
    }
    handleCategory = (text) => {
        this.setState({ category: text })
    }
    handleTags = (text) => {
        this.setState({ tags: text })
    }
    handleLocation = (text) => {
        this.setState({ location: text })
    }
    handleDoing = (text) => {
        this.setState({ doing: text })
    }

    render() {
        return (
            <View>
                <View style={[gStyles.formTextInput ]}>
                    <Text  style={[gStyles.labelInput ,styles.icontent]}>Nombre del proyecto</Text>
                    <TextInput
                        style={[gStyles.inputPlaceholder ]}
                        placeholder="Nombre del proyecto"
                        keyboardType="text"
                        placeholderTextColor="#B9BCBE"
                        autoCapitalize="none"
                        onChangeText={this.handleProyectName}
                    />
                </View>

                <View style={gStyles.formTextInput}>
                    <Text style={[gStyles.labelInput ,styles.icontent]}>Descripción</Text>
                    <TextInput
                        style={gStyles.inputPlaceholder}
                        placeholder="Descripción"
                        keyboardType="text"
                        placeholderTextColor="#B9BCBE"
                        autoCapitalize="none"
                        onChangeText={this.handleDescription}
                    />
                </View>

                <View style={gStyles.formTextInput}>
                    <Text style={[gStyles.labelInput ,styles.icontent]}>Categoria</Text>
                    <TextInput
                        style={gStyles.inputPlaceholder}
                        placeholder="Categoria"
                        keyboardType="text"
                        placeholderTextColor="#B9BCBE"
                        autoCapitalize="none"
                        onChangeText={this.handleCategory}
                    />
                </View>

                <View style={gStyles.formTextInput}>
                    <Text style={[gStyles.labelInput ,styles.icontent]}>Etiquetas (Animales, Salud, Alimento)</Text>
                    <TextInput
                        style={gStyles.inputPlaceholder}
                        placeholder="Etiquetas"
                        keyboardType="text"
                        placeholderTextColor="#B9BCBE"
                        autoCapitalize="none"
                        onChangeText={this.handleTags}
                    />
                </View>

                <View style={gStyles.formTextInput}>
                    <Text style={[gStyles.labelInput ,styles.icontent]}>Ubicación</Text>
                    <TextInput
                        style={gStyles.inputPlaceholder}
                        placeholder="Ubicación"
                        keyboardType="text"
                        placeholderTextColor="#B9BCBE"
                        autoCapitalize="none"
                        onChangeText={this.handleLocation}
                    />
                </View>

                <View style={gStyles.formTextInput}>
                    <Text style={[gStyles.labelInput ,styles.icontent]}>¿Que ha hecho usted por este proyecto?</Text>
                    <TextInput
                        style={gStyles.inputPlaceholder}
                        placeholder="Descripción"
                        keyboardType="text"
                        placeholderTextColor="#B9BCBE"
                        autoCapitalize="none"
                        onChangeText={this.handleDoing}
                    />
                </View>
            </View>

        )
    }
}