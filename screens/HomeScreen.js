import * as React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  Text,
  ScrollView,
} from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <ScrollView>
          <Image
            source={require("../assets/HomePage.jpg")}
            style={styles.image}
          />

          <View style={styles.indicatorContainer}>
            <View style={styles.indicator} />
            <View style={styles.indicator} />
            <View style={[styles.indicator, styles.indicatorActive]} />
          </View>

          <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
            <View>
              <Text style={styles.title}>Welcome to</Text>
              <Text style={styles.title}>HomeSale.Plus</Text>
            </View>
          </View>

          <View style={{ marginTop: 10, height: 20, paddingHorizontal: 20 }}>
            <Text style={styles.textStyle}>
              Find a home for sale and, if you wish, register to
            </Text>
            <Text style={styles.textStyle}>make an offer online.</Text>
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              paddingBottom: 40,
              marginTop: 60,
            }}
          >
            <View style={styles.getStartedButton}>
              <Text style={{ color: "white" }}>Get started</Text>
            </View>
          </View>

          {/* About Section */}
          <View style={styles.aboutContainer}>
            <Text style={styles.aboutTitle}>About Us..</Text>
            <Text style={styles.aboutText}>
              homesale.plus is the trusted and transparent marketplace where
              sellers of residential real estate pay zero commission.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 420,
    width: "100%",
    borderBottomLeftRadius: 100,
  },
  indicatorContainer: {
    height: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  indicator: {
    height: 3,
    width: 30,
    backgroundColor: "grey",
    marginHorizontal: 5,
    borderRadius: 5,
  },
  indicatorActive: {
    backgroundColor: "black",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "black",
    height: 35,
  },
  textStyle: {
    fontSize: 16,
    color: "grey",
  },
  getStartedButton: {
    height: 60,
    marginHorizontal: 20,
    backgroundColor: "black",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  // About Section Styles
  aboutContainer: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  aboutTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 16,
    color: "#333",
  },
});
