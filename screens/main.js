import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  SafeAreaView,
  Linking,
  Alert,
  TextInput,
  Pressable,
} from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";

export default ({ navigation }) => {
  const [count1, setCount1] = useState(0);
  const onPress1 = () => setCount1(count1 + 100);
  const [count2, setCount2] = useState(0);
  const onPress2 = () => setCount2(count2 + 100);
  const [count3, setCount3] = useState(0);
  const onPress3 = () => setCount3(count3 + 100);
  const [count4, setCount4] = useState(0);
  const onPress4 = () => setCount4(count4 + 100);
  const [count5, setCount5] = useState(0);
  const onPress5 = () => setCount5(count5 + 100);
  return (
    <SafeAreaView
      style={{
        flexDirection: "row",
        flex: 1,
        color: "blue",
        backgroundColor: "black",
      }}
    >
      <SafeAreaView
        style={{
          flexDirection: "column",
          flex: 1,
          color: "blue",
          backgroundColor: "black",
        }}
      >
        <View style={styles.box}>
          <Text style={styles.font}>F1</Text>
        </View>

        <TouchableHighlight
          style={styles.box}
          onPress={() => navigation.push("F1 $100")}
        >
          <Text style={styles.font}>100</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.box}
          onPress={() => navigation.push("F1 $200")}
        >
          <Text style={styles.font}>200</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.box}
          onPress={() => navigation.push("F1 $300")}
        >
          <Text style={styles.font}>300</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.box}
          onPress={() => navigation.push("F1 $400")}
        >
          <Text style={styles.font}>400</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.box}
          onPress={() => navigation.push("F1 $500")}
        >
          <Text style={styles.font}>500</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={onPress1}>
          <View style={styles.button}>
            <Text>Team 1</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.countContainer}>
          <Text style={styles.countText}>{count1 || 0}</Text>
        </View>
      </SafeAreaView>

      <SafeAreaView
        style={{
          flexDirection: "column",
          flex: 1,
          color: "blue",
          backgroundColor: "black",
        }}
      >
        <TouchableHighlight style={styles.box}>
          <Text style={styles.font}>NBA</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.box}
          onPress={() => navigation.push("nba $100")}
        >
          <Text style={styles.font}>100</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.box}
          onPress={() => navigation.push("nba $200")}
        >
          <Text style={styles.font}>200</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.box}
          onPress={() => navigation.push("nba $300")}
        >
          <Text style={styles.font}>300</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.box}
          onPress={() => navigation.push("nba $400")}
        >
          <Text style={styles.font}>400</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.box}
          onPress={() => navigation.push("nba $500")}
        >
          <Text style={styles.font}>500</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={onPress2}>
          <View style={styles.button}>
            <Text>Team 2</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.countContainer}>
          <Text style={styles.countText}>{count2 || 0}</Text>
        </View>
      </SafeAreaView>
      <SafeAreaView
        style={{
          flexDirection: "column",
          flex: 1,
          color: "blue",
          backgroundColor: "black",
        }}
      >
        <TouchableHighlight style={styles.box}>
          <Text style={styles.font}>Olympics</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.box}
          onPress={() => navigation.push("Olympics $100")}
        >
          <Text style={styles.font}>100</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.box}
          onPress={() => navigation.push("Olympics $200")}
        >
          <Text style={styles.font}>200</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.box}
          onPress={() => navigation.push("Olympics $300")}
        >
          <Text style={styles.font}>300</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.box}
          onPress={() => navigation.push("Olympics $400")}
        >
          <Text style={styles.font}>400</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.box}
          onPress={() => navigation.push("Olympics $500")}
        >
          <Text style={styles.font}>500</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={onPress3}>
          <View style={styles.button}>
            <Text>Team 3</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.countContainer}>
          <Text style={styles.countText}>{count3 || 0}</Text>
        </View>
      </SafeAreaView>
      <SafeAreaView
        style={{
          flexDirection: "column",
          flex: 1,
          color: "blue",
          backgroundColor: "black",
        }}
      >
        <TouchableHighlight style={styles.box}>
          <Text style={styles.font}>Soccer</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.box}
          onPress={() => navigation.push("Soccer $100")}
        >
          <Text style={styles.font}>100</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.box}
          onPress={() => navigation.push("Soccer $200")}
        >
          <Text style={styles.font}>200</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.box}
          onPress={() => navigation.push("Soccer $300")}
        >
          <Text style={styles.font}>300</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.box}
          onPress={() => navigation.push("Soccer $400")}
        >
          <Text style={styles.font}>400</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.box}
          onPress={() => navigation.push("Soccer $500")}
        >
          <Text style={styles.font}>500</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={onPress4}>
          <View style={styles.button}>
            <Text>Team 4</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.countContainer}>
          <Text style={styles.countText}>{count4 || 0}</Text>
        </View>
      </SafeAreaView>
      <SafeAreaView
        style={{
          flexDirection: "column",
          flex: 1,
          color: "blue",
          backgroundColor: "black",
        }}
      >
        <TouchableHighlight style={styles.box}>
          <Text style={styles.font}>CFB</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.box}>
          <Text style={styles.font} onPress={() => navigation.push("CFB $100")}>
            100
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.box}>
          <Text style={styles.font} onPress={() => navigation.push("CFB $200")}>
            200
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.box}>
          <Text style={styles.font} onPress={() => navigation.push("CFB $300")}>
            300
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.box}>
          <Text style={styles.font} onPress={() => navigation.push("CFB $400")}>
            400
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.box}>
          <Text style={styles.font} onPress={() => navigation.push("CFB $500")}>
            500
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={onPress5}>
          <View style={styles.button}>
            <Text>Team 5</Text>
          </View>
        </TouchableHighlight>
        <View style={styles.countContainer}>
          <Text style={styles.countText}>{count5 || 0}</Text>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  box: {
    flexDirection: "column",
    flex: 10,
    flexWrap: "wrap",
    minWidth: "100%",
    backgroundColor: "blue",
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    alignSelf: "flex-start",
    maxWidth: "100%",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  font: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
  countText: {
    color: "#FF00FF",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
});
