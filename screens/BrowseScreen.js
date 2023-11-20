import * as React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  Text,
  Dimensions,
} from "react-native";
import { ScrollView, TextInput } from "react-native";

import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("screen");

export default function BrowseScreen() {
  const ListCategories = () => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

    const categoryList = ["Popular", "Recommended", "Saved"];
    return (
      <View style={styles.categoryListContainer}>
        {categoryList.map((category, index) => (
          <Text
            style={[
              styles.categoryListText,
              index == selectedCategoryIndex && styles.activeCategoryListText,
            ]}
          >
            {category}
          </Text>
        ))}
      </View>
    );
  };

  const ListOption = () => {
    const optionList = [
      { title: "$750,000", img: require("../assets/HouseOne.jpg") },
      { title: "$500,000", img: require("../assets/HouseTwo.jpg") },
    ];
    return (
      <View style={styles.optionListContainer}>
        {optionList.map((option, index) => (
          <View key={index} style={styles.optionCard}>
            <Image source={option.img} style={styles.optionCardImage} />
            <Text style={{ marginTop: 10, fontWeight: "bold" }}>
              {option.title}
            </Text>
            <Text>
              Starting Price
              <Ionicons name="bookmark" size={20} color="black" />
            </Text>
          </View>
        ))}
      </View>
    );
  };

  const ListOption2 = () => {
    const optionList = [
      {
        title: "$950,000",
        p: "testing",
        img: require("../assets/HouseThree.jpg"),
      },
      { title: "$490,000", img: require("../assets/HouseFour.jpg") },
    ];
    return (
      <View style={styles.optionListContainer}>
        {optionList.map((option, index) => (
          <View key={index} style={styles.optionCard}>
            <Image source={option.img} style={styles.optionCardImage} />
            <Text style={{ marginTop: 10, fontWeight: "bold" }}>
              {option.title}
            </Text>
            <Text>
              Starting Price{" "}
              <Ionicons name="bookmark-outline" size={20} color="black" />
            </Text>
          </View>
        ))}
      </View>
    );
  };

  const ListOption3 = () => {
    const optionList = [
      {
        title: "$650,000",
        p: "testing",
        img: require("../assets/HomeFive.jpg"),
      },
      { title: "$340,000", img: require("../assets/HomeSix.jpg") },
    ];
    return (
      <View style={styles.optionListContainer}>
        {optionList.map((option, index) => (
          <View key={index} style={styles.optionCard}>
            <Image source={option.img} style={styles.optionCardImage} />
            <Text style={{ marginTop: 10, fontWeight: "bold" }}>
              {option.title}
            </Text>
            <Text>
              Starting Price{" "}
              <Ionicons name="bookmark-outline" size={20} color="black" />
            </Text>
          </View>
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.header}>
        <View>
          <Text style={{ color: "grey" }}>Location</Text>
          <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>
            United States
          </Text>
        </View>

        <Image
          source={require("../assets/Profile6.jpg")}
          style={styles.profileImage}
        />
      </View>

      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }}
        >
          <View style={styles.searchInputContainer}>
            <Ionicons name="search" size={25} color="grey" />
            <TextInput placeholder=" Search address, city, location" />
          </View>

          <View style={styles.sortButton}>
            <Ionicons name="list" size={25} color="white" />
          </View>
        </View>

        <ListCategories />
        <ListOption />
        <ListOption2 />
        <ListOption3 />
      </ScrollView>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },

  searchInputContainer: {
    height: 50,
    backgroundColor: "seashell",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  sortButton: {
    backgroundColor: "black",
    height: 50,
    width: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },

  optionListContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 20,
  },

  optionCard: {
    height: 210,
    width: width / 2 - 30,
    elevation: 15,
    backgroundColor: "whitesmoke",
    alignItems: "center",
    borderRadius: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
  },

  optionCardImage: {
    height: 140,
    borderRadius: 10,
    width: "100%",
  },

  categoryListContainer: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 40,
  },

  categoryListText: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 5,
    color: "grey",
  },

  activeCategoryListText: {
    color: "black",
    borderBottomColor: "black",
    borderBottomWidth: 2, // Increase the width for better visibility
    paddingBottom: 5,
  },
});
