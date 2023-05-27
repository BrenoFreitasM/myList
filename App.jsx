import { StatusBar } from "expo-status-bar";
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Header from "./src/components/Header";
import { COLORS } from "./src/theme/colors";
import Input from "./src/components/Input";
import Button from "./src/components/Button";

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <StatusBar style="light" />

        <Header />

        <View style={styles.input}>
          <Input />
          <Button />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    backgroundColor: COLORS.black900,
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 24,
    gap: 4,
    marginTop: -27
  }
});
