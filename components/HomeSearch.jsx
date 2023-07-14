import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import styles from "../styles/styleComponents";

const HomeSearch = () => {
  return (
    <View className="flex-row items-center mx-4 mt-4">
      <TextInput
        style={styles.inputStyle}
        className="flex-1"
        placeholder="Search for your postcode or city"
        selectionColor={"#252F31"} // this changes the caret color
      />
      <TouchableOpacity className="h-12 w-12 justify-center items-center bg-detailGreen rounded-lg ml-4">
        <MagnifyingGlassIcon color={"#FCFAFA"} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeSearch;
