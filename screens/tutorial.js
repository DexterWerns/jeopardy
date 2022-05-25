import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  FlatList,
  SafeAreaView,
} from "react-native";

export default ({ navigation }) => {
  return (
    <SafeAreaView>
      <TouchableHighlight
        style={styles.box}
        onPress={() => navigation.push("Home")}
      >
        <View style={styles.box}>
          <Text>Click here to play</Text>
          <Text style={styles.title}>Welcome to jeopardy</Text>
          <Text style={styles.title}>
            This is a simple tutorial to help you play
          </Text>
          <Text style={styles.title}>
            Clicking on one of the large blue cells will give you the respective
            question
          </Text>
          <Text style={styles.title}>
            After clicking on a cell you will be sent to an answer screen,
            clicking on the qustion will reveal the answer
          </Text>
          <Text style={styles.title}>
            The scoreboard is operated through clicking on the team that has
            gained the points and giving them the deserved number
          </Text>
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "GillSans-LightItalic",
    fontSize: 34,
  },
  box: {},
});
