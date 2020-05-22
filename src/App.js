// Author       : Aravinth Panch
// Project      : Dentaria
// Description  : Smart Dental Health Management System

import React from "react";
import { View, Alert } from "react-native";
import { Button, ThemeProvider, Header } from "react-native-elements";
import styles from "./styling";

export default function DentariaApp() {
  return (
    <ThemeProvider>
      <Header
        leftComponent={{
          icon: "menu",
          color: "#fff",
        }}
        centerComponent={{
          text: "DENTARIA",
          style: {
            color: "#fff",
          },
        }}
        rightComponent={{
          icon: "home",
          color: "#fff",
        }}
      />
      <View style={styles.container}>
        <Button
          style={styles.button}
          title="PATIENT"
          type="outline"
          onPress={() => Alert.alert("PATIENT")}
        />
        <Button
          style={styles.button}
          title="DENTIST"
          type="outline"
          onPress={() => Alert.alert("DENTIST")}
        />
      </View>
    </ThemeProvider>
  );
}
