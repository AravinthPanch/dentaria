import React, { useState } from "react";
import { Text, View, ActivityIndicator, Modal } from "react-native";
import { Button, Image, ListItem } from "react-native-elements";
import AppStyles from "../assets/styles";

function dentistVideoCallScreen({ route, navigation }) {
  const dentist = route.params.dentist;
  const patient = route.params.patient;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={AppStyles.modal_container_view}>
            <View style={AppStyles.modal_view}>
              <Text style={{ padding: 30, fontSize: 18 }}>
                Calling {dentist.dentist} ...
              </Text>

              <Button
                title="Okay"
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate("PatientScreen");
                }}
              ></Button>
            </View>
          </View>
        </Modal>
      </View>

      <View style={{ flex: 1, marginVertical: 5 }}>
        <ListItem
          title="Dentist Name"
          subtitle={dentist.dentist}
          bottomDivider
        ></ListItem>
        <ListItem
          title="Dentist Rating"
          subtitle={dentist.rating.toString()}
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
          source={{ uri: dentist.avatar_url }}
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

export default dentistVideoCallScreen;
