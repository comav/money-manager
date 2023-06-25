import {
  View,
  Text,
  StyleSheet
} from "react-native";

import LegendItem from "./styled/legendItem";

export default function MoneyBar(props) {
  return (
    <>
      <View style={styles.barContainer}>
        <View style={styles.primary}></View>
        <View style={styles.secondary}></View>
        <View style={styles.tertiary}></View>
      </View>
      <View style={styles.legendContainer}>
        <LegendItem />
        <LegendItem />
        <LegendItem />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  barContainer: {
    width: "95%",
    height: 96,
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
    marginTop: 25
  },
  primary: {
    backgroundColor: "#DBEA8D",
    flexGrow: 1
  },
  secondary: {
    backgroundColor: "#E7F3DB",
    flexGrow: 1
  },
  tertiary: {
    backgroundColor: "#DBEA8D26",
    flexGrow: 1
  },
  legendContainer: {
    marginTop: 19,
    alignSelf: "flex-start",
    flexDirection: "column",
  }
})