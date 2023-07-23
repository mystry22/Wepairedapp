import { View, Text, StyleSheet, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import colors from '../../Utils/color';
import Input from '../../Reusable/Input';
import OnboardButton from '../../Reusable/OnboardButton';
import io from 'socket.io-client';

const CreateCommunity = () => {
  const [roomName, setRoomName] = useState('');
  const [slogan, setSlogan] = useState('');
  const [indicate, setIndicate] = useState('no');

  const uniqueKey = () => {
    const random = Math.floor(Math.random() * 100000000);
    return random;
  }

  const createRoom = () => {
    setIndicate('yes');
    const data = {
      roomName: roomName,
      slogan: slogan,
      room_id: uniqueKey()
    }

    const socket = io('https://wepairedbackend.onrender.com');
    if(roomName.length > 0 && slogan.length > 0){
    socket.emit('createRoom', data);
      socket.on('messages', (res) => {
      
        if (res == 'ok') {
          setRoomName('');
          setSlogan('');
          setIndicate('no');
          Alert.alert('Success', 'New Room Created', [
            {
              text: 'OK',
              onPress: () => {},
              style: 'cancel',
            },
            
          ]);
          
          
  
        } else {
          setIndicate('no');
          Alert.alert('Success', 'Unable to create room', [
            {
              text: 'OK',
              onPress: () => {},
              style: 'cancel',
            },
            
          ]);
        }
      })
    }else{
      setIndicate('no');
      Alert.alert('Error', 'Validation Error', [
        {
          text: 'OK',
          onPress: () => {},
          style: 'cancel',
        },
        
      ]);
    }
    


  }


  return (
    <View style={style.container}>
      <Text style={style.largeText}>Create Community</Text>
      <Text style={style.smallText}>Create custom communities to foster social interactions among individuals of similar interests.</Text>

      <Input placeholder={'Community Name'} onChangeText={(val) => setRoomName(val)} />
      <Input placeholder={'Community Slogan'} onChangeText={(val) => setSlogan(val)} />

      <OnboardButton title={'Create Community'} onpress={createRoom} indicate={indicate} />
    </View>
  )
}

export default CreateCommunity

const style = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.bg,
    flex: 1
  },
  largeText: {
    color: colors.dark,
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 30,
  },
  smallText: {
    color: colors.subtext,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 30,
  }
})