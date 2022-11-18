import { View, Text, TextInput,  } from 'react-native'
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
      
      <Text style={styles.textTitle}>¿A quien quieres ayudar hoy?</Text>
      <View style={styles.container}>
        <View style={styles.shearchBar}>
          <TextInput Value={value} Style={styles.shearchBar} placeholder='Busca y ayuda...'/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  textTitle: {
    fontFamily: 'montserrat-bold',
    fontSize: 32,
    color: '#323643'
  },


})


export default Home