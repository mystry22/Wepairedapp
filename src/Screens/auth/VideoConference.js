import { Image,Text,StyleSheet,SafeAreaView,Linking } from 'react-native';
import React from 'react';
import colors from '../../Utils/color';
import OnboardButton from '../../Reusable/OnboardButton';
import { useNavigation } from '@react-navigation/native';

const VideoConference = () => {
    const navigation = useNavigation();
    const url = 'https://wepair-api.onrender.com';

    

    const stopVideo = ()=>{
        navigation.navigate('Home');
    }

    const loadUrl = ()=>{
        Linking.canOpenURL(url).then((supported) =>{
            supported && Linking.openURL(url);
        })
    }
  return (
    <SafeAreaView style={style.loader}>
        <Image source={require('../../Assets/logo.png' )} style={style.img} />
        <Text style={style.belowText}>You don't have to imagine when you can see</Text>
        <OnboardButton title={'Launch Video Call'}  onpress={loadUrl}/>
        <OnboardButton title={'Exit'} onpress={stopVideo} />
    </SafeAreaView>
  )
}

export default VideoConference;

const style = StyleSheet.create({

    loader:{
       flex:1,
       alignItems: 'center',
       justifyContent: 'center',
       paddingTop: 50,
       backgroundColor: colors.bg
   },
   img:{
    // width:150,
    // height:150,
    marginBottom:20,
    borderRadius:10
   },
   belowText:{
    color: 'gray',
    fontSize:16,
    textAlign:'center'
   }
})