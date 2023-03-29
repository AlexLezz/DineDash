import React from 'react';
import { Text, View } from 'react-native';
import { gStyle } from './styles/gStyle';
import Main from './сomponents/main';
import Header from './сomponents/header';



export default function App() {
  return (
    <View style={gStyle.container}>
      <Header />
      <Main />
    </View>
  );
}
