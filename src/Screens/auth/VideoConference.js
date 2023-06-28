import { Image, Text,ActivityIndicator,StyleSheet,SafeAreaView,Linking } from 'react-native';
import React,{useEffect} from 'react';
import colors from '../../Utils/color';
import OnboardButton from '../../Reusable/OnboardButton';
import { useNavigation } from '@react-navigation/native';

const VideoConference = () => {
    const navigation = useNavigation();
    const url = 'https://wepair-api.onrender.com';

    useEffect(()=>{
        loadUrl();
    },[]);

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
        <ActivityIndicator size={'large'} color={colors.btn} />

        <Text style={style.belowText}>Please Wait ...</Text>
        <OnboardButton title={'Stop Video'} onpress={stopVideo} />
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