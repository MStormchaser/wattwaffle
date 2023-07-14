import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { UserIcon } from "react-native-heroicons/outline";
import { BoltIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const HomeHeader = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-row items-center justify-between mx-4">
      {/* Menu Button */}
      <TouchableOpacity
        className="h-12 w-12 items-center justify-center bg-grayLight1 p-2 rounded-lg"
        onPress={() => navigation.goBack()}
      >
        <UserIcon color={"#252F31"} size={24} />
      </TouchableOpacity>
      <View className="bg-primaryYellow h-12 w-12 items-center justify-center rounded-lg">
        <BoltIcon color={"#252F31"} size={24} />
      </View>
    </View>
  );
};

export default HomeHeader;
