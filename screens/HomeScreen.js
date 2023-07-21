import {View, Text, StyleSheet} from "react-native";
import Header from "../components/header";
import {StatusBar} from "expo-status-bar";
import MoneyBar from "../components/moneyBar";
import ScreenContainer from "../components/styled/screenContainer";

import {useSelector} from "react-redux";

export default function HomeScreen() {
  const test = useSelector((state) => state.test.value);

  return (
    <ScreenContainer>
      <Header />
      <StatusBar style={"auto"} />
      <MoneyBar />
      <Text>
        {test}
      </Text>
    </ScreenContainer>
  )
}