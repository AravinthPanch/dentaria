import React from "react";
import { View, ActivityIndicator } from "react-native";
import { Button, Image, ListItem } from "react-native-elements";

function DentistVideoCallScreen({ route, navigation }) {
  const patient = route.params.patient;
  return (
    <>
      <View style={{ flex: 1, marginVertical: 5 }}>
        <ListItem
          title="Patient Name"
          subtitle={patient.patient}
          bottomDivider
        ></ListItem>
        <ListItem
          title="Dental Health"
          subtitle={patient.dental_health}
          bottomDivider
        ></ListItem>
        <ListItem
          title="Last Treatment"
          subtitle={patient.last_treatment}
          bottomDivider
        ></ListItem>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Image
          source={{ uri: patient.avatar_url }}
          style={{ width: 200, height: 200 }}
          PlaceholderContent={<ActivityIndicator />}
        ></Image>
      </View>
      <Button
        title="Call"
        style={{
          justifyContent: "center",
        }}
      ></Button>
    </>
  );
}

export default DentistVideoCallScreen;
