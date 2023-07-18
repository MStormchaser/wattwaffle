import { View, Text, Dimensions } from "react-native";
import React from "react";
import { LineChart } from "react-native-chart-kit";
import styles from "../styles/styleComponents";

const HomeLineChart = () => {
  return (
    <View className="mt-4 items-center">
      <View className="pt-4 bg-grayLight1" style={styles.wattBorderStyle}>
        <LineChart
          data={{
            labels: [
              "00",
              "02",
              "04",
              "06",
              "08",
              "10",
              "12",
              "14",
              "16",
              "18",
              "20",
              "22",
            ],
            datasets: [
              {
                data: [
                  Math.random() * 1,
                  Math.random() * 1,
                  Math.random() * 1,
                  Math.random() * 1,
                  Math.random() * 1,
                  Math.random() * 1,
                  Math.random() * 1,
                  Math.random() * 1,
                  Math.random() * 1,
                  Math.random() * 1,
                  Math.random() * 1,
                  Math.random() * 1,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width - 32} // from react-native
          height={220}
          withInnerLines={false}
          withOuterLines={false}
          withShadow={false}
          yAxisLabel="€"
          yAxisSuffix=""
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#FCFAFA",
            backgroundGradientFrom: "#FCFAFA",
            backgroundGradientTo: "#FCFAFA",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(37, 47, 49, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(37, 47, 49, ${opacity})`,
            style: {
              borderRadius: 32,
            },
            propsForDots: {
              r: "3",
              strokeWidth: "0",
              stroke: "#FCFAFA",
            },
          }}
          bezier
          style={{
            marginVertical: 16,
            borderRadius: 8,
          }}
        />
      </View>
    </View>
  );
};

export default HomeLineChart;
