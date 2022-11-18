import React from "react";
import { View, StyleSheet, Button, Alert } from "react-native";

const showAlert = () =>
  Alert.alert(
    "Error de base de datos",
    "Los datos no han sido guardados",
    [
      {
        text: "Salir",
        onPress: () => Alert.alert("Salir presionado"),
        style: "cancel",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          "Esta alerta fue descartada al tocar fuera del cuadro de alerta."
        ),
    }
  );

const Alerta = () => (
  <View style={styles.container}>
    <Button title="Show alert" onPress={showAlert} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Alerta;