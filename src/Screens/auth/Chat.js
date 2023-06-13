import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import colors from '../../Utils/color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const Chat = () => {
    const navigation = useNavigation();
    const keeps = () => {
        navigation.navigate('ChatScreen');
    }
    return (
        <View style={style.container}>

            <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 30 }}>

                <View style={style.searchBox}>
                    <TextInput style={{ flex: 1, paddingLeft: 10 }} onChangeText={keeps} placeholder='Search...' />
                </View>

                <TouchableOpacity onPress={keeps} style={style.searchButton}>
                    <AntDesign name={'search1'} size={20} color={'#ffffff'} />
                </TouchableOpacity>

            </View>

            <Text style={style.chat}>Chats</Text>

            <TouchableWithoutFeedback onPress={keeps}>

                <View style={style.communityContainer}>
                    <View style={style.holdCommunity}>
                        <View>

                            <Image source={require('../../Assets/person.png')} style={style.communityImage} />
                        </View>

                        <View style={{ marginLeft: 10, paddingTop: 10 }}>
                            <Text style={style.titleCommunity}>Abled People, Not disabled</Text>
                            <Text style={style.subTextCommunity}>Meet new people share your views </Text>
                        </View>
                    </View>

                    <Text style={style.timeStamp}>1:41 PM</Text>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={keeps}>

                <View style={style.communityContainer}>
                    <View style={style.holdCommunity}>
                        <View>

                            <Image source={require('../../Assets/dog.png')} style={style.communityImage} />
                        </View>

                        <View style={{ marginLeft: 10, paddingTop: 10 }}>
                            <Text style={style.titleCommunity}>Dog Lover's Group</Text>
                            <Text style={style.subTextCommunity}>Meet dog lover here </Text>
                        </View>
                    </View>

                    <Text style={style.timeStamp}>1:41 PM</Text>
                </View>
            </TouchableWithoutFeedback>



        </View>
    )
}

export default Chat;

const style = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: colors.bg,
        flex: 1,

    },
    searchBox: {
        height: 40,
        width: '85%',
        borderWidth: 1,
        borderColor: '#b6b6b6',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    searchButton: {
        backgroundColor: colors.btn,
        width: 48,
        height: 40,
        padding: 10,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10
    },
    chat: {
        color: colors.dark,
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 10
    },
    holdCommunity: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    titleCommunity: {
        color: colors.dark,
        fontSize: 14,
        fontWeight: '600',
    },
    subTextCommunity: {
        color: colors.subtext,
        fontSize: 10,
        fontWeight: '600',
    },
    communityContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingBottom: 10,

    },
    communityImage: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    timeStamp: {
        marginTop: 15,
        color: colors.subtext
    }
})