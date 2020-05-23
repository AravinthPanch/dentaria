import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import AppStyles from "../assets/styles";

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
export default PatientScreen;
