import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import CheckedSymbol from "../assets/icons/Flash_Filled.svg"; // import your SVG component
import styles from "../styles/styleComponents";

// const [selected, setSelected] = useState(false);

const Checkbox = ({ selected, onSelectedChange }) => {
  return (
    <TouchableOpacity
      style={styles.checkbox}
      onPress={() => onSelectedChange(!selected)}
    >
      {selected && <CheckedSymbol width={15} height={15} />}
    </TouchableOpacity>
  );
};

export default Checkbox;
