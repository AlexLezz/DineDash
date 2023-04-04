import React, { useState } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, Button } from 'react-native';
import { gStyle } from '../styles/gStyle';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
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
  //const [imageUri, setImageUri] = useState(null);
  const AddPhoto = async() =>{
    const result = ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (result.assets) {
      console.log(result.assets);
    }
  }
  return (
    <ScrollView>
      <View style={gStyle.profileContainer}>
      <Image style={gStyle.profileImg} source={require('../img/profile2.png')}/>
      <Button title ='Загрузить фото' onPress={AddPhoto}/>
        <View style={gStyle.profileNameAndNumberView}>
          <Text style={gStyle.profileTextNameAndNumber}>Eblan Eblanovich</Text>
          <Text style={gStyle.profileTextNameAndNumber}>88005553535</Text>
        </View>
      </View>
      <View style={gStyle.profileSettings}>
        <View style={{ flex: 1 }}>
          <Text style={gStyle.profileSettingNameText}>НАСТРОЙКИ</Text>
          <View style={gStyle.profilePersonalInfo}>
            <Text style={gStyle.profilePersonalIconsText}>Личная информация</Text>
            <Ionicons name="person-outline" size={25} color="black" />
          </View>
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