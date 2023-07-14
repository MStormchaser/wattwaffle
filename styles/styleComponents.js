import { StyleSheet } from "react-native";

const COLORS = {
  primaryYellow: "#FEF15A",
  secondBlack: "#252F31",
  grayLight1: "#FCFAFA",
  grayLight2: "#818B8D",
  grayLight3: "#615954",
};

const FONT = {
  xsmall: 12,
  small: 14,
  base: 16,
  large: 18,
  h1: 36,
  h2: 30,
  h3: 24,
};

const SIZE = {
  buttonRoundedFully: 25,
  buttonRounded: 8,
};

// Styles
const styles = StyleSheet.create({
  wattBorderStyle: {
    borderTopWidth: 1,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 1,
    borderRadius: SIZE.buttonRounded,
    borderColor: COLORS.secondBlack,
  },
  inputStyle: {
    color: COLORS.grayLight2,
    backgroundColor: COLORS.grayLight1,
    paddingLeft: 8,
    height: 48,
    fontSize: FONT.base,
    borderTopWidth: 1,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 1,
    borderRadius: SIZE.buttonRounded,
    borderColor: COLORS.secondBlack,
  },
  buttonDark: {
    backgroundColor: COLORS.secondBlack,
    paddingLeft: 8,
    height: 50,
    fontSize: FONT.base,
    borderTopWidth: 1,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 1,
    borderRadius: SIZE.buttonRounded,
    borderColor: COLORS.secondBlack,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonDarkDisabled: {
    backgroundColor: COLORS.grayLight2,
    opacity: 0.5,
    paddingLeft: 8,
    height: 50,
    fontSize: FONT.base,
    borderTopWidth: 1,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 1,
    borderRadius: SIZE.buttonRounded,
    borderColor: COLORS.secondBlack,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTranparent: {
    backgroundColor: COLORS.primaryYellow,

    height: 50,
    fontSize: FONT.base,
    borderTopWidth: 1,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 1,
    borderRadius: SIZE.buttonRounded,
    borderColor: COLORS.secondBlack,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonLight: {
    backgroundColor: COLORS.grayLight1,
    height: 50,
    fontSize: FONT.base,
    borderTopWidth: 1,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 1,
    borderRadius: SIZE.buttonRounded,
    borderColor: COLORS.secondBlack,
    justifyContent: "around",
    alignItems: "center",
    flexDirection: "row",
  },
  checkbox: {
    width: 25,
    height: 25,
    borderRadius: 4,
    borderTopWidth: 1,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 1,
    borderColor: COLORS.secondBlack,
    alignItems: "center", // to ensure the check icon is centered
    justifyContent: "center", // to ensure the check icon is centered
  },
  tab: (activeJobType, item) => ({
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: SIZE.buttonRoundedFully,
    // marginRight: 8,
    backgroundColor:
      activeJobType === item ? COLORS.secondBlack : COLORS.grayLight1,
  }),
  tabText: (activeJobType, item) => ({
    fontSize: FONT.base,
    color: activeJobType === item ? COLORS.grayLight1 : COLORS.secondBlack,
  }),
});

// Exports
export default styles;
