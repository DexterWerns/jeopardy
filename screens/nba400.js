import React from "react";
import { Pressable, SafeAreaView, StyleSheet, Text } from "react-native";

const UselessTextInput = ({ navigation }) => {
  const [text, setText] = React.useState(
    "This player scored the first three-point basket in NBA history."
  );
  const [number, onChangeNumber] = React.useState(null);
  const [theAnswer, setTheAnswer] = React.useState("");
  const onChangeText = () => {
    setTheAnswer("Who is Chris Ford? (Boston Celtics)");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={onChangeText}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
      <Text style={styles.text}>{theAnswer}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    fontSize: 40,
    fontFamily: "GillSans-LightItalic",
    color: "white",
  },
  container: {
    backgroundColor: "blue",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UselessTextInput;
