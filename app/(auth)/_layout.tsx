import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const AuthLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
      <Stack.Screen name="signup" />
    </Stack>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});
