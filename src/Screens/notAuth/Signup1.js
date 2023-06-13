import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';
import React,{useState} from 'react';
import colors from '../../Utils/color';
import Input from '../../Reusable/Input';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CheckBox from 'react-native-check-box';
import OnboardButton from '../../Reusable/OnboardButton';
import { useNavigation } from '@react-navigation/native';
import {signUp} from '../../Utils/requests';

const CreateAccount = () => {
    const navigation = useNavigation();
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [indicate, setIndicate] = useState('no');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const keep = () => {
        navigation.navigate('');
    }

        const signUp = async()=>{
            const data = {
                fname: firstName,
                lastName: lastName,
                email:email,
                password: pass
            }

           const res =  await signUp(data);
    }
    return (
        <View style={style.container}>
            <Text style={style.createAccount}>CreateAccount</Text>

            <Input placeholder={'Enter First Name'} password={false} onChangeText={(val)=>{setFirstName(val)}} />

            <Input placeholder={'Enter Last Name'} password={false} onChangeText={(val)=>{setLastName(val)}} />

            <Input placeholder={'Enter Email'} password={false} onChangeText={(val)=>{setEmail(val)}} />

            <View style={style.textInput}>

                <TextInput placeholder='Enter Password' placeholderTextColor={colors.subtext} secureTextEntry={true} style={{ flex: 1, }} onChangeText={(val)=>setPass(val)} />
                <AntDesign name={'eyeo'} size={28} style={{ marginRight: 10 }} />

            </View>

            <View style={style.textInput}>

                <TextInput placeholder='Confirm Password' placeholderTextColor={colors.subtext} secureTextEntry={true} style={{ flex: 1, }} />
                <AntDesign name={'eyeo'} size={28} style={{ marginRight: 10 }} />

            </View>

            <View style={{ flexDirection: 'row', justifyContent:'center', alignContent:'center' }}>
                <CheckBox isChecked={toggleCheckBox}
                    onClick={() => setToggleCheckBox(!toggleCheckBox)}
                    checkBoxColor='#3A00E5'
                />

                <Text style={{color:'#131313', fontWeight:'400'}}> By creating an account you agree to the terms of use
                     and our privacy policy</Text>

            </View>

            <OnboardButton title={'Sign up'} indicate={indicate} onpress={keep} />

            <Text style={{ marginTop: 30, textAlign: 'center', fontWeight: '400', marginBottom: 20 }}>OR</Text>

            <View style={{flexDirection:'row', justifyContent:'center'}}>

                <Text style={{fontWeight:'400', color:'#131313'}}>Already have an account? </Text>
                <TouchableWithoutFeedback onPress={keep} >

                    <Text style={{color:'#0072C6',fontWeight:'400'}}>Log in</Text>
                </TouchableWithoutFeedback>
                

            </View>


        </View>
    )
}

export default CreateAccount;

const style = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: colors.bg,
        flex: 1
    },
    createAccount: {
        color: colors.darkText,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '500',
        marginBottom: 50
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
})