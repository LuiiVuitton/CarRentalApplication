import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

const AccountScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileSection}>
        <Image
          source={require("../assets/Profile6.jpg")}
          style={styles.profileImage}
        />
        <Text style={styles.username}>
          John Smith{" "}
          <Ionicons name="checkmark-circle" size={20} color="dodgerblue" />
        </Text>
        <Text style={styles.email}>JohnSmith@HomeSalePlus.com</Text>

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.listingPhotos}>
        <Text style={styles.sectionTitle}>Listings</Text>
        <View style={styles.photosContainer}>
          <Image
            source={require("../assets/HouseOne.jpg")}
            style={styles.listingImage}
          />
          <Image
            source={require("../assets/HouseTwo.jpg")}
            style={styles.listingImage}
          />
          <Image
            source={require("../assets/HouseThree.jpg")}
            style={styles.listingImage}
          />
        </View>
      </View>
      <View style={styles.listingPhotos}>
        <Text style={styles.sectionTitle}></Text>
        <View style={styles.photosContainer}>
          <Image
            source={require("../assets/HouseFour.jpg")}
            style={styles.listingImage}
          />
          <Image
            source={require("../assets/HomeFive.jpg")}
            style={styles.listingImage}
          />
          <Image
            source={require("../assets/HomeSix.jpg")}
            style={styles.listingImage}
          />
        </View>
        <View style={styles.listingPhotos}>
          <Text style={styles.sectionTitle}></Text>
          <View style={styles.photosContainer}>
            <Image
              source={require("../assets/HouseSeven.jpg")}
              style={styles.listingImage}
            />
            <Image
              source={require("../assets/HouseEight.jpg")}
              style={styles.listingImage}
            />
            <Image
              source={require("../assets/HouseNine.jpg")}
              style={styles.listingImage}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingBottom: 20,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  email: {
    fontSize: 18,
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: "black",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  editButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  listingPhotos: {
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  photosContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  listingImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
});

export default AccountScreen;
