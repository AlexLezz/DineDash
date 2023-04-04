import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { gStyle } from "../styles/gStyle";
import MyStack from "./stackNav";

export default function Main({ navigation }) {
  const [info, setInfo] = useState([
    {
      img: "https://klike.net/uploads/posts/2022-09/1662641376_a.jpg",
      title: "Madagascar",
      slots: 20,
      freeSlots: 7,
      reviewCol: 78,
      descr:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      nav: "ул. Пушкина, дом 2",
      stars: "4,9",
    },
    {
      img: "https://tataevfamily.ru/wp-content/uploads/2022/06/12-2880x1920.jpg",
      title: "Racsagadam",
      slots: 34,
      freeSlots: 10,
      reviewCol: 23,
      descr:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      nav: "ул. Калатушкина, дом 3",
      stars: "4.4",
    },
    {
      img: "https://static.tildacdn.com/tild6639-6536-4962-a131-373562346337/RUSKI_interior_5.JPG",
      title: "MamaRoma",
      slots: 29,
      freeSlots: 19,
      reviewCol: 135,
      descr: "Ну давай, залезай сюда",
      nav: "ул. Лермонтова, дом 7",
      stars: "3.4",
    },
  ]);

  return (
    <View style={gStyle.container}>
      <View style={gStyle.searchContainer}>
        <Feather name="search" size={20} color="black" />
        <Text style={gStyle.text}>Выбор ресторана</Text>
        <Feather name="list" size={24} color="black" />
      </View>
      <FlatList
        style={gStyle.restCard}
        data={info}
        renderItem={({ item }) => (
          <TouchableOpacity style={gStyle.mainRest}
            onPress={() => navigation.navigate('FullInfo', item)}
          >
            <View>
              <Image style={gStyle.mainRestImg} source={{ uri: item.img }} />
              <Text style={gStyle.mainRestTitle}>{item.title}</Text>
              <View style={gStyle.mainRestDescr}>
                <View style={gStyle.mainRestNav}>
                  <Ionicons name="location-outline" size={20} color="black" />
                  <Text style={gStyle.mainRestNavText}>{item.nav}</Text>
                </View>
                <View style={gStyle.mainRestStar}>
                  <Text style={gStyle.mainRestStarText}>{item.stars}</Text>
                  <Ionicons name="star" size={18} color="black" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
