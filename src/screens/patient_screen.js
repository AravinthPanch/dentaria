import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import AppStyles from "../assets/styles";
import { PatientsData, DentistsData } from "../assets/data";

function PatientScreen({ navigation }) {
  return (
    <>
      <View style={AppStyles.container}>
        <Button
          style={AppStyles.button}
          title="SHOW DENTAL HEALTH"
          type="solid"
          onPress={() => navigation.navigate("PatientDentalHealthScreen", {
            patient: PatientsData[0],
          })
        }
        />
        <Button
          style={AppStyles.button}
          title="VIDEO CALL DENTIST"
          type="solid"
          onPress={() =>
            navigation.navigate("DentistVideoCallScreen", {
              patient: PatientsData[0],
            })
          }
        />
        <Button
          style={AppStyles.button}
          title="BOOK APPOINTMENT"
          type="solid"
          onPress={() =>
            navigation.navigate("PatientAppointmentScreen", {
              dentist: DentistsData[0],
            })
          }
        />
      </View>
    </>
  );
}
export default PatientScreen;
