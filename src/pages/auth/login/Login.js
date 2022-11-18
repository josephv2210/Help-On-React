import { View, Text, Image, ScrollView, Alert } from 'react-native'
import React from 'react'
import styles from './styles';
import gStyles from '../../../styles/generalStyles';
import { useNavigation } from '@react-navigation/native'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getAuth } from "firebase/auth";
import LogingForm from '../../../components/account/LogingForm';

// const handleLogin = getAuth();
// signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
//   // 
//   const user = userCredential.user;
//   console.log('Registered with: ', user.email);
// })
// .catch((error) => {
//   const errorCode = error.code;
//   const errorMessage = error.message;
//   // ..
// });

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.scrollViewContainer}>
      <Image
        source={require("../../../assets/resourses/svg/register.png")}
        resizeMode="contain"
        style={styles.bkImage}
      />
      <View style={[styles.upContainer, styles.shadowProp]}>
        <Text style={styles.title} onPress={showAlert}>
          Iniciar Sesión
        </Text>

        <LogingForm/>

        <View style={gStyles.redirectContainer}>
          <Text
            style={gStyles.redirectText}
            //onPress={() => console.log("olvido su contraseña")}
            onPress={showAlert}
            >¿Olvido su contraseña?</Text>
          <Text
            style={gStyles.redirectText}
            onPress={() => navigation.navigate("register")}
          >¿No tiene una cuenta?</Text>
        </View>
      </View>
    </View>
  )

  
}
const showAlert = () =>
  Alert.alert(
    "invalid-oauth-client-id: ",
    "The OAuth client ID provided is either invalid or does not match the specified API key.",
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

export default Login