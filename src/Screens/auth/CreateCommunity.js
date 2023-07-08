import { View, Text,StyleSheet,Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import colors from '../../Utils/color';
import Input from '../../Reusable/Input';
import OnboardButton from '../../Reusable/OnboardButton';
import io from 'socket.io-client';

const CreateCommunity = () => {
  const [roomName,setRoomName] = useState('');
  const [slogan,setSlogan] = useState('');

  useEffect(()=>{
   
  },[])


    const createRoom =()=>{
      setRoomName('');
      setSlogan('');


      const data = {
        roomName:roomName,
        slogan:slogan
      }
      const socket = io('http://192.168.43.50:4567');
      socket.emit('createRoom',data)
      
    }
  return (
    <View style={style.container}>
      <Text style={style.largeText}>Create Community</Text>
      <Text style={style.smallText}>Create custom communities to foster social interactions among individuals of similar interests.</Text>

      <Input placeholder={'Community Name'} onChangeText={(val)=>setRoomName(val)} />
      <Input placeholder={'Community Slogan'} onChangeText={(val)=>setSlogan(val)} />

      <OnboardButton title={'Create Community'} onpress={createRoom} />
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
    largeText:{
        color:colors.dark,
        fontSize:30,
        textAlign:'center',
        fontWeight: '600',
        marginBottom:30,
    },
    smallText:{
        color:colors.subtext,
        fontSize:18,
        textAlign:'center',
        fontWeight: '600',
        marginBottom:30,
    }
})