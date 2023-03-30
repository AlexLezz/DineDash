import React, { useState } from "react";
import { View } from "react-native";
import { gStyle } from "./styles/gStyle";
import Main from "./сomponents/main";
import Header from "./сomponents/header";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import MainContainer from "./сomponents/mainContainer";

const fonts = () =>
  Font.loadAsync({
    "roboto-700": require("./assets/fonts/Roboto-Bold.ttf"),
    "roboto-500": require("./assets/fonts/Roboto-Medium.ttf"),
    "roboto-400": require("./assets/fonts/Roboto-Regular.ttf"),
  });

export default function App() {
  
  const [font, setFont] = useState(false);

  if (font) {
    return (
      <View style={gStyle.container}>
        <Header />
        <MainContainer />
      </View>
    );
  } else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setFont(true)}
        onError={console.warn}
      />
    );
  }
}
