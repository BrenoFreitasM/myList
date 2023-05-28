import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../theme/colors";

export default function Item({ item }) {
  return (
    <View style={styles.container}>
      <Ionicons name={"radio-button-off"} size={24} color={COLORS.ciano} />
      <Text style={styles.title}>{item}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.black500,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.gray500,
    gap: 8,
  },
  title: {
    color: COLORS.white,
    fontSize: 16,
  },
});
