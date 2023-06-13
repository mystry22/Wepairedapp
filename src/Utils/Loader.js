import React from 'react';
import { StyleSheet, ActivityIndicator,SafeAreaView,Image,Text} from 'react-native';
import colors from './color';

const Loader =()=>{

    return <SafeAreaView style={style.loader}>
        <Image source={require('../Assets/logo.png' )} style={style.img} />
        <ActivityIndicator size={'large'} color={colors.btn} />

        <Text style={style.belowText}>Please Wait ...</Text>
    </SafeAreaView>
}

export default Loader;

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