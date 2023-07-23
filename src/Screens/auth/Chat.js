import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, TouchableWithoutFeedback, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import colors from '../../Utils/color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import io from 'socket.io-client';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Chat = () => {
    const navigation = useNavigation();
    const [allRooms, setAllRooms] = useState([]);
    
    const socket = io('https://wepairedbackend.onrender.com');


    const gotoRoom = (name,channel_id) => {
    
        AsyncStorage.setItem('chatName', name).then(res =>{
            navigation.navigate('ChatScreen',{channel_id:channel_id});
         })
    }

    const keeps= ()=>{
        console.log('search');
    }
    

    useEffect(() => {
        getRooms()
        
    }, [allRooms])

    // const getRooms =async()=>{
    //     const res = await getAllRooms();
    //     if(res){
    //         setAllRooms(res)
    //     }
    // }

    const getRooms = async() => {

        socket.emit('getRooms');
        socket.on('roomList',(roomlist)=>{
             setAllRooms(roomlist);
        })
    



    }

    
    return (
        <ScrollView style={style.container}>

            <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 30 }}>

                <View style={style.searchBox}>
                    <TextInput style={{ flex: 1, paddingLeft: 10 }} onChangeText={keeps} placeholder='Search...' />
                </View>

                <TouchableOpacity onPress={keeps} style={style.searchButton}>
                    <AntDesign name={'search1'} size={20} color={'#ffffff'} />
                </TouchableOpacity>

            </View>

            <Text style={style.chat}>Chats</Text>

            {  allRooms && allRooms[0] 
            
                        ?

                allRooms.map(room => (
                    <TouchableWithoutFeedback onPress={()=>gotoRoom(room.channel_name,room.channel_id)} key={room._id}>

                        <View style={style.communityContainer}>
                            <View style={style.holdCommunity}>
                                <View>

                                    <Image source={require('../../Assets/general_community.png')} style={style.communityImage} />
                                </View>

                                <View style={{ marginLeft: 10, paddingTop: 10 }}>
                                    <Text style={style.titleCommunity}>{room.channel_name}</Text>
                                    <Text style={style.subTextCommunity}>{room.channel_slogan}</Text>
                                </View>
                            </View>

                            {/* <Text style={style.timeStamp}>1:41 PM</Text> */}
                        </View>
                    </TouchableWithoutFeedback>
                ))
                :

                <Text>No Room Available</Text>
            }



        </ScrollView>
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
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    timeStamp: {
        marginTop: 15,
        color: colors.subtext
    }
})