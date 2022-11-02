import { View, Text, TextInput,  } from 'react-native'
import React from 'react'
import styles from './styles';

const Home = () => {
  return (
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

      </View>
    </View>
  );
}



export default Home