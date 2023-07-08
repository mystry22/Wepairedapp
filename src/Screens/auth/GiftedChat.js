import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image, TouchableWithoutFeedback, Pressable, FlatList } from 'react-native';
import React, { useState, useEffect, useContext, useCallback } from 'react';
import colors from '../../Utils/color';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import io from 'socket.io-client';
import { GiftedChat } from 'react-native-gifted-chat';
import {AuthLoginContext} from '../../Provider/AuthLoginContext';





const ChatScreen = () => {
  const {fname,userId,} = useContext(AuthLoginContext);

    // const navigation = useNavigation();
    // const [groupName, setGroupName] = useState('');
    // const [groupimg, setGroupImg] = useState('');
    // const [msg, setMsg] = useState('');
    // const [conversations, setConversations] = useState([]);
    // const currentRef = useRef();
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
          {
            _id: 1,
            text: 'Welcome',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'Chat Bot',
              avatar: require('../../Assets/profile.png'),
            },
            
          },
        ])
      }, [])
    
      const onSend = useCallback((messages = []) => {
        setMessages(previousMessages =>
          GiftedChat.append(previousMessages, messages),
        )

        const {
            _id,
            createdAt,
            text,
            user
        } = messages[0];
      }, [])
    

    
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

