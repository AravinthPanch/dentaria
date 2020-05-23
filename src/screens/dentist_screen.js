import React from "react";
import { View } from "react-native";
import { ListItem } from "react-native-elements";
import DataPatientRequests from '../assets/data'

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

export default DentistScreen;
