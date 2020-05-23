// Author       : Aravinth Panch
// Project      : Dentaria
// Description  : Smart Dental Health Management System

import React from "react";
import { View } from "react-native";
import { Button, ThemeProvider, Header } from "react-native-elements";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AppStyles from "./assets/styles";
import PatientDentalHealthScreen from "./screens/patient_dental_health_screen";
import DentistScreen from "./screens/dentist_screen";

const Stack = createStackNavigator();

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
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LandingPageScreen"
            options={{ title: "Welcome" }}
            component={LandingPageScreen}
          />
          <Stack.Screen
            name="PatientScreen"
            options={{ title: "Patient" }}
            component={PatientScreen}
          />
          <Stack.Screen
            name="DentistScreen"
            options={{ title: "Dentist" }}
            component={DentistScreen}
          />
          <Stack.Screen
            name="PatientDentalHealthScreen"
            options={{ title: "Dental Health" }}
            component={PatientDentalHealthScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

function LandingPageScreen({ navigation }) {
  return (
    <>
      <View style={AppStyles.container}>
        <Button
          style={AppStyles.button}
          title="PATIENT"
          type="solid"
          onPress={() => navigation.navigate("PatientScreen")}
        />
        <Button
          style={AppStyles.button}
          title="DENTIST"
          type="solid"
          onPress={() => navigation.navigate("DentistScreen")}
        />
      </View>
    </>
  );
}

function PatientScreen({ navigation }) {
  return (
    <>
      <View style={AppStyles.container}>
        <Button
          style={AppStyles.button}
          title="SHOW DENTAL HEALTH"
          type="solid"
          onPress={() => navigation.navigate("PatientDentalHealthScreen")}
        />
        <Button
          style={AppStyles.button}
          title="VIDEO CALL DENTIST"
          type="solid"
        />
        <Button
          style={AppStyles.button}
          title="BOOK APPOINTMENT"
          type="solid"
        />
      </View>
    </>
  );
}
