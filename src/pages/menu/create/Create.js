import { View, Text, TextInput, Alert, ScrollView, } from 'react-native'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import React, { Component } from 'react'
import styles from './styles';
import { Button } from '@rneui/base';


export default class Create extends Component {

  render() {
    return (
        <ScrollView>
          <View style={styles.formContainer}>
            <View style={styles.formContent} >
              <Text style={styles.h1}>Crear nuevo proyecto</Text>
              <Text style={styles.h2}>Nos alegra que te unas a nosotros</Text>

              <View style={styles.formTextInput}>
                <Text style={styles.labelInput}>Nombre del proyecto</Text>
                <TextInput
                  style={styles.inputLabel}
                  placeholder="Nombre del proyecto"
                  keyboardType="default"
                />
              </View>

              <View style={styles.formTextInput}>
                <Text style={styles.labelInput}>Descripción</Text>
                <TextInput
                  style={styles.inputLabel}
                  placeholder="Descripción"
                  keyboardType="default"
                />
              </View>

              <View style={styles.formTextInput}>
                <Text style={styles.labelInput}>Categoria</Text>
                <TextInput
                  style={styles.inputLabel}
                  placeholder="Categoria"
                  keyboardType="default"
                />
              </View>

              <View style={styles.formTextInput}>
                <Text style={styles.labelInput}>Etiquetas (Animales, Salud, Alimento)</Text>
                <TextInput
                  style={styles.inputLabel}
                  placeholder="Etiquetas (Animales, Salud, Alimento)"
                  keyboardType="default"
                />
              </View>

              <View style={styles.formTextInput}>
                <Text style={styles.labelInput}>Ubicación</Text>
                <TextInput
                  style={styles.inputLabel}
                  placeholder="Ubicación"
                  keyboardType="default"
                />
              </View>

              <View style={styles.formTextInput}>
                <Text style={styles.labelInput}>¿Que ha hecho usted por este proyecto?</Text>
                <TextInput
                  style={styles.inputLabel}
                  placeholder="Descripción"
                  keyboardType="default"
                />
              </View>

              <Button
                onPress={launchImageLibrary()}
                title="subir imagen"
                color="green"
              />
            </View>
          </View>
        </ScrollView>
    )

  }
  
}
