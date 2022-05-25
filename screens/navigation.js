import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import socceroptions from "./Soccer.js";
import NBAoptions from "./NBA.js";
import Olympicsoptions from "./Olympics.js";
import question from "./F100.js";
import questionf200 from "./F200.js";
import questionf300 from "./F300.js";
import questionf400 from "./F400.js";
import questionf500 from "./F500.js";
import questionnba from "./nba100.js";
import questionnba200 from "./nba200.js";
import questionnba300 from "./nba300.js";
import questionnba400 from "./nba400.js";
import questionnba500 from "./nba500.js";
import questionOlympics from "./Olympics100.js";
import questionOlympics200 from "./Olympics200.js";
import questionOlympics300 from "./Olympics300.js";
import questionOlympics400 from "./Olympics400.js";
import questionOlympics500 from "./Olympics500.js";
import questionSoccer from "./Soccer100.js";
import questionSoccer200 from "./Soccer200.js";
import questionSoccer300 from "./Soccer300.js";
import questionSoccer400 from "./Soccer400.js";
import questionSoccer500 from "./Soccer500.js";
import questionCFB from "./CFB100.js";
import questionCFB200 from "./CFB200.js";
import questionCFB300 from "./CFB300.js";
import questionCFB400 from "./CFB400.js";
import questionCFB500 from "./CFB500.js";
import main from "./main.js";
import tut from "./tutorial.js";

const MainStack = createStackNavigator();
const MainStackScreeen = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Welcome" component={tut} />
    <MainStack.Screen name="Home" component={main} />
    <MainStack.Screen name="F1 $100" component={question} />
    <MainStack.Screen name="F1 $200" component={questionf200} />
    <MainStack.Screen name="F1 $300" component={questionf300} />
    <MainStack.Screen name="F1 $400" component={questionf400} />
    <MainStack.Screen name="F1 $500" component={questionf500} />
    <MainStack.Screen name="nba $100" component={questionnba} />
    <MainStack.Screen name="nba $200" component={questionnba200} />
    <MainStack.Screen name="nba $300" component={questionnba300} />
    <MainStack.Screen name="nba $400" component={questionnba400} />
    <MainStack.Screen name="nba $500" component={questionnba500} />
    <MainStack.Screen name="Olympics $100" component={questionOlympics} />
    <MainStack.Screen name="Olympics $200" component={questionOlympics200} />
    <MainStack.Screen name="Olympics $300" component={questionOlympics300} />
    <MainStack.Screen name="Olympics $400" component={questionOlympics400} />
    <MainStack.Screen name="Olympics $500" component={questionOlympics500} />
    <MainStack.Screen name="Soccer $100" component={questionSoccer} />
    <MainStack.Screen name="Soccer $200" component={questionSoccer200} />
    <MainStack.Screen name="Soccer $300" component={questionSoccer300} />
    <MainStack.Screen name="Soccer $400" component={questionSoccer400} />
    <MainStack.Screen name="Soccer $500" component={questionSoccer500} />
    <MainStack.Screen name="CFB $100" component={questionCFB} />
    <MainStack.Screen name="CFB $200" component={questionCFB200} />
    <MainStack.Screen name="CFB $300" component={questionCFB300} />
    <MainStack.Screen name="CFB $400" component={questionCFB400} />
    <MainStack.Screen name="CFB $500" component={questionCFB500} />
  </MainStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <MainStackScreeen />
  </NavigationContainer>
);
