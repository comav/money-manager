import {View, Text} from "react-native";

import Account from "../components/styled/account";
import Header from "../components/header";

import ScreenContainer from "../components/styled/screenContainer";

export default function AccountsScreen() {
  return (
    <ScreenContainer>
      <Header />
      <Account background={"#000"} name={"mono"} balance={"600"} />
      <Account background={"#42FF00"} name={"Privat24"} balance={"600"} />
      <Account background={"#809BFF"} name={"Cash"} balance={"600"} />
    </ScreenContainer>
  )
}