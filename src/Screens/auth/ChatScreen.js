import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import colors from '../../Utils/color';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';



const ChatScreen = () => {
    const navigation = useNavigation();
    const keeps = () => {
        console.log('ok')
    }

    const nav = ()=>{
        navigation.pop();
    }
    return (
        <View style={style.container}>
            <View>

                <View style={style.topBar}>
                    <TouchableWithoutFeedback onPress={nav}>
                        <AntDesign name='arrowleft' size={24} style={{ marginTop: 10 }} />
                    </TouchableWithoutFeedback>

                    <Image source={require('../../Assets/person.png')} style={{ width: 40, height: 40, borderRadius: 50, marginLeft: 40, marginRight: 20 }} />
                    <Text style={{ marginTop: 10, color: colors.dark, fontWeight: '700' }} >Abled People, Not disabled</Text>
                </View>
                <ScrollView>
                    <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                        <Image source={require('../../Assets/person.png')} style={{ width: 20, height: 20, borderRadius: 50, marginRight: 5, }} />

                        <View style={style.externalText}>
                            <Text style={style.chatName}>Wealth</Text>
                            <Text >
                                Hello my name is Wealth
                            </Text>
                            <Text style={style.timeStampExt}>11:45</Text>
                        </View>

                    </View>

                    <View style={style.internalText}>
                        <Text>Hello Wealth</Text>
                        <Text style={style.timeStampInt} >
                            12:00
                        </Text>
                    </View>

                </ScrollView>
            </View>
            <View style={{ flexDirection: 'row' }}>

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 30 }}>

                    <View style={style.searchBox}>
                        <TextInput style={{ flex: 1, paddingLeft: 10 }} onChangeText={keeps} placeholder='Message' />
                    </View>

                    <TouchableOpacity onPress={keeps} style={style.searchButton}>
                        <Feather name={'send'} size={28} color={'#ffffff'} />
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

export default ChatScreen;

const style = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: colors.bg,
        flex: 1,
        justifyContent: 'space-between'

    },
    searchBox: {
        height: 60,
        width: '85%',
        //borderWidth:1,
        //borderColor:'#b6b6b6',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: '#ede9e9'
    },
    searchButton: {
        backgroundColor: colors.btn,
        width: 48,
        height: 60,
        padding: 10,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    topBar: {
        padding: 5,
        flexDirection: 'row'
    },

    externalText: {
        backgroundColor: colors.externalBgChat,
        width: '40%',
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
        width: '50%',
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
        color: colors.btn
    }
})

