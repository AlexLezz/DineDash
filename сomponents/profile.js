import React, { useState } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, Button } from 'react-native';
import { gStyle } from '../styles/gStyle';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Modal from "react-native-modal";
/*const AvatarPicker = ({ imageUri, setImageUri }) => {
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        setImageUri(result.uri);
      }
    } catch (error) {
      console.log('Error selecting image:', error);
    }
  };
  return (
    <TouchableOpacity onPress={selectImage}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      ) : (
        <Image
          source={require('../img/profile2.png')}
          style={{ width: 200, height: 200 }}
        />
      )}
    </TouchableOpacity>
  );
};
*/

export default function Profile({ navigation }) {

  const pickPhoto = async () => {
    // No permissions request is necessary for launching the image library
    let resultPhoto = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(resultPhoto);

    if (!resultPhoto.canceled) {
      setImage(resultPhoto.assets[0].uri);
    }
  };

  const pickGallery = async () => {
    // No permissions request is necessary for launching the image library
    let resultGallery = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(resultGallery);

    if (!resultGallery.canceled) {
      setNewPhoto(resultGallery.assets[0].uri)
    }
  };
  const [modalPersonalInfo, setModalPersonalInfo] = useState(false);
  const [modalAddPhoto, setmodalAddPhoto] = useState(false);
  const [newPhoto, setNewPhoto] = useState(require('../img/profile2.png'))
  //const [imageUri, setImageUri] = useState(null);
  return (
    
    <ScrollView style={gStyle.container}>
      <Modal isVisible={modalAddPhoto} transparent={true} animationType="slide">
        <View style={{position:"absolute", bottom: "0%", backgroundColor: "white", width: "100%", borderBottomLeftRadius: 25, borderBottomRightRadius: 25, borderTopLeftRadius: 25, borderTopRightRadius: 25}}>
          <TouchableOpacity onPress={pickPhoto}>
          <View style={{flexDirection: "row", paddingHorizontal: "10%", paddingVertical: "5%", borderBottomWidth: 1,}}>
          <Ionicons name="camera-outline" size={40} color="black" />
          <Text style={{fontSize:30, marginLeft: "30%"}}>Камера</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={pickGallery}>
          <View style={{flexDirection: "row", paddingHorizontal: "10%", paddingVertical: "5%",borderBottomWidth: 1,}}>
          <Ionicons name="image-outline" size={40} color="black" />
          <Text style={{fontSize:30, marginLeft: "30%"}}>Галерея</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setmodalAddPhoto(false)}>
          <View style={{flexDirection: "row", paddingHorizontal: "10%", paddingVertical: "5%"}}>
          <Ionicons name="close-circle-outline" size={40} color="black" />
          <Text style={{fontSize:30, marginLeft: "30%"}}>Выход</Text>
          </View>
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal visible = {modalPersonalInfo} style={{width:"100%", marginHorizontal: "0%", marginVertical:"0%"}}>
        <View style={gStyle.container}>
        <Ionicons name="arrow-back" size={24} color="black" onPress={() => setModalPersonalInfo(false)}/>
        </View>
      </Modal>
      <View style={gStyle.profileContainer}>
        <TouchableOpacity onPress={() => setmodalAddPhoto(true)}>
      <Image style={gStyle.profileImg} source={require('../img/profile2.png')}/>
        </TouchableOpacity>
        <View style={gStyle.profileNameAndNumberView}>
          <Text style={gStyle.profileTextNameAndNumber}>Иван Иванов</Text>
          <Text style={gStyle.profileTextNameAndNumber}>88005553535</Text>
        </View>
      </View>
      <View style={gStyle.profileSettings}>
        <View style={{ flex: 1 }}>
          <Text style={gStyle.profileSettingNameText}>НАСТРОЙКИ</Text>
          <TouchableOpacity onPress={() => setModalPersonalInfo(true)}>
          <View style={gStyle.profilePersonalInfo}>
            <Text style={gStyle.profilePersonalIconsText}>Личная информация</Text>
            <Ionicons name="person-outline" size={25} color="black" />
          </View>
          </TouchableOpacity>
          <View style={gStyle.profileSecurity}>
            <Text style={gStyle.profileSecurityText}>Безопасность</Text>
            <Ionicons name="ios-lock-closed-outline" size={25} color="black" />
          </View>
        </View>
      </View>
      <View style={gStyle.AboutUsBlock}>
        <View style={{ flex: 1 }}>
          <Text style={gStyle.AboutUsText}>О НАС</Text>
          <View style={gStyle.AboutApp}>
            <Text style={gStyle.AboutAppText}>О приложении</Text>
            <Ionicons name="information-circle-outline" size={25} color="black" />
          </View>
          <View style={gStyle.Support}>
            <Text style={gStyle.SupportText}>Центр поддержки</Text>
            <Ionicons name="help-circle-outline" size={25} color="black" />
          </View>
          <View style={gStyle.Exit}>
            <Text style={gStyle.ExitText}>Выход</Text>
            <MaterialCommunityIcons name="location-exit" size={24} color="black" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};