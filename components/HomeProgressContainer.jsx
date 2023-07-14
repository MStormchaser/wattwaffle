import { View, Text, Dimensions } from "react-native";
import React from "react";
import { ProgressChart } from "react-native-chart-kit";

const containerWidth = Dimensions.get("window").width / 2 - 32;
console.log(containerWidth);

const HomeProgressContainer = ({
  filter,
  showFilter,
  title,
  progressData,
  numericalData,
}) => {
  return (
    <View className="mx-2 bg-grayLight1 rounded-lg flex-1 border-secondBlack border-t border-r-2 border-b-2 border-l">
      <Text className="font-bold text-lg text-secondBlack px-4 pt-4 leading-5">
        {title}
      </Text>
      <View className="items-center my-2">
        {showFilter === true ? <Text>{filter}</Text> : <Text></Text>}
      </View>
      <View className="items-center justify-center relative h-150 mb-4">
        <ProgressChart
          data={progressData}
          width={containerWidth}
          height={150}
          strokeWidth={8}
          radius={64}
          hideLegend={true}
          chartConfig={{
            backgroundColor: "#FCFAFA00",
            backgroundGradientFrom: "#FCFAFA00",
            backgroundGradientTo: "#FCFAFA00",

            color: (opacity = 1) => `rgba(00, 00, 00, ${opacity})`,
            // labelColor: (opacity = 1) => `rgba(37, 47, 49, ${opacity})`,
            style: {
              borderRadius: 32,
            },
          }}
        />
        <View className="absolute">
          <Text className="text-center text-xl text-secondBlack font-bold">
            {numericalData}
          </Text>
          <Text className="text-center text-base text-secondBlack">
            Cent/ kWh
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HomeProgressContainer;
