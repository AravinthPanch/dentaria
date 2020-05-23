// Author       : Aravinth Panch
// Project      : Dentaria
// Description  : Smart Dental Health Management System

import React from "react";
import { ThemeProvider, Header } from "react-native-elements";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import PatientDentalHealthScreen from "./screens/patient_dental_health_screen";
import DentistScreen from "./screens/dentist_screen";
import PatientScreen from "./screens/patient_screen";
import HomeScreen from "./screens/home_screen";
import DentistVideoCallScreen from "./screens/dentist_video_call_screen";
import PatientAppointmentScreen from "./screens/patient_appointment_screen";
import PatientVideoCallScreen from "./screens/patient_video_call_screen";

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
            name="HomeScreen"
            options={{ title: "Welcome" }}
            component={HomeScreen}
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
            options={{ title: "[Patient] Dental Health" }}
            component={PatientDentalHealthScreen}
          />
          <Stack.Screen
            name="DentistVideoCallScreen"
            options={{ title: "[Dentist] Video Call" }}
            component={DentistVideoCallScreen}
          />
          <Stack.Screen
            name="PatientVideoCallScreen"
            options={{ title: "[Patient] Video Call" }}
            component={PatientVideoCallScreen}
          />
          <Stack.Screen
            name="PatientAppointmentScreen"
            options={{ title: "[Patient] Appointment" }}
            component={PatientAppointmentScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
