import { View, Text, StyleSheet, Image } from 'react-native';
import React,{useState} from 'react';
import colors from '../../Utils/color';
import Input from '../../Reusable/Input';
import OnboardButton from '../../Reusable/OnboardButton';
import { useNavigation } from '@react-navigation/native';

const PasswordOTP = () => {
    const navigation = useNavigation();
    const {indicate,setIndicate} = useState('no');
    const keep =()=>{
        navigation.navigate('PasswordOTP')
    }
  return (
    <View style={style.container}>
      <Text style={style.changepassword}>Password reset</Text>

        <Image source={require('../../Assets/green_lock.png') }style={style.image} />

        <Text style={style.fgpass}>Reset Password</Text>

        <Text style={style.subtext}>Create new password</Text>

        <Input placeholder={'New Password'} onChangeText={keep} password={true} />

        <Input placeholder={'Confirm New Password'} onChangeText={keep} password={true} />

        <OnboardButton title={'Send'} indicate={indicate} onpress={keep} />

        
    </View>
  )
}

export default PasswordOTP;
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
        marginBottom: 20,
    }
});