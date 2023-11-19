import * as React from "react";
import { View, Text } from "react-native";

export default function MessageScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => NavigationPreloadManager.navigate("home")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        {" "}
        coming soon...
      </Text>
    </View>
  );
}
