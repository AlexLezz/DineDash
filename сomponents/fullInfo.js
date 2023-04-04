import React from "react";
import { Text, View, Image, Button, TextInput, ScrollView, Pressable } from "react-native";
import { gStyle } from "../styles/gStyle";
import { Ionicons } from "@expo/vector-icons";
import { Formik } from "formik";
import { Picker } from "@react-native-picker/picker";

export default function FullInfo({ route }) {
  return (
    <View style={gStyle.container}>
      <View style={gStyle.slider}>
        <Image
          style={gStyle.mainRestImg}
          source={{ uri: route.params.img }}
        ></Image>
      </View>
      <ScrollView style={gStyle.FullInfoOptions}>
        <Text style={gStyle.mainRestTitle}>{route.params.title}</Text>
        <View style={gStyle.restInfoDescr}>
          <View style={gStyle.restInfoNav}>
            <View style={gStyle.mainRestNav}>
              <Ionicons name="location-outline" size={20} color="black" />
              <Text style={gStyle.mainRestNavText}>{route.params.nav}</Text>
            </View>
            <Text style={gStyle.mainRestNavSlots}>
              {route.params.slots} мест на 6-8 персон
            </Text>
          </View>
          <View style={gStyle.restInfoReviews}>
            <View style={gStyle.restInfoStarContainer}>
              <Text style={gStyle.mainRestStarText}>{route.params.stars}</Text>
              <Ionicons name="star" size={18} color="black" />
            </View>
            <Text style={gStyle.reviewCol}>
              {route.params.reviewCol} Отзывов
            </Text>
          </View>
        </View>
        <View style={gStyle.fullInfoSlots}>
          <Text style={gStyle.fullInfoSlotsTitle}>
            <Text style={gStyle.fullInfoSlotsTitleNum}>
              {route.params.freeSlots}
            </Text>{" "}
            свободных столиков
          </Text>
          <View style={gStyle.fullInfoForm}>
            <View>
              <Text style={gStyle.fullInfoFormTitle}>Количество столиков:</Text>
              <Picker selectedValue="1">
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
              </Picker>
            </View>
            <View>
              <Text style={gStyle.fullInfoFormTitle}>Количество гостей:</Text>
              <Picker selectedValue="1">
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
              </Picker>
            </View>
            <View>
              <Text style={gStyle.fullInfoFormTitle}>Время прибытия:</Text>
              <Picker selectedValue="15:00">
                <Picker.Item label="15:00" value="15:00" />
                <Picker.Item label="16:00" value="16:00" />
                <Picker.Item label="18:00" value="17:00" />
                <Picker.Item label="19:00" value="19:00" />
                <Picker.Item label="20:00" value="20:00" />
              </Picker>
            </View>
            <View style={gStyle.fullInfoFormMore}>
              <TextInput placeholder="Ваши пожелания (необязательно)" />
            </View>
            <Pressable style={gStyle.fullInfoBtn}>
            <Text style={gStyle.fullInfoBtnText}>Забронировать</Text>
          </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
