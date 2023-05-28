import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  FlatList,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Empty from "./src/assets/clipboard.png";
import Button from "./src/components/Button";
import Header from "./src/components/Header";
import Input from "./src/components/Input";
import { COLORS } from "./src/theme/colors";

export default function App() {
  const [list, setList] = useState([]);

  const renderEmptyList = () => (
    <View style={styles.empty}>
      <Image source={Empty} />
      <Text style={styles.emptyTitle}>Sua lista está vazia</Text>
      <Text style={styles.emptyDescription}>
        Adicione algo para se organizar
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={{ flex: 1, width: "100%" }}>
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <>
              <StatusBar style="light" />

              <Header />

              <View style={styles.container}>
                <View style={styles.add}>
                  <Input />
                  <Button />
                </View>

                {/* {lista.map((item, index) => (
                  <View key={item + index} style={{ flexDirection: "row" }}>
                    <Text style={{ color: COLORS.white }}>{index} </Text>
                    <Text style={{ color: COLORS.white }}>{item.title}</Text>
                  </View>
                ))} */}

                <FlatList
                  data={list}
                  keyExtractor={(item, index) => item + index}
                  renderItem={({ item }) => console.log(item)}
                  ListEmptyComponent={renderEmptyList}
                />
              </View>
            </>
          </TouchableWithoutFeedback>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black900,
  },
  add: {
    marginTop: -27,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginHorizontal: 24,
  },
  empty: {
    alignItems: "center",
    paddingTop: 48,
  },
  emptyTitle: {
    color: COLORS.gray300,
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 16,
  },
  emptyDescription: {
    color: COLORS.gray300,
    fontSize: 14,
  },
});
