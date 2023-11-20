import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";

const Messages = [
  {
    id: "1",
    userName: "Jenny Smith",
    userImg: require("../assets/Profile1.jpg"),
    messageTime: "4 mins ago",
    messageText: "Hey! Did you see the new listing price?",
  },
  {
    id: "2",
    userName: "John Doe",
    userImg: require("../assets/Profile2.jpg"),
    messageTime: "37 mins ago",
    messageText: "See you then!",
  },
  {
    id: "3",
    userName: "Ken William",
    userImg: require("../assets/Profile3.jpg"),
    messageTime: "49 mins ago",
    messageText: "What is the lockbox combination?",
  },
  {
    id: "4",
    userName: "Selina Paul",
    userImg: require("../assets/Profile4.jpg"),
    messageTime: "2 hrs ago",
    messageText: "I'm on my way.",
  },
  {
    id: "5",
    userName: "Christy Alex",
    userImg: require("../assets/Profile5.jpg"),
    messageTime: "1 Day ago",
    messageText: "Thank you for helping me list my home!",
  },
  // Add more users as needed
  {
    id: "6",
    userName: "Lisa Willson",
    userImg: require("../assets/Profile8.jpg"),
    messageTime: "3 Days ago",
    messageText: "Thanks for the Help!",
  },
  {
    id: "7",
    userName: "Emily Watson",
    userImg: require("../assets/Profile7.jpg"),
    messageTime: "1 Months ago",
    messageText: "Your welcome!",
  },
];

export default function MessageScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.messageContainer}>
      <Image source={item.userImg} style={styles.userImage} />
      <View style={styles.messageContent}>
        <Text style={styles.userName}>{item.userName}</Text>
        <Text style={styles.messageTime}>{item.messageTime}</Text>
        <Text style={styles.messageText}>{item.messageText}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={Messages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 10,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  messageContent: {
    flex: 1,
  },
  userName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  messageTime: {
    color: "#666",
    fontSize: 12,
  },
  messageText: {
    color: "#333",
    fontSize: 14,
  },
});
