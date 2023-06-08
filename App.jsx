import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Empty from "./src/assets/clipboard.png";
import Button from "./src/components/Button";
import Header from "./src/components/Header";
import Input from "./src/components/Input";
import Item from "./src/components/Item";
import { COLORS } from "./src/theme/colors";

export default function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");

  function handleAddItem() {
    if (!task) {
      Platform.OS === "android"
        ? ToastAndroid.show("Digite algo!", ToastAndroid.BOTTOM)
        : Alert.alert("Campo vazio!", "Digite uma tarefa para adicionar");
      return;
    }

    if (list.includes(task)) {
      return Alert.alert("Tarefa já adicionada", "Digite outra tarefa");
    }

    setList((prevState) => [...prevState, task]);
    setTask(""); // Clean input
  }

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
                  <Input
                    defaultValue={task}
                    onChangeText={(inputValue) => setTask(inputValue)}
                  />
                  <Button onPress={handleAddItem} />
                </View>

                {/* {lista.map((item, index) => (
                  <View key={item + index} style={{ flexDirection: "row" }}>
                    <Text style={{ color: COLORS.white }}>{index} </Text>
                    <Text style={{ color: COLORS.white }}>{item.title}</Text>
                  </View>
                ))} */}

                <View style={styles.length}>
                  <View style={styles.type}>
                    <Text style={styles.lengthTitle}>Criadas</Text>
                    <View style={styles.quantity}>
                      <Text style={styles.qtdNumber}>0</Text>
                    </View>
                  </View>

                  <View style={styles.type}>
                    <Text
                      style={[styles.lengthTitle, { color: COLORS.blue500 }]}
                    >
                      Concluídas
                    </Text>
                    <View style={styles.quantity}>
                      <Text style={styles.qtdNumber}>0</Text>
                    </View>
                  </View>
                </View>

                <FlatList
                  data={list}
                  keyExtractor={(item, index) => item + index}
                  renderItem={({ item }) => <Item item={item} />}
                  ListEmptyComponent={renderEmptyList}
                  contentContainerStyle={{
                    paddingTop: 8,
                    paddingHorizontal: 24,
                    paddingBottom: 48,
                    flexDirection: "column-reverse",
                    gap: 8,
                  }}
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
  length: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 32,
    marginHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray500,
    paddingBottom: 16,
  },
  lengthTitle: {
    color: COLORS.ciano,
    fontWeight: "bold",
  },
  type: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.gray500,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 99,
    marginLeft: 8,
  },
  qtdNumber: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: "bold",
  },
});
