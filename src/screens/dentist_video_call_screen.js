import React, { useState } from "react";
import { Text, View, ActivityIndicator, Modal } from "react-native";
import { Button, Image, ListItem } from "react-native-elements";
import AppStyles from "../assets/styles";

function DentistVideoCallScreen({ route, navigation }) {
  const patient = route.params.patient;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={AppStyles.modal_container_view}>
            <View style={AppStyles.modal_view}>
              <Text style={{ margin: 50 }}>Calling</Text>

              <Button
                title="Okay"
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate("DentistScreen");
                }}
              ></Button>
            </View>
          </View>
        </Modal>
      </View>

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
        onPress={() => {
          setModalVisible(true);
        }}
      ></Button>
    </>
  );
}

export default DentistVideoCallScreen;
