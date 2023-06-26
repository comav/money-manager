import {View, Text, StyleSheet} from "react-native";
import Header from "../components/header";
import {StatusBar} from "expo-status-bar";
import MoneyBar from "../components/moneyBar";

import {useSelector} from "react-redux";

export default function HomeScreen() {
  const test = useSelector((state) => state.test.value);

  return (
    <View style={styles.homeScreenContainer}>
      <Header />
      <StatusBar style={"auto"} />
      <MoneyBar />
      <Text>
        {test}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  homeScreenContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
})