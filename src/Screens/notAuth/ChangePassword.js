import { View, Text, StyleSheet, Image } from 'react-native';
import React,{useState} from 'react';
import colors from '../../Utils/color';
import Input from '../../Reusable/Input';
import OnboardButton from '../../Reusable/OnboardButton';
import { useNavigation } from '@react-navigation/native';

const ChangePassword = () => {
    const navigation = useNavigation();
    const {indicate,setIndicate} = useState('no');
    const keep =()=>{
        navigation.navigate('PasswordOTP')
    }
  return (
    <View style={style.container}>
      <Text style={style.changepassword}>Password reset</Text>

        <Image source={require('../../Assets/red_lock.png') }style={style.image} />

        <Text style={style.fgpass}>Forgot Password?</Text>

        <Text style={style.subtext}>Enter your e-mail address below to receive an e-mail
with your password reset instruction</Text>

        <Input placeholder={'Enter Email'} onChangeText={keep} password={true} />

        <OnboardButton title={'Send'} indicate={indicate} onpress={keep} />

        
    </View>
  )
}

export default ChangePassword;
const style = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: colors.bg,
        flex: 1
    },
    changepassword: {
        color: colors.darkText,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '500',
        marginBottom: 50
    },
    image:{
        width: 80,
        height: 80,
        alignSelf: 'center'
    },
    fgpass:{
        textAlign: 'center',
        marginTop:20,
        fontSize: 20,
        fontWeight: '500',
        lineHeight:30,
        color: colors.darkText
    },
    subtext:{
        color:colors.subtext,
        textAlign: 'center',
        fontSize: 14,
        marginTop: 10,
        marginBottom: 10,
    }
});