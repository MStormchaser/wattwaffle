import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import HomeHeader from "../components/HomeHeader";
import HomeSearch from "../components/HomeSearch";
import HomeFilterTabs from "../components/HomeFilterTabs";
import HomeWelcomeMessage from "../components/HomeWelcomeMessage";
import HomeLineChart from "../components/HomeLineChart";
import HomeProgressContainer from "../components/HomeProgressContainer";

const HomeScreen = () => {
  const [activeFilterTypes, setActiveFilterTypes] = useState("Today");

  return (
    <SafeAreaView className="bg-primaryYellow flex-1">
      {/* Header */}
      <HomeHeader />
      {/* Welcome Message */}
      <HomeWelcomeMessage />
      {/* Search field */}
      <HomeSearch />
      {/* Filter */}
      <HomeFilterTabs
        activeFilterTypes={activeFilterTypes}
        setActiveFilterTypes={setActiveFilterTypes}
      />
      <ScrollView>
        <HomeLineChart />
        <View className="flex-row mx-2 mt-4">
          <HomeProgressContainer
            showFilter={false}
            title="Current energy price"
            progressData={{ data: [0.6] }}
            numericalData={41}
          />
          <HomeProgressContainer
            showFilter={true}
            filter="Today"
            title="Average energy price"
            progressData={{ data: [0.55] }}
            numericalData={37}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
