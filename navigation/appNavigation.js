import { View, Text } from "react-native";
import HomeScreen from "../screens/HomeScreen";

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <MediaStreamTrack.Navigator initialRoutName="Home">
        <Screen name="Home">
          {" "}
          options={{ headerShown: false }} component={HomeScreen}
        </Screen>
      </MediaStreamTrack.Navigator>
    </NavigationContainer>
  );
}

//Accidentally used App.js instead
