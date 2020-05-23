import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import AppStyles from "../assets/styles";

function HomeScreen({ navigation }) {
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

export default HomeScreen;
