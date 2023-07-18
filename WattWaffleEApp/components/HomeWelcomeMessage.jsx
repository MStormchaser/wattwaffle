import { View, Text } from "react-native";
import React from "react";

const HomeWelcomeMessage = () => {
  return (
    <View className="mx-4 mt-4">
      <Text className="text-base text-secondBlack">Hello Max</Text>
      <Text className="text-2xl text-secondBlack font-bold -mt-1">
        Find out your local energy price
      </Text>
    </View>
  );
};

export default HomeWelcomeMessage;
