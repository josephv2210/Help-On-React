import { View, Text, TextInput,  } from 'react-native'
// import styles from './styles';
import gStyles from '../../../styles/generalStyles';
import { useNavigation } from '@react-navigation/native'

import React from 'react'

const Home = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text
            style={gStyles.redirectText}
            onPress={() => navigation.navigate("projectDetails")}
          >Lista de proyectos</Text>
      <Text
            style={gStyles.redirectText}
            onPress={() => navigation.navigate("projectList")}
          >Detalle de proyectos</Text>
    </View>
  );
}



export default Home