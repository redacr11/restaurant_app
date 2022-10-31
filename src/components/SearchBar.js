import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <AntDesign name="search1" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search for Restaurant"
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        onEndEditing={() => onTermSubmit()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0EEEE",
    height: 45,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    flexDirection: "row",
    borderWidth: 1,
  },
  inputStyle: {
    flex: 1,
  },
  iconStyle: {
    fontSize: 26,
    alignSelf: "center",
    marginHorizontal: 10,
  },
});

export default SearchBar;
