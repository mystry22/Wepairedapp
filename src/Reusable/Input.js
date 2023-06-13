import { TextInput,StyleSheet } from 'react-native';
import React from 'react';
import colors from '../Utils/color';

const Input = ({placeholder,password,onChangeText}) => {
    
  return (
    
      <TextInput placeholder={placeholder} 
      
      style={styles.textInput} 
        secureTextEntry={password}
        onChangeText={onChangeText}
         /> 

  )
}

const styles = StyleSheet.create({
    textInput:{
        width: '99%',
        height:50,
        borderColor: '#b6b6b6',
        borderWidth: 1,
        opacity:0.4,
        alignSelf: 'center',
        borderRadius: 10,
        padding:10,
        marginBottom:22,
        backgroundColor: colors.bg,
        color: '#b6b6b6',
      
      }
})

export default Input;