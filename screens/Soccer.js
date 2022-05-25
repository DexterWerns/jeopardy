import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  SafeAreaView,
  Linking,
} from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { RowItem, separator, styles } from "../components/rowitem.js";

export default ({ navigation }) => {
  return (
    <SafeAreaView>
      <RowItem
        title="Sports 100"
        icon={
          <Entypo
            name="chevron-with-circle-right"
            size={24}
            color="blue"
            onPress={() => navigation.push("Sports 100")}
          />
        }
      />

      <sepatator />

      <RowItem
        title="go back to sleep"
        icon={
          <Entypo
            name="chevron-with-circle-right"
            size={24}
            color="blue"
            color="blue"
            onPress={() => navigation.push("sleep")}
          />
        }
      />
      <sepatator />
      <RowItem
        title="Shower"
        icon={
          <Entypo
            name="chevron-with-circle-right"
            size={24}
            color="blue"
            color="blue"
            onPress={() => navigation.push("shower")}
          />
        }
      />
    </SafeAreaView>
  );
};
