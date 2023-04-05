import React from 'react';
import { Text, View } from 'react-native';
import { gStyle } from '../styles/gStyle';
import FullInfo from "./fullInfo";
import Main from './main';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function stackNav() {
  return (
      <Stack.Navigator>
        <Stack.Screen
            name='Main'
            component={Main}
            options={{title: 'Главная'}}
        />
        <Stack.Screen 
          name='FullInfo'
          component={FullInfo}
          options={{title: 'Подробнее'}}
        />
      </Stack.Navigator>
  );
}