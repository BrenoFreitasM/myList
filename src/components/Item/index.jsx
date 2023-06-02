import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../theme/colors";
import { useState } from "react";

export default function Item({ item }) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setIsSelected(!isSelected)}
    >
      <Ionicons
        name={isSelected ? "checkmark-circle" : "radio-button-off"}
        size={24}
        color={isSelected ? COLORS.blue500 : COLORS.ciano}
      />
      <Text style={[styles.title, isSelected && styles.marked]}>{item}</Text>
    </TouchableOpacity>
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
  marked: {
    color: COLORS.gray300,
    textDecorationLine: "line-through",
  },
});
