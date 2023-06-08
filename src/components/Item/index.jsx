import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../theme/colors";

export default function Item({ item, selected }) {
  const [isSelected, setIsSelected] = useState(false);

  function handleSelection() {
    setIsSelected(!isSelected);
    selected(item);
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleSelection}
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
