import React from "react";
import { View } from "react-native";
import { Text, ListItem, Rating } from "react-native-elements";
import { PatientsData, DentistsData } from "../assets/data";

function DentistScreen({ navigation }) {
  return (
    <>
      <View style={{ paddingVertical: 5 }}>
        <ListItem
          title={
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <Text>{DentistsData[0].dentist}</Text>
            </View>
          }
          subtitle={
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                paddingTop: 5,
              }}
            >
              <Rating imageSize={10} startingValue={4.5} readonly />
            </View>
          }
          bottomDivider
        />
      </View>
      <View>
        {PatientsData.map((l, i) => (
          <ListItem
            key={i}
            leftAvatar={{ source: { uri: l.avatar_url } }}
            title={l.request}
            subtitle={l.patient}
            onPress={() =>
              navigation.navigate("DentistVideoCallScreen", {
                patient: l,
              })
            }
            bottomDivider
          />
        ))}
      </View>
    </>
  );
}

export default DentistScreen;
