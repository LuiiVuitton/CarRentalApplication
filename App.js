import { StatusBar } from "expo-status-bar";
import { Text, View, Button, TouchableOpacity } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import { styles } from "./styles";

export default function App() {
  return (
    <View style={styles.landingPage}>
      <View>
        <Text style={styles.title}>Baddour Car Rental</Text>
      </View>

      <View>
        <Text style={styles.version}>Demo Version 0.1</Text>
      </View>

      <View style={styles.loginButton}>
        <Button title="Login" onPress={() => console.log("Button Pressed")} />
      </View>
    </View>
  );
}
