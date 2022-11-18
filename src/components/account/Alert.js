import React from "react";
import { View, StyleSheet, Button, Alert } from "react-native";

const showAlert = () =>
  Alert.alert(
    "Server connection Error NavigationContainerInner@http://192.168.0.20:19000 ",
    "Data has been lost",
    [
      {
        text: "OK",
        onPress: () => Alert.alert("Salir presionado"),
        style: "cancel",
      },
    ],
    {
      cancelable: true,
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