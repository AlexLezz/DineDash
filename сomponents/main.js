import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { gStyle } from "../styles/gStyle";

export default function Main({navigation}) {
  const [info, setInfo] = useState([
    {
      img: "../img/rest1.jpg",
      title: "Madagascar",
      descr:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      nav: "ул. Пушкина, дом 2",
      stars: "4,9",
    },
    {
      img: "../img/rest2.jpg",
      title: "Racsagadam",
      descr:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      nav: "ул. Калатушкина, дом 3",
      stars: "9.4",
    },
    {
      img: "../img/rest3.jpg",
      title: "MamaRoma",
      descr: "Ну давай, залезай сюда",
      nav: "ул. Пушкина, дом 2",
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
        data={info}
        renderItem={({ item }) => {
          <TouchableOpacity
            onPress={() => navigator.navigate("restInfo", item)}
          >
            <View>
              <Text>{item.title}</Text>
              <View>
                <Text>{item.nav}</Text>
                <View>
                  <Text>{item.stars}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>;
        }}
      />
    </View>
  );
}
