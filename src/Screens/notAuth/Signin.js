import { View, Text, StyleSheet, TextInput,TouchableWithoutFeedback } from 'react-native';
import React, { useState,  } from 'react';
import colors from '../../Utils/color';
import Input from '../../Reusable/Input';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CheckBox from 'react-native-check-box';
import OnboardButton from '../../Reusable/OnboardButton';
import { useNavigation } from '@react-navigation/native';




const PersonalInformations = () => {
    const navigation = useNavigation();
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [indicate, setIndicate] = useState('no');


    const navChangePass =()=>{
        navigation.navigate('ChangePassword');
    }

    const randomDo = () => {
        console.log('ok')
    }

    const login = () => {
        console.log('login')
    }

    const gesture =()=>{
        navigation.navigate('Signup1');
    }
    return (
        <View style={style.container}>
            <Text style={style.login}>Login</Text>

            <Text style={style.welcome}>Hi,Welcome Back! </Text>
            <Text style={style.subtext}>Hello again,you’ve been missed!</Text>

            <Input placeholder='Email' password={false} onChangeText={randomDo} />

            <View style={style.textInput}>

                <TextInput placeholder='Enter Password' placeholderTextColor={colors.subtext} secureTextEntry={true} style={{ flex: 1, }} />
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
        fontSize: 12,
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
