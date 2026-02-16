import { CircleChevronLeft } from "lucide-react-native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  return (
    <SafeAreaView className="flex-1 bg-blue-950 px-4">
      <TouchableOpacity className="bg-white self-start rounded-full p-4">
        <CircleChevronLeft size={40} />
      </TouchableOpacity>

      <View className="mt-20 space-y-4 items-center">
        <Text className="text-white font-bold text-4xl">Sign Up</Text>
        <Text className="text-white text-center text-xl">
          Please sign up to get started!
        </Text>
      </View>

      {/* Forms */}
      <View></View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
