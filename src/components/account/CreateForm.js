import { Image, Text, View, TextInput, TouchableHighlight, SafeAreaView, ScrollView, Alert } from 'react-native'
import styles from './styles';
import React, { Component } from 'react'
import gStyles from '../../styles/generalStyles'
import Alerta from './Alert';

const showAlert = () =>
  Alert.alert(
    "Server connection Error NavigationContainerInner@http://192.168.0.20:19000 ",
    "Data has been lost",
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
        console.log(this.state);
        //onPress= {showAlert}
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
            <View style={gStyles.formContent}>
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
                    <Text style={[gStyles.labelInput ,styles.icontent]}>Descripci??n</Text>
                    <TextInput
                        style={gStyles.inputPlaceholder}
                        placeholder="Descripci??n"
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
                    <Text style={[gStyles.labelInput ,styles.icontent]}>Ubicaci??n</Text>
                    <TextInput
                        style={gStyles.inputPlaceholder}
                        placeholder="Ubicaci??n"
                        keyboardType="text"
                        placeholderTextColor="#B9BCBE"
                        autoCapitalize="none"
                        onChangeText={this.handleLocation}
                    />
                </View>

                <View style={gStyles.formTextInput}>
                    <Text style={[gStyles.labelInput ,styles.icontent]}>??Que ha hecho usted por este proyecto?</Text>
                    <TextInput
                        style={gStyles.inputPlaceholder}
                        placeholder="Descripci??n"
                        keyboardType="text"
                        placeholderTextColor="#B9BCBE"
                        autoCapitalize="none"
                        onChangeText={this.handleDoing}
                    />
                </View>

                <TouchableHighlight style={gStyles.standarButton} onPress={showAlert}>
                  <Text style={gStyles.standarButtonLabel}>PROPONER</Text>
                </TouchableHighlight>
            </View>

        )
    }
}