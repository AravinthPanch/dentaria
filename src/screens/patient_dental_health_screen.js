import React from "react";
import { View, ActivityIndicator} from "react-native";
import { Image} from "react-native-elements";
import AppStyles from "../assets/styles";

function PatientDentalHealthScreen({ navigation }) {
  return (
    <>
      <View style={AppStyles.image_container}>
        <Image
          source={{ uri: "https://southairdriesmiles.ca/wp-content/uploads/2019/08/open-mouth-vector-768x768.png"}}
          style={{ width: 350, height: 350 }}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
    </>
  );
}

export default PatientDentalHealthScreen;
