import { View, Text,StyleSheet, } from 'react-native';
import React from 'react';
import colors from '../../Utils/color';
import Input from '../../Reusable/Input';
import OnboardButton from '../../Reusable/OnboardButton';

const CreateCommunity = () => {
    const keeps =()=>{

    }
  return (
    <View style={style.container}>
      <Text style={style.largeText}>Create Community</Text>
      <Text style={style.smallText}>Create custom communities to foster social interactions among individuals of similar interests.</Text>

      <Input placeholder={'Community Name'} onChangeText={keeps} />
      <Input placeholder={'Community Slogan'} onChangeText={keeps} />

      <OnboardButton title={'Create Community'} onpress={keeps} />
    </View>
  )
}

export default CreateCommunity

const style = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: colors.bg,
        flex: 1
    },
    largeText:{
        color:colors.dark,
        fontSize:30,
        textAlign:'center',
        fontWeight: '600',
        marginBottom:30,
    },
    smallText:{
        color:colors.subtext,
        fontSize:18,
        textAlign:'center',
        fontWeight: '600',
        marginBottom:30,
    }
})