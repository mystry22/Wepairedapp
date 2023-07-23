import { View, Text, StyleSheet, TextInput,TouchableWithoutFeedback, Alert } from 'react-native';
import React, { useContext, useState,  } from 'react';
import colors from '../../Utils/color';
import Input from '../../Reusable/Input';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CheckBox from 'react-native-check-box';
import OnboardButton from '../../Reusable/OnboardButton';
import { useNavigation } from '@react-navigation/native';
import { checkMail, checkPass } from '../../Utils/validation';
import {signIn} from '../../Utils/requests';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthLoginContext} from '../../Provider/AuthLoginContext';


const PersonalInformations = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [indicate, setIndicate] = useState('no');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const {setWitched} = useContext(AuthLoginContext);
    const navigation = useNavigation();

    

    const showToast =(erMsg)=>{
        Alert.alert('Notification', erMsg, [
            {
              text: 'Cancel',
              onPress: () => {},
              style: 'cancel',
            },
            
          ]);
    }



    const navChangePass =()=>{
        navigation.navigate('ChangePassword');
    }

    const validation = () => {
        const emailErr = checkMail(email);
        const passErr = checkPass(pass);

        if(emailErr || passErr){
            return 'Error'
        }else{
            return 'Ok';
        }
    }

    const login = async() => {
        setIndicate('yes');
        const val = validation();

        if(val == 'Ok'){
            try{
            const data = {
                email: email,
                password: pass
            }
            const res = await signIn(data);
            if(res.success == 'True'){
                setIndicate('no');
                await AsyncStorage.setItem('Uid',res.Token);
                setWitched('avail');
                
            }else{
                setIndicate('no');
                showToast('Invalid login details');
            }
            }catch(err){
                console.log(err);
            }
        }else{
            setIndicate('no');
            showToast('One or more fields failed validation');
        }
    }

    const gesture =()=>{
        navigation.navigate('Signup1');
    }
    return (
        <View style={style.container}>
            <Text style={style.login}>Login</Text>

            <Text style={style.welcome}>Hi,Welcome Back! </Text>
            <Text style={style.subtext}>Hello again,you have been missed!</Text>

            <Input placeholder='Email' password={false} onChangeText={(val)=>{setEmail(val)}} />

            <View style={style.textInput}>

                <TextInput placeholder='Enter Password' placeholderTextColor={colors.subtext} secureTextEntry={true} style={style.designInpText} 
                onChangeText={(val)=>{setPass(val)}} />
                <AntDesign name={'eyeo'} size={28} style={{ marginRight: 10 }} />

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                <View style={{ flexDirection: 'row' }}>
                    <CheckBox isChecked={toggleCheckBox}
                        onClick={() => setToggleCheckBox(!toggleCheckBox)}
                        checkBoxColor='#0072C6'
                    />

                    <Text style={style.texts}> Remeber me</Text>
                </View>
                <TouchableWithoutFeedback onPress={navChangePass}>

                <Text style={style.texts}>Forgot password?</Text>
                </TouchableWithoutFeedback>
            </View>

            <OnboardButton title={'Log in'} onpress={login} indicate={indicate} />

            <Text style={{ marginTop: 30, textAlign: 'center', fontWeight: '400', marginBottom: 20 }}>OR</Text>

            <View style={{flexDirection:'row', justifyContent:'center'}}>

                <Text style={{fontWeight:'400'}}>Don't have an account? </Text>
                <TouchableWithoutFeedback onPress={gesture} >

                    <Text style={{color:'#0072C6',fontWeight:'400'}}>Sign up now</Text>
                </TouchableWithoutFeedback>
                

            </View>
        </View>
    )
}

export default PersonalInformations;

const style = StyleSheet.create({
    login: {
        color: colors.darkText,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '500',
        marginBottom: 50
    },
    designInpText:{
        flex:1,
        color:colors.dark
    },
    container: {
        padding: 20,
        backgroundColor: colors.bg,
        flex: 1
    },
    welcome: {
        color: colors.darkText,
        fontSize: 24,
        fontWeight: '700',
        fontFamily: 'Roboto',
        marginBottom: 7
    },
    subtext: {
        color: colors.subtext,
        fontSize: 14,
        fontFamily: 'Roboto',
        lineHeight: 18,
        marginBottom: 35
    },
    textInput: {
        height: 50,
        borderColor: '#b6b6b6',
        borderWidth: 1,
        opacity: 0.4,
        borderRadius: 10,
        marginBottom: 20,
        backgroundColor: colors.bg,
        color: '#b6b6b6',
        justifyContent: 'center',
        alignItems: 'center',
        width: '99%',
        flexDirection: 'row',
        alignSelf: 'center'
    },
    texts: {
        fontSize: 16,
        color: colors.darkText,
        marginBottom: 40,
        fontWeight: '400'
    }
});
