import {View, Text, Image, StyleSheet} from "react-native";

export default function Header() {

  return (
    <View style={styles.headerContainer}>
      <View style={styles.placeholder} />
      <View style={styles.textLogo}>
        <Text style={{fontSize: 20, fontFamily: "Poppins_400Regular"}}>money</Text>
        <Text style={{fontSize: 20, fontFamily: "Poppins_700Bold"}}>count</Text>
      </View>
      <View>
        <Image style={styles.avatar} source={require('../assets/avatar.jpg')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    width: "95%",
    marginLeft: 15,
    marginRight: 15,
    height: 51,
    marginTop: 35,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textLogo: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
  },
  avatar: {
    width: 51,
    height: 51,
    borderRadius: 25
  },
  placeholder: {
    height: 50,
    width: 50,
  }
})