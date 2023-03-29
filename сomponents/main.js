import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { gStyle } from '../styles/gStyle';

export default function Main() {
  return (
    <View style={gStyle.container}>
        <View style={gStyle.searchContainer}>
            <Feather name="search" size={20} color="black" />
            <Text>Выбор ресторана</Text>
            <Feather name="list" size={24} color="black" />
        </View>
    </View>
  );
}