import { Ionicons, Feather } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../theme/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import {
  GestureHandlerRootView,
  RectButton,
} from "react-native-gesture-handler";

export default function Item({ item, selected }) {
  const [isSelected, setIsSelected] = useState(false);

  function handleMark(item) {
    selected(item);
    setIsSelected(!isSelected);
  }

  return (
    <GestureHandlerRootView>
      <Swipeable
        overshootRight={false}
        containerStyle={{ paddingHorizontal: 24 }}
        renderRightActions={() => (
          <RectButton style={styles.remove}>
            <Feather name="trash" size={20} color={COLORS.white} />
          </RectButton>
        )}
      >
        <RectButton
          style={styles.container}
          activeOpacity={0.6}
          onPress={() => handleMark(item)}
        >
          <Ionicons
            name={isSelected ? "checkmark-circle" : "radio-button-off"}
            size={24}
            color={isSelected ? COLORS.blue500 : COLORS.ciano}
          />
          <Text style={[styles.title, isSelected && styles.checked]}>
            {item}
          </Text>
        </RectButton>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.black500,
    padding: 12,
    gap: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.gray500,
  },
  title: {
    color: COLORS.white,
    fontSize: 16,
  },
  checked: {
    textDecorationLine: "line-through",
    color: COLORS.gray300,
  },
  remove: {
    backgroundColor: COLORS.red,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 16,
    paddingLeft: 20,
    borderRadius: 8,
    right: -32,
  },
});
