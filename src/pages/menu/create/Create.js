import { Image, Text, View, TextInput, TouchableHighlight, SafeAreaView, ScrollView } from 'react-native'
// import Checkbox from 'expo-checkbox';
import styles from './styles';
import gStyles from '../../../styles/generalStyles';
import React, { Component, useState } from 'react'

export default class Create extends Component {
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
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <View style={[gStyles.formContainer, styles.content]}>
              <View style={gStyles.formContent} >
                <Text style={gStyles.h2}>Nos alegra que te unas a nosotros</Text>

                <View style={gStyles.formTextInput}>
                  <Text style={gStyles.labelInput}>Nombre del proyecto</Text>
                  <TextInput
                    style={gStyles.inputPlaceholder}
                    placeholder="Nombre del proyecto"
                    keyboardType="text"
                    placeholderTextColor="#B9BCBE"
                    autoCapitalize="none"
                    onChangeText={this.handleProyectName}
                  />
                </View>

                <View style={gStyles.formTextInput}>
                  <Text style={gStyles.labelInput}>Descripción</Text>
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
                  <Text style={gStyles.labelInput}>Categoria</Text>
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
                  <Text style={gStyles.labelInput}>Etiquetas (Animales, Salud, Alimento)</Text>
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
                  <Text style={gStyles.labelInput}>Ubicación</Text>
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
                  <Text style={gStyles.labelInput}>¿Que ha hecho usted por este proyecto?</Text>
                  <TextInput
                    style={gStyles.inputPlaceholder}
                    placeholder="Descripción"
                    keyboardType="text"
                    placeholderTextColor="#B9BCBE"
                    autoCapitalize="none"
                    onChangeText={this.handleDoing}
                  />
                </View>

                <TouchableHighlight style={gStyles.standarButton} onPress={this.onSubmitEdit}>
                  <Text style={gStyles.standarButtonLabel}>PROPONER</Text>
                </TouchableHighlight>



              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}