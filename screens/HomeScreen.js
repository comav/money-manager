import {View, Text, StyleSheet} from "react-native";
import Header from "../components/header";
import {StatusBar} from "expo-status-bar";
import MoneyBar from "../components/moneyBar";

export default function HomeScreen() {
  return (
    <View style={styles.homeScreenContainer}>
      <Header />
      <StatusBar style={"auto"} />
      <MoneyBar />
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