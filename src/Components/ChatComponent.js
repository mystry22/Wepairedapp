import { View, Text,StyleSheet,Image } from 'react-native';
import React from 'react';
import colors from '../Utils/color';

const ChatComponent = ({item}) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'baseline' }} key={item.key} >
            <Image source={require('../Assets/profile.png')}
                style={{ width: 20, height: 20, borderRadius: 50, marginRight: 5, }} />

            <View style={style.externalText}>
                <Text style={style.chatName}>{item.name}</Text>
                <Text>{item.text}</Text>
                <Text style={style.timeStampExt}>{item.createdAt}</Text>
            </View>

        </View>
  )
}

export default ChatComponent;

const style = StyleSheet.create({
    externalText: {
        backgroundColor: colors.externalBgChat,
        width: '70%',
        padding: 5,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        textAlign: 'left',
        alignSelf: 'flex-start',
        marginBottom: 10,
    },
    internalText: {
        backgroundColor: colors.internalBgChat,
        width: '80%',
        padding: 5,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        textAlign: 'right',
        alignSelf: 'flex-end',
        marginBottom: 10,
    },
    timeStampExt: {
        textAlign: 'right',
        color: colors.timeStamp,
        fontSize: 10
    },
    timeStampInt: {
        textAlign: 'right',
        color: colors.white,
        fontSize: 10
    },
    chatName: {
        fontSize: 10,
        color: colors.btn,
        padding: 2
    }
});