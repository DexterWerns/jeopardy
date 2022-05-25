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
      <View style={styles.box}>
        <TouchableHighlight
          style={styles.box}
          onPress={() => navigation.push("Home")}
        >
          <Text>
            Welcome to jeopardy This is a simple tutorial to help you play
            Clicking on one of the large blue cells will give you the respective
            question After clicking on a cell you will be sent to an answer
            screen, clicking on the qustion will reveal the answer The
            scoreboard is operated through clicking on the team that has gained
            the points and giving them the deserved number Click here to play
          </Text>
        </TouchableHighlight>
      </View>
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
