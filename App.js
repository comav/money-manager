import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//Todo replace google fonts dev with respective fonts modules
import * as Font from 'expo-font';
import { useFonts, Poppins_400Regular, Poppins_700Bold, Inter_400Regular} from "@expo-google-fonts/dev";

import HomeScreen from "./screens/HomeScreen";
import StatsScreen from "./screens/StatsScreen";
import AccountsScreen from "./screens/AccountsScreen";
import AppLoading from "expo-app-loading";

const Tab = createMaterialBottomTabNavigator();

export default function App() {

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Tab.Navigator initialRouteName={"Home"}>
          <Tab.Screen
            name={"Home"}
            component={HomeScreen}
            options={{
              tabBarIcon: ({color}) => (<MaterialCommunityIcons name={"home"} color={color} size={26}/>),
            }}/>
          <Tab.Screen
            name={"Stats"}
            component={StatsScreen}
            options={{
              tabBarIcon: ({color}) => (<MaterialCommunityIcons name={"poll"} color={color} size={26}/>),
            }}/>
          <Tab.Screen
            name={"Accounts"}
            component={AccountsScreen}
            options={{
              tabBarIcon: ({color}) => (<MaterialCommunityIcons name={"credit-card"} color={color} size={26}/>),
            }}/>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
