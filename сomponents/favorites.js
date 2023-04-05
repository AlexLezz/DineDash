import React from "react";
import { Text, View } from "react-native";
import { gStyle } from "../styles/gStyle";
import { Ionicons } from '@expo/vector-icons';

export default function Favorites({ navigation }) {
  return (
    <View style={gStyle.container}>
    <View style={gStyle.bookingTitle}>
      <Text style={gStyle.bookingTitleText}>Бронирования</Text>
    </View>
    <View style = {gStyle.bookingEmpty}>
    <Ionicons name="heart-dislike-outline" size={200} color="#FE6223" />
      <Text style = {gStyle.bookingEmptyText}>У вас нет избранных ресторанов...</Text>
    </View>
  </View>
  );
}
