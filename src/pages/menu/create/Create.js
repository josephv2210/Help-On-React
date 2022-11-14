import { Image, Text, View, TextInput, TouchableHighlight, SafeAreaView, ScrollView } from 'react-native'
// import Checkbox from 'expo-checkbox';
import styles from './styles';
import gStyles from '../../../styles/generalStyles';
import React, { Component, useState } from 'react'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import CreateForm from '../../../components/account/CreateForm';
import {map, size} from 'lodash'


export default function() {
  const [imagesSelected, setImagesSelected] = useState([])  

    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <View style={[gStyles.formContainer, styles.content]}>
              <View style={gStyles.formContent} >
                <Text style={gStyles.h2}>Nos alegra que te unas a nosotros</Text>

                <CreateForm/>

                <UploadImage
                  
                />

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

function UploadImage() {
    return(
      <ScrollView
        style={styles.viewImage}
      >
        <View style={styles.containerIcon}>
        <Image
          style={styles.icon}
          source={require('../../../assets/Icons/camera.png')}
        />
        </View>
      </ScrollView>
    )
}