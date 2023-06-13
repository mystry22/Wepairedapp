import React,{useEffect} from "react";
import { Text, Image, View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import colors from "../../Utils/color";
import Button from '../../Reusable/OnboardButton';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const width = Dimensions.get('window').width;
const Onboard1 = () => {
    const navigation = useNavigation();

    useEffect(()=>{
        checkIfBoarded();
    },[])

    const checkIfBoarded = async()=>{
        const isBoarded = await AsyncStorage.getItem('boarded');
        if(isBoarded){
            navigation.navigate('Signin1');
        }else{
            
        }
    }

    const skipNav = ()=>{
        navigation.navigate('Signin1');
    }

    const next =()=>{
       
        navigation.navigate('Onboard2');
    }
    return (
        <View style={style.container}>
            <TouchableOpacity onPress={skipNav}>
                <Text style={style.skip}>Skip</Text>
            </TouchableOpacity>

            <Image source={require('../../Assets/onboard_easy.png')} style={{ width: width - 30, height: 300, alignSelf:'center', marginBottom:50 }} />

            <Text style={style.Title} >Easy</Text>
            <Text style={style.desc}>easier to communicate at all times</Text>

            <Button title={'Next'} onpress={next} indicate={'no'}/>

           <View style={{marginTop:20, alignSelf: 'center', flexDirection:'row'}}>
            <View style={style.rowSelected}></View>
            <View style={style.rowNotSelected}></View>
            <View style={style.rowNotSelected}></View>
           </View>

        </View>



    );
}

export default Onboard1;

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
    Title:{
        color: colors.dark,
        fontWeight: '600',
        fontSize:20,
        alignSelf: 'center',
        marginBottom: 50,
    },

    desc:{
        fontSize:16,
        color: colors.dark,
        textAlign:'center'
    },
    rowSelected:{
        height: 10,
        width:10,
        borderRadius:50,
        backgroundColor: colors.btn,
        marginLeft:7,
    },
    rowNotSelected:{
        height: 10,
        width:10,
        borderRadius:50,
        backgroundColor: colors.fo,
        marginLeft:7,
    }
})