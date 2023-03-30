import React from 'react';
import { Text, View } from 'react-native';
import { gStyle } from '../styles/gStyle';
// Screens
import Main from './main';
import Booking from './booking';
import Chat from './chat';
import Favorites from './favorites';
import Profile from './profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
// Screen name
const mainName = "Главная";
const bookingName = "Бронирования";
const chatName = "Чат";
const favoritesName = "Избранное";
const profileName = "Профиль";

const Tab = createBottomTabNavigator();

export default function mainContainer() {
  return (
    <NavigationContainer>
        <Tab.Navigator initialRouteName={mainName} 
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                let rn = route.name;
                if (rn === mainName) {
                    iconName = focused ? 'home' : 'home-outline'
                } else if (rn === bookingName) {
                    iconName = focused ? 'briefcase' : 'briefcase-outline'
                } else if (rn === chatName) {
                    iconName = focused ? 'chatbox' : 'chatbox-outline'
                } else if (rn === favoritesName) {
                    iconName = focused ? 'heart' : 'heart-outline'
                } else if (rn === profileName) {
                    iconName = focused ? 'person' : 'person-outline'
                }

                return <Ionicons name={iconName} size={size} color = {color} />
            },
        })}
        tabBarOptions={{
            activeTintColor: '#FE6223',
            inactiveTintColor: '#333138',
            // style: {paddingVertical: 100, height: 1400},
            labelStyle: {fontFamily: 'roboto-400', fontSize: 10},
        }}
        >

        <Tab.Screen name={mainName} component={Main}/>
        <Tab.Screen name={bookingName} component={Booking}/>
        <Tab.Screen name={favoritesName} component={Favorites}/>
        <Tab.Screen name={chatName} component={Chat}/>
        <Tab.Screen name={profileName} component={Profile}/>

        </Tab.Navigator>
    </NavigationContainer>
  );
}