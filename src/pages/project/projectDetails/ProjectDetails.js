import { View, Text, Image, ScrollView, SafeAreaView, TouchableHighlight, Alert } from 'react-native'
import React from 'react'
import styles from './style'
import gStyles from '../../../styles/generalStyles';


const showAlert = () =>
  Alert.alert(
    "user-not-found: ",
    "There is no user record corresponding to this identifier. The user may have been deleted.",
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

const ProjectDetails = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Image
          source={require("../../../assets/temp/bkProyectDetails.png")}
          resizeMode="contain"
          style={styles.bkImage}
        />
        <Image
          source={require("../../../assets/temp/Icons.png")}

          style={styles.bkIcons}
        />

        <View style={[styles.upContainer, styles.shadowProp]}>
          <Image
            source={require("../../../assets/temp/photo.png")}
            style={styles.profile}
          />

          <View style={styles.rightInfo}>
            <Text style={styles.title}>
              Animales de la calle tunal
            </Text>

            <View style={styles.tagsContent}>
              <Text style={styles.tagsLabel}>ANIMALES</Text>
              <Text style={styles.tagsLabel}>SALUD</Text>
              <Text style={styles.tagsLabel}>ALIMENTO</Text>
            </View>
          </View>

          <View style={styles.decribeContent}>
            <View style={styles.textContent}>
              <Text style={styles.textTitle}>Creador:</Text>
              <Text style={styles.textLabel}>Todd Philips</Text>
            </View>
          </View>
          <View style={styles.decribeContent}>
            <View style={styles.textContent}>
              <Text style={styles.textTitle}>Lugar:</Text>
              <Text style={styles.textLabel}>Tunal</Text>
            </View>
          </View>
          <View style={styles.decribeContent}>
            <View style={styles.textContent}>
              <Text style={styles.textTitle}>Desde:</Text>
              <Text style={styles.textLabel}>28 de Enero 2022</Text>
            </View>
          </View>
          <View style={styles.decribeContent}>
            <View style={styles.textContent}>
              <Text style={styles.textTitle}>Descripción:</Text>
              <Text style={styles.textLabel}>Buscamos darle de comer a tantos animalitos de la calle se pueda, les mantenemos agua llena 3 veces al diá y les damos de comer una, por el momento</Text>
            </View>
          </View>

          <View style={styles.decribeContent}>
            <View style={styles.ImgContent}>
              <Text style={styles.textTitle}>Imagenes Dadas</Text>
              <ScrollView horizontal={true} style={styles.imgContainer}>
                <Image
                  style={styles.imgDada}
                  source={require("../../../assets/temp/img1.png")}
                />
                <Image
                  style={styles.imgDada}
                  source={require("../../../assets/temp/img2.png")}
                />
                <Image
                  style={styles.imgDada}
                  source={require("../../../assets/temp/img3.png")}
                />
              </ScrollView>
            </View>
          </View>

          <View style={styles.decribeContent}>
            <View style={styles.textContent}>
              <Text style={styles.textTitle}>Total Recaudado</Text>
              <Text style={styles.textLabelOR}>$ 1’528.556</Text>
            </View>
          </View>

          <TouchableHighlight style={[gStyles.standarButton, gStyles.standarButtonSize]} onPress={showAlert}>
            <Text style={gStyles.standarButtonLabel}>DONAR</Text>
          </TouchableHighlight>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProjectDetails