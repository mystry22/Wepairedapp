import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image, TouchableWithoutFeedback, Pressable, FlatList } from 'react-native';
import React, { useState, useEffect, useContext, useCallback, useRef,useLayoutEffect } from 'react';
import colors from '../../Utils/color';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import io from 'socket.io-client';
import { GiftedChat } from 'react-native-gifted-chat';
import { AuthLoginContext } from '../../Provider/AuthLoginContext';





const ChatScreen = () => {
    const { fname, userId, } = useContext(AuthLoginContext);

    const navigation = useNavigation();
    const [groupName, setGroupName] = useState('');
    const [groupimg, setGroupImg] = useState('');
    const [msg, setMsg] = useState('');
    const [conversations, setConversations] = useState([]);
    const currentRef = useRef();
    const [messages, setMessages] = useState([]);

    const socket = io('http://192.168.43.50:4567');
    

    useLayoutEffect(() => {
        setMessages([
            {
              _id: 1,
              text: 'Welcome',
              createdAt: new Date(),
              user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
              },
            },
          ])
      }, [])


      useEffect(()=>{
        connectChat();
        
      },[socket])

      const msgFormat =(msgChat)=>{
        const msgObject = {
            _id:2,
            text:msgChat,
            createdAt: Date(),
            user:{
                _id:userId,
                name:fname,
                avatar:require('../../Assets/profile.png')
            }
        }

        return msgObject;
      }
    
      const onSend = useCallback((messages = []) => {
        socket.emit('chatMessage', messages);
         connectChat();
        
      }, [])




    const connectChat = () => {
        socket.on('message', messages=>{
            console.log(messages);
            setMessages(previousMessages =>
                GiftedChat.append(previousMessages, messages),
              );
        });
        
        // socket.on('message', message => {
        //     const prevChat = [...conversations];
        //     setConversations(prevChat.concat(message));
        // })

    }

    // const evalDef = async () => {
    //     const name = await AsyncStorage.getItem('chatName');
    //     const img = await AsyncStorage.getItem('chatImg');

    //     setGroupImg(img);
    //     setGroupName(name)
    // }

    // const formatTime = () => {

    //     const today = new Date();
    //     var h = today.getHours();
    //     var m = today.getMinutes();

    //     return h + ":" + m;
    // }

    // const uniqueKey = ()=>{
    //     const today = new Date();
    //     const time = today.getTime();
    //     return time;
    // }
    // const sendChat = () => {
    //     if (msg.length < 1) {
            
    //     } else {
    //         const newMsg = {
    //             user: fname,
    //             text: msg,
    //             _id: userId,
    //             createdAT: formatTime(),
    //             key: uniqueKey()
    //         }
    //         socket.emit('chatMessage', newMsg);
    //         setMsg('');
    //     }
    // }

    // const setTextMsg = (val) => {
    //     setMsg(val);
    // }

    // const Chats = ({ item }) => (
    
    //     <View style={{ flexDirection: 'row', alignItems: 'baseline' }}  >
    //         <Image source={require('../../Assets/profile.png')}
    //             style={{ width: 20, height: 20, borderRadius: 50, marginRight: 5, }} />

    //         <View style={style.externalText}>
    //             <Text style={style.chatName}>{item.user}</Text>
    //             <Text>{item.text}</Text>
    //             <Text style={style.timeStampExt}>{item.createdAT}</Text>
    //         </View>

    //     </View>
    // )



    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: userId,
                name:fname,
                avatar: require('../../Assets/profile.png')
            }}
        />
        // <View style={style.container}>
            
        //         <View style={style.topBar}>

        //             <Image source={require(`../../Assets/default_community.png`)} style={{ width: 40, height: 40, borderRadius: 50, marginLeft: 40, marginRight: 20 }} />
        //             <Text style={{ marginTop: 10, color: colors.dark, fontWeight: '700' }} >{groupName}</Text>
        //         </View>

        //         <View style={{ height: 500, marginBottom: 34 }}>
        //             {/* <ScrollView style={{backgroundColor:'green'}}>
        //             {conversations.map((chats, i) => {
        //                 return (
        //                     <View style={{ flexDirection: 'row', alignItems: 'baseline' }} key={i} >
        //                         <Image source={require('../../Assets/profile.png')}
        //                             style={{ width: 20, height: 20, borderRadius: 50, marginRight: 5, }} />

        //                         <View style={style.externalText}>
        //                             <Text style={style.chatName}>{chats.user}</Text>
        //                             <Text>{chats.text}</Text>
        //                             <Text style={style.timeStampExt}>{chats.time}</Text>
        //                         </View>

        //                     </View>
        //                 );
        //             })}
        //         </ScrollView> */}

        //             {
        //                 conversations.length > 0 ?
        //                     <FlatList
        //                         data={conversations}
        //                         renderItem={({ item }) => (<Chats item={item} />)}
        //                         keyExtractor={item => item.key}
        //                     />

        //                     :
        //                     <View style={{ justifyContent: 'center' }}>
        //                         <Text style={{ color: colors.white, alignSelf: 'center', marginTop: 10, fontSize: 18, fontWeight: '400' }}>
        //                             Welcome to {groupName}
        //                         </Text>
        //                     </View>
        //             }


        //         </View>
        



        //     <View style={{ flexDirection: 'row' }}>

        //         <View style={{ flexDirection: 'row', justifyContent: 'center', marginHorizontal: 10 }}>

        //             <View style={style.searchBox}>
        //                 <TextInput style={{ flex: 1, paddingLeft: 10 }} value={msg} onChangeText={(val) => setTextMsg(val)} placeholder='Message' />
        //             </View>

        //             <Pressable onPress={sendChat} style={style.searchButton}>
        //                 <Feather name={'send'} size={28} color={'#ffffff'} />
        //             </Pressable>

        //         </View>
        //     </View>

        // </View>

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
})

