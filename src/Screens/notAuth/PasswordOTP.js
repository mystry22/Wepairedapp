import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useState,useRef } from 'react';
import colors from '../../Utils/color';
import OnboardButton from '../../Reusable/OnboardButton';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';

const PasswordOTP = () => {
    const navigation = useNavigation();
    const { indicate, setIndicate } = useState('no');

    const pin1Ref = useRef(null);
    const pin2Ref = useRef(null);
    const pin3Ref = useRef(null);
    const pin4Ref = useRef(null);

    const [pin1, setPin1] = useState('');
    const [pin2, setPin2] = useState('');
    const [pin3, setPin3] = useState('');
    const [pin4, setPin4] = useState('');
    const keep = () => {
        navigation.navigate('EnterPassword')
    }
    return (
        <View style={style.container}>
            <Text style={style.changepassword}>Password Reset</Text>
            
            <Text style={style.fgpass}>Activation Code</Text>

            <Text style={style.subtext}>Please Enter The Passcode
            </Text>

            <Text style={style.subtext}>sent to Email</Text>

            <View style={style.pinRow}>
                <View style={style.pinHolder}>
                    <TextInput onChangeText={(pin1)=>{
                        setPin1(pin1);

                        if(pin1 != ''){
                            pin2Ref.current.focus()
                        }
                        
                    }}  
                    maxLength={1}
                    keyboardType='number-pad'
                    ref={pin1Ref}
                    />
                </View>
                <View style={style.pinHolder}>
                    <TextInput onChangeText={(pin2)=>{
                        setPin2(pin2);
                        if(pin2 != ''){
                            pin3Ref.current.focus()
                        }
                        
                    }} 
                    maxLength={1}
                    keyboardType='number-pad'
                    ref={pin2Ref}
                    />
                </View>
                <View style={style.pinHolder}>
                    <TextInput onChangeText={(pin3)=>{
                        setPin3(pin3);
                        if(pin3 != ''){
                            pin4Ref.current.focus()
                        }
                        
                    }}  
                    maxLength={1}
                    keyboardType='number-pad'
                    ref={pin3Ref}
                    />
                </View>
                <View style={style.pinHolder}>
                    <TextInput onChangeText={(pin4)=>{
                        setPin4(pin4);
                        
                    }}  
                    maxLength={1}
                    keyboardType='number-pad'
                    ref={pin4Ref}
                    />
                </View>
            </View>



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
        marginBottom: 20,

    },
    image: {
        width: 80,
        height: 80,
        alignSelf: 'center'
    },
    fgpass: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 20,
        fontWeight: '500',
        lineHeight: 30,
        color: colors.darkText,
        marginBottom: 20
    },
    subtext: {
        color: colors.subtext,
        textAlign: 'center',
        fontSize: 14,
    },
    pinRow:{
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center'
    },
    pinHolder:{
        width:40,
        borderBottomWidth:1,
        marginTop:40,
        marginRight:10
    }
});