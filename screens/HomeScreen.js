import * as React from "react";
import { StyleSheet, SafeAreaView, Image } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <Image source={require("../assets/C2A_LOGO.png")}></Image>
    </SafeAreaView>
  );
}
