import {TouchableOpacity, Text, StyleSheet,Dimensions, View, ActivityIndicator } from 'react-native';
import React from 'react';
import colors from '../Utils/color';
import { useNavigation } from '@react-navigation/native';
const Width = Dimensions.get('window').width;

const OnboardButton = ({title,onpress,indicate}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onpress}>
      <View style={{flexDirection:'row'}}>

      {indicate == 'yes' ? <ActivityIndicator color={'#fff'} size='large' style={{marginRight:5}} />: null}<Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default OnboardButton;

const styles = StyleSheet.create({
    button:{
        backgroundColor: colors.btn,
        width: Width - 50,
        marginTop:30,
        height: 50,
        borderRadius: 10,
        padding:10,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        color:colors.white,
        fontSize:16,
        fontWeight:'700',
        
      
    }
})