import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

// Import your screens
import LoginScreen from "./screens/LoginScreen";
import MessageScreen from "./screens/MessageScreen";
import HomeScreen from "./screens/HomeScreen";
import SignUpScreen from "./screens/SignUpScreen";
import BrowseScreen from "./screens/BrowseScreen";
import AccountScreen from "./screens/AccountScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const loginName = "Profile";
const MessageName = "Messages";
const HomeName = "Home";
const SearchName = "Search";

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={loginName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            const routeName = route.name;

            if (routeName === MessageName) {
              iconName = focused ? "chatbox" : "chatbox-outline";
            } else if (routeName === loginName) {
              iconName = focused ? "person" : "person-outline";
            } else if (routeName === HomeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (routeName === SearchName) {
              iconName = focused ? "search" : "search-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name={HomeName} component={HomeScreen} />
        <Tab.Screen name={SearchName} component={BrowseScreen} />
        <Tab.Screen name={MessageName} component={MessageScreen} />
        <Tab.Screen name={loginName} component={AccountScreen} />

        {/* Add other screens as needed */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
