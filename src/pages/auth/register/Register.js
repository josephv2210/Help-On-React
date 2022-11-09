import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles';
import {useNavigation} from '@react-navigation/native'
import RegisterForm from '../../../components/account/RegisterForm';

const Register = () => {
  return (
    <View style={styles.scrollViewContainer}>
      <Image
        source={require("../../../assets/resourses/svg/register.png")}
        resizeMode="contain"
        style={styles.bkImage}
      />
      <View style={[styles.upContainer, styles.shadowProp]}>
        <Text style={styles.title}>
          Registrate
        </Text>
        <RegisterForm/>
        {/* <CreateAccount /> */}
      </View>
    </View>
  )

  function CreateAccount(props) {
  const navigation = useNavigation();

    return (
      <Text>
        <Text
          onPress={() => console.log("otro metodo")}
        >Inicia con otro metodo</Text>
        <Text
          onPress={() => console.log("olvido su contraseña")}
        >¿Olvido su contraseña?</Text>
        <Text
          onPress={() => navigation.navigate("¿Ya tienes una cuenta?")}
        >Registrate</Text>
      </Text>
    )
  }
}

export default Register