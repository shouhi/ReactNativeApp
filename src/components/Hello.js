import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Hello(props) {
  const { children, bang } = props;
  return (
    <View>
      <Text style={styles.text}>{`Hello ${children}${bang ? "!" : ""}`}</Text>
    </View>
  );
}

Hello.defaultProps = {
  bang: false,
};

const styles = StyleSheet.create({
  text: {
    color: "#ffffff",
    backgroundColor: "blue",
    fontSize: 40,
    fontWeight: "bold",
    padding: 16,
  },
});

export default Hello;
