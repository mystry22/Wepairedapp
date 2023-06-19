import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';
import React,{useState,useContext} from 'react';
import colors from '../../Utils/color';
import Input from '../../Reusable/Input';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CheckBox from 'react-native-check-box';
import OnboardButton from '../../Reusable/OnboardButton';
import { useNavigation } from '@react-navigation/native';
import {signUp} from '../../Utils/requests';
import { checkFirstName, checkMail, checkPass } from '../../Utils/validation';
import {AuthLoginContext} from '../../Provider/AuthLoginContext';
import AsyncStorage from '@react-native-async-storage/async-storage';



const CreateAccount = () => {
    const {setFname,setWitched,setLName,setMail,setBio} = useContext(AuthLoginContext);
    const navigation = useNavigation();
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [indicate, setIndicate] = useState('no');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [cpass, setCPass] = useState('');

    






    const login = () => {
        navigation.navigate('Signin1');
    }

    const validtae = ()=>{
        const fNameError = checkFirstName(firstName);
        const lNameError = checkFirstName(lastName);
        const emailErr = checkMail(email);
        const passErr = checkPass(pass);

        if(fNameError || lNameError || emailErr || passErr || toggleCheckBox == false|| pass != cpass){
            return 'Error';
        }else{
            return 'ok';
        }
    }

    const register = async()=>{
        setIndicate('yes');

        try{
            const val  = validtae();
            if(val == 'ok'){
                const data = {
                    name: firstName,
                    lastName: lastName,
                    email:email,
                    password: pass
                }
                const res =  await signUp(data);   
                if(res.status == 'sucess')  {
                    setIndicate('no');
                    setFname(res.message.name);
                    setMail(res.message.email);
                    setLName(res.message.lastName);
                    setBio(res.message.bio);
                    await AsyncStorage.setItem('Uid',res.message._id);
                    setWitched('avail');
                }else{
                    console.log('Error creating user')
                }
            }else{
                setIndicate('no');
                console.log('Validation Erro');
            }
        }catch(err){
            console.log(err)
        }
        

        

           
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

                <TextInput placeholder='Confirm Password' placeholderTextColor={colors.subtext} secureTextEntry={true} style={{ flex: 1, }} onChangeText={(val)=>setCPass(val)} />
                <AntDesign name={'eyeo'} size={28} style={{ marginRight: 10 }} />

            </View>

            <View style={{ flexDirection: 'row', justifyContent:'center', alignContent:'center' }}>
                <CheckBox isChecked={toggleCheckBox}
                    onClick={() => setToggleCheckBox(!toggleCheckBox)}
                    checkBoxColor='#0072C6'
                />

                <Text style={{color:'#131313', fontWeight:'400'}}> By creating an account you agree to the terms of use
                     and our privacy policy</Text>

            </View>

            <OnboardButton title={'Sign up'} indicate={indicate} onpress={()=>{register()}} />

            <Text style={{ marginTop: 30, textAlign: 'center', fontWeight: '400', marginBottom: 20 }}>OR</Text>

            <View style={{flexDirection:'row', justifyContent:'center'}}>

                <Text style={{fontWeight:'400', color:'#131313'}}>Already have an account? </Text>
                <TouchableWithoutFeedback onPress={login} >

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