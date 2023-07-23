import React from "react";
import { Text, Image, View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import colors from "../../Utils/color";
import Button from '../../Reusable/OnboardButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
const width = Dimensions.get('window').width;
const Onboard2 = () => {
    const navigation = useNavigation();

    const skipNav = async()=>{
        await AsyncStorage.setItem('boarded','boarded');
        navigation.navigate('Signin1');
    }

    const next = () => {
        navigation.navigate('Onboard3');
    }

    const back =()=>{
        navigation.navigate('Onboard1');
    }
    return (
        <View style={style.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                <TouchableOpacity onPress={back}>
                    <Text style={style.skip}>Back</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={skipNav}>
                    <Text style={style.skip}>Skip</Text>
                </TouchableOpacity>
            </View>

            <Image source={require('../../Assets/onboard_convienient.png')} style={{ width: width - 30, height: 300, alignSelf: 'center', marginBottom: 50 }} />

            <Text style={style.Title} >Convinent</Text>
            <Text style={style.desc}>Easily accessible and efficient way of
                communication</Text>

            <Button title={'Next'} onpress={next} indicate={'no'} />

            <View style={{ marginTop: 20, alignSelf: 'center', flexDirection: 'row' }}>
                <View style={style.rowNotSelected}></View>
                <View style={style.rowSelected}></View>
                <View style={style.rowNotSelected}></View>
            </View>

        </View>



    );
}

export default Onboard2;

const style = StyleSheet.create({
    container: {
        backgroundColor: colors.bg,
        height: '100%',
        padding: 20,
    },
    skip: {
        color: colors.dark,
        fontSize: 20,
        textAlign: 'right',
        marginBottom: 20
    },
    Title: {
        color: colors.dark,
        fontWeight: '600',
        fontSize: 20,
        alignSelf: 'center',
        marginBottom: 50,
    },

    desc: {
        fontSize: 16,
        color: colors.dark,
        textAlign: 'center'
    },
    rowSelected: {
        height: 10,
        width: 10,
        borderRadius: 50,
        backgroundColor: colors.btn,
        marginLeft: 7,
    },
    rowNotSelected: {
        height: 10,
        width: 10,
        borderRadius: 50,
        backgroundColor: colors.fo,
        marginLeft: 7,
    }
})