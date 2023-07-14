import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../styles/styleComponents";

const filterTypes = [
  "Today",
  "Last 48h",
  "Last 7 days",
  "Last 30 days",
  "All time",
];

const HomeFilterTabs = ({ activeFilterTypes, setActiveFilterTypes }) => {
  return (
    <View className="mt-4">
      <FlatList
        data={filterTypes}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.tab(activeFilterTypes, item)}
            onPress={() => {
              setActiveFilterTypes(item);
              // implement filter logic here
            }}
          >
            <Text style={styles.tabText(activeFilterTypes, item)}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          columnGap: 8,
          paddingLeft: 16,
          paddingRight: 16,
        }}
      />
    </View>
  );
};

export default HomeFilterTabs;
