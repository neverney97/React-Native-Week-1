import profileImage from "@/assets/images/emma.jpeg";
import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// const screenWidth = Dimensions.get('window').width;
// const imageSize = screenWidth * 0.6;

const Index = () => {
  return (
    <SafeAreaView className="flex-1 justify-center px-4 bg-white">
      {/* Profile picture */}
      <View className="items-center mb-8">
        {/* Full name */}
        <Image source={profileImage} className="w-60 h-60 rounded-full" />
      </View>

      {/* Forms */}
      <View className="space-y-4 mb-6">
        {/* Full name */}
        <Text className="mb-2">Full Name</Text>
        <TextInput
          placeholder="Enter your full name"
          className="bg-white p-2 border border-gray-300 shadow-sm rounded-xl"
        />
      </View>

      {/* Email */}
      <View className="space-y-4 mb-6">
        <Text className="mb-2">Email Address</Text>
        <TextInput
          placeholder="Enter your email address"
          className="bg-white p-2 border border-gray-300 shadow-sm rounded-xl"
        />
      </View>

      {/* Username */}
      <View className="space-y-4 mb-8">
        <Text className="mb-2">Username</Text>
        <TextInput
          placeholder="Enter your username"
          className="bg-white p-2 border border-gray-300 shadow-sm rounded-xl"
        />
      </View>

      <TouchableOpacity className="bg-blue-500 p-4 rounded-xl">
        <Text className="text-white text-center">Save Changes</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Index;
