import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles';
import { useNavigation } from '@react-navigation/native'
import RegisterForm from '../../../components/account/RegisterForm';
import gStyles from '../../../styles/generalStyles';

const Register = () => {
  const navigation = useNavigation();

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
        <RegisterForm />

        <View style={gStyles.redirectContainer}>
          <Text
            style={gStyles.redirectText}
            onPress={() => console.log("olvido su contraseña")}
            >¿Olvido su contraseña?</Text>
          <Text
            style={gStyles.redirectText}
            onPress={() => navigation.navigate("login")}
          >¿Ya tiene una cuenta?</Text>
        </View>

      </View>
    </View>
  )


}

export default Register