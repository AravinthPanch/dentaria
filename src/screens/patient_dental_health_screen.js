import React, { useState } from "react";
import { Text, Modal, View, TouchableOpacity } from "react-native";
import { Button, Image } from "react-native-elements";
import AppStyles from "../assets/styles";
import MouthImage from "../assets/mouth.png";

function PatientDentalHealthScreen({ route, navigation }) {
  const patient = route.params.patient;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={AppStyles.modal_container_view}>
            <View style={AppStyles.modal_view}>
              <Text style={{ padding: 20, fontSize: 18 }}>
                Your dental score is {patient.dental_health}
              </Text>

              <Button
                title="Okay"
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              ></Button>
            </View>
          </View>
        </Modal>
      </View>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Image source={MouthImage} style={{ width: 260, height: 400 }} />
        </TouchableOpacity>
      </View>
    </>
  );
}

export default PatientDentalHealthScreen;
