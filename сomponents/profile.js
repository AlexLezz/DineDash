import React from 'react';
import {Text, View, Image, Dimensions } from 'react-native';
import { gStyle } from '../styles/gStyle';

export default function Profile({navigation}){
  const window = Dimensions.get("window");
  return (
    <View>
    <View style={gStyle.profileContainer}>
    <Image style={gStyle.profileImg} source={require('../img/profile2.png')}/>
    <View style={gStyle.profileNameAndNumberView}>
    <Text style={gStyle.profileTextNameAndNumber}>Eblan Eblanovich</Text>
    <Text style={gStyle.profileTextNameAndNumber}>88005553535</Text>
    </View>
    </View>
    <View style={gStyle.profileSettings}>
    <Text>Настройки</Text>
    </View>
    </View>
  );
};
