import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Search: React.FC = ({ navigation }: any) => {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Photo")}>
        <Text style={{ color: "white" }}>Photo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Search;
