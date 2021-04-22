import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ScrollView,
} from "react-native";
import Start from "./components/Start";
import Chat from "./components/Chat";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Start">
          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen name="Chat" component={Chat} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  box1: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
  },
  box2: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
  },
  box3: {
    flex: 1,
    backgroundColor: "yellow",
    justifyContent: "center",
  },
});
