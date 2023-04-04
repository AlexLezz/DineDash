import React from 'react';
import {Text, View } from 'react-native';
import { gStyle } from '../styles/gStyle';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Chat({navigation}) {
  return (
    <View style={gStyle.container}>
    <View style={gStyle.bookingTitle}>
      <Text style={gStyle.bookingTitleText}>Бронирования</Text>
    </View>
    <View style = {gStyle.bookingEmpty}>
    <MaterialCommunityIcons name="chat-remove-outline" size={200} color="#FE6223" />
      <Text style = {gStyle.bookingEmptyText}>Нет чатов</Text>
    </View>
  </View>
  );
}