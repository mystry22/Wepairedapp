import { View, Text, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';
import React,{useContext} from 'react';
import colors from '../../Utils/color';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthLoginContext} from '../../Provider/AuthLoginContext';



const Profile = () => {
  const {fname,lname,setWitched,bio} = useContext(AuthLoginContext);
  const navigation = useNavigation();

  const nav = () => {
    navigation.navigate('Home')
  }

  const keeps = () => {
    console.log('ok');
  }

  const logout = async()=>{
    await AsyncStorage.removeItem('Uid');
    setWitched('notAvail');
  }

  return (
    <View style={style.container}>
      {/* Top Bar */}
      <View style={style.topBar}>
        <TouchableWithoutFeedback onPress={nav}>
          <AntDesign name='arrowleft' size={24} style={{ marginTop: 10, color: colors.darkText }} />
        </TouchableWithoutFeedback>
        <Text style={{ marginTop: 5, marginLeft: 60, color: colors.dark, fontWeight: '700', fontSize: 20 }} >Account</Text>
      </View>


      {/* Profile */}
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Image source={require('../../Assets/profile.png')} style={style.image_profile} />

        <View>
          <Text style={style.nameText}>{fname } {lname}</Text>

          <Text style={style.bioText}>
            {bio}
          </Text>

        </View>
      </View>

      {/* Functionalities */}

      <View style={{ marginTop: 30 }}>
        <TouchableWithoutFeedback onPress={keeps}>
          <View style={style.itemListHolder}>
            <EvilIcons name={'pencil'} size={25} style={{ color: colors.dark, }} />
            <Text style={style.itemTexts}>Edit Profile</Text>
          </View>
        </TouchableWithoutFeedback>


        <TouchableWithoutFeedback onPress={keeps}>
          <View style={style.itemListHolder}>
            <Ionicons name={'person-circle-outline'} size={25} style={{ color: colors.dark, }} />
            <Text style={style.itemTexts}>Personalization</Text>
          </View>
        </TouchableWithoutFeedback>



        <TouchableWithoutFeedback onPress={keeps}>
          <View style={style.itemListHolder}>
            <MaterialCommunityIcons name={'chat-alert-outline'} size={25} style={{ color: colors.dark, }} />
            <Text style={style.itemTexts}>Help  & Feedback</Text>
          </View>
        </TouchableWithoutFeedback>



        <TouchableWithoutFeedback onPress={keeps}>
          <View style={style.itemListHolder}>
            <AntDesign name={'setting'} size={25} style={{ color: colors.dark, }} />
            <Text style={style.itemTexts}>Settings</Text>
          </View>
        </TouchableWithoutFeedback>



        <TouchableWithoutFeedback onPress={keeps}>
          <View style={style.itemListHolder}>
            <Ionicons name={'notifications-outline'} size={25} style={{ color: colors.dark, }} />
            <Text style={style.itemTexts}>Notifications</Text>
          </View>
        </TouchableWithoutFeedback>



        <TouchableWithoutFeedback onPress={logout}>
          <View style={style.itemListHolder}>
            <AntDesign name={'logout'} size={25} style={{ color: colors.dark, }} />
            <Text style={style.itemTexts}>Logout</Text>
          </View>
        </TouchableWithoutFeedback>




      </View>





    </View>
  )
}

export default Profile;

const style = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.bg,
    flex: 1


  },
  topBar: {
    padding: 5,
    flexDirection: 'row'
  },

  image_profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  nameText: {
    marginTop: 20,
    fontSize: 16,
    color: colors.darkText,
    fontWeight: '400'
  },
  bioText: {
    fontSize: 12,
    color: colors.subtext,
    fontWeight: 400
  },
  itemTexts: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: '400',
    color: colors.darkText
  },

  itemListHolder: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 30
  }
})