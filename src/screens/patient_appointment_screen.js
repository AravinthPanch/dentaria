import React, { useState } from "react";
import { Text, View, Modal } from "react-native";
import { Button, ListItem } from "react-native-elements";
import DatePicker from "react-native-modern-datepicker";
import AppStyles from "../assets/styles";

function PatientAppointmentScreen({ route, navigation }) {
  const dentist = route.params.dentist;
  const [selectedDate, setSelectedDate] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={AppStyles.modal_container_view}>
            <View style={AppStyles.modal_view}>
              <Text style={{ margin: 20 }}>Your appointment is booked !!!</Text>

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
          title="Your dentist"
          subtitle={dentist.dentist}
          bottomDivider
        ></ListItem>
        <ListItem
          title="Your next treatment :"
          subtitle={selectedDate}
          bottomDivider
        ></ListItem>
      </View>

      <DatePicker onSelectedChange={(date) => setSelectedDate(date)} />

      <Button
        title="Book"
        onPress={() => {
          setModalVisible(true);
        }}
      ></Button>
    </>
  );
}

export default PatientAppointmentScreen;
