import React from "react";
import { Text, View } from "react-native";
import { gStyle } from "../styles/gStyle";
import { FontAwesome5 } from '@expo/vector-icons';

export default function Booking({ navigation }) {
  return (
    <View style={gStyle.container}>
      <View style={gStyle.bookingTitle}>
        <Text style={gStyle.bookingTitleText}>Бронирования</Text>
      </View>
      <View style = {gStyle.bookingEmpty}>
        <FontAwesome5 name="meh" size={200} color="#FE6223" />
        <Text style = {gStyle.bookingEmptyText}>Упс! Похоже здесь пусто...</Text>
      </View>
    </View>
  );
}
