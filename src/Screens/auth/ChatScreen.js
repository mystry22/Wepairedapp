import { View, Text, StyleSheet, TextInput, Image, TouchableWithoutFeedback, Pressable, FlatList } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import colors from '../../Utils/color';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import io from 'socket.io-client';
import { AuthLoginContext } from '../../Provider/AuthLoginContext';
import Loader from '../../Utils/Loader';
import AntDesign from 'react-native-vector-icons/AntDesign';






const ChatScreen = ({ route }) => {
    const { fname, userId, conversations, setConversation } = useContext(AuthLoginContext);
    const navigation = useNavigation();
    const [groupName, setGroupName] = useState('');
    const [groupimg, setGroupImg] = useState('');
    const [currentRoom, setCurrentRoom] = useState('');
    let converses = [];

    const [msg, setMsg] = useState('');



    //const socket = io('https://wepairedbackend.onrender.com');
    const socket = io('http://192.168.43.50:4567')
    const gotoChat = () => {
        navigation.navigate('Chat');
    }



    useEffect(() => {
        evalDef();
        joinRoom();
        connectChat();
        
    }, [])



    const joinRoom = () => {
        
        const data = {
            name: fname,
            room_id: route.params.channel_id,
            user_id: userId,
            key: uniqueKey(),
        }
        setCurrentRoom(route.params.channel_id);
        socket.emit('joinRoom', data);
        connectChat();
    }

    const connectChat = () => {
        
        socket.on('message', (ms) => {

            
            
            if(ms.length == 0){
                setConversation([]);
            
            }else{
                setConversation(ms);
                
            }
        })

    }

    const evalDef = async () => {
        const name = await AsyncStorage.getItem('chatName');
        const img = await AsyncStorage.getItem('chatImg');

        setGroupImg(img);
        setGroupName(name)
    }

    const uniqueKey = () => {
        const random = Math.floor(Math.random() * 100000000);
        return random;
    }
    const sendChat = () => {
        if (msg.length < 1) {

        } else {
            
            const newMsg = {
                name: fname,
                text: msg,
                _id: userId,
                createdAT: Date(),
                key: uniqueKey(),
                room_id: currentRoom
            }
            socket.emit('chatMessage', newMsg);
            setMsg('');
            connectChat();
        }
    }

    const setTextMsg = (val) => {
        setMsg(val);
    }




    const Chats = ({ item }) => {

        const isLocalUser = userId == item.user_id;

        return (

            <React.Fragment key={item.key}>
                {
                    isLocalUser ?
                        <View style={style.internalText} >
                            <Text>{item.text}</Text>
                            <Text style={style.timeStampInt}>{item.chat_date}</Text>

                        </View>

                        :

                        <View style={{ flexDirection: 'row', alignItems: 'baseline' }} >
                            <Image source={require('../../Assets/profile.png')}
                                style={{ width: 20, height: 20, borderRadius: 50, marginRight: 5, }} />

                            <View style={style.externalText}>
                                <Text style={style.chatName}>{item.name}</Text>
                                <Text>{item.text}</Text>
                                <Text style={style.timeStampExt}>{item.chat_date}</Text>
                            </View>

                        </View>

                }
            </React.Fragment>


        )
    }

    return (

        <>

            {userId ?
                <View style={style.container}>

                    <View style={style.topBar}>
                        <TouchableWithoutFeedback onPress={gotoChat}>

                            <AntDesign name={'arrowleft'} size={28} />
                        </TouchableWithoutFeedback>
                        <Image source={require(`../../Assets/default_community.png`)} style={{ width: 40, height: 40, borderRadius: 50, marginLeft: 40, marginRight: 20 }} />
                        <Text style={{ marginTop: 10, color: colors.dark, fontWeight: '700' }} >{groupName}</Text>
                    </View>




                    {
                        conversations && conversations[0] ?
                            <FlatList
                                data={conversations}
                                renderItem={({ item }) => (<Chats item={item}  />)}
                                keyExtractor={item => item.key}

                            />

                            :
                            <View style={{ justifyContent: 'center' }}>
                                <Text style={{ color: colors.btn, alignSelf: 'center', marginTop: 10, fontSize: 18, fontWeight: '400' }}>
                                    Welcome to {groupName}
                                </Text>
                            </View>
                    }







                    <View style={{ flexDirection: 'row' }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginHorizontal: 10 }}>

                            <View style={style.searchBox}>
                                <TextInput style={{ flex: 1, paddingLeft: 10 }} value={msg} onChangeText={(val) => setTextMsg(val)} placeholder='Message' />
                            </View>

                            <Pressable onPress={sendChat} style={style.searchButton}>
                                <Feather name={'send'} size={28} color={'#ffffff'} />
                            </Pressable>

                        </View>
                    </View>

                </View>

                : <Loader />

            }
        </>

    )
}

export default ChatScreen;

const style = StyleSheet.create({
    container: {
        paddingTop: 20,
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
        width: '70%',
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
})

