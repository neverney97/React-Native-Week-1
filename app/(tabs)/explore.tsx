import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import uuid from "react-native-uuid";
import { users } from "../../constants/index";

const Explore = () => {
  // Simple data array
  const User = [
    { id: uuid.v4(), name: "Alice" },
    { id: uuid.v4(), name: "Bob" },
    { id: uuid.v4(), name: "Charlie" },
    { id: uuid.v4(), name: "David" },
    { id: uuid.v4(), name: "Eve" },
  ];

  // data
  // renderItem
  // keyExtractor
  return (
    <SafeAreaView className="flex-1 bg-white px-4">
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View className="flex-1">
            <View className="">
              <Image source={item.image} className="w-1/2 rounded-lg " />
            </View>
            <Text>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default Explore;

const styles = StyleSheet.create({});
