import hero from "@/assets/images/ship.png";
import { Link } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="items-center mt-20 mb-8 p-4">
        <Image source={hero} className="w-full h-[25rem]" />
      </View>
      {/* Text */}
      <View className="">
        <Text className="text-3xl font-bold text-center">
          Free Delivery Offers
        </Text>
        <Text className="text-center mt-4 text-gray-600 px-8">
          All your favorite foods in one place — you order, we deliver. Fast,
          fresh, and delicious meals, right to your doorstep.
        </Text>
      </View>

      <View className="px-6">
        <Link href="/(auth)/signup" asChild>
          <TouchableOpacity className="bg-orange-500 rounded-full mt-4 mx-5 py-4 shadow-md">
            <Text className="text-white font-bold text-xl text-center">
              Get Started
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({});
