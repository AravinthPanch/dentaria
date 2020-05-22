// Author       : Aravinth Panch
// Project      : Dentaria
// Description  : Smart Dental Health Management System

import React from "react";
import { View, ActivityIndicator} from "react-native";
import { Button, ThemeProvider, Header, ListItem, Image} from "react-native-elements";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AppStyles from "./assets/styles";
import DataPatientRequests from "./assets/data";

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
          type="outline"
          onPress={() => navigation.navigate("PatientScreen")}
        />
        <Button
          style={AppStyles.button}
          title="DENTIST"
          type="outline"
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
          type="outline"
          onPress={() => navigation.navigate("PatientDentalHealthScreen")}
        />
        <Button
          style={AppStyles.button}
          title="VIDEO CALL DENTIST"
          type="outline"
        />
        <Button
          style={AppStyles.button}
          title="BOOK APPOINTMENT"
          type="outline"
        />
      </View>
    </>
  );
}

function DentistScreen({ navigation }) {
  return (
    <>
      <View>
        {DataPatientRequests.map((l, i) => (
          <ListItem
            key={i}
            leftAvatar={{ source: { uri: l.avatar_url } }}
            title={l.request}
            subtitle={l.patient}
            onPress={() => navigation.navigate("PatientScreen")}
            bottomDivider
          />
        ))}
      </View>
    </>
  );
}

function PatientDentalHealthScreen({ navigation }) {
  return (
    <>
      <View style={AppStyles.image_container}>
        <Image
          source={{ uri: "https://southairdriesmiles.ca/wp-content/uploads/2019/08/open-mouth-vector-768x768.png"}}
          style={{ width: 350, height: 350 }}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
    </>
  );
}
