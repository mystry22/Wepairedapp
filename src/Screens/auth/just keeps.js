
// const setTextMsg = (val) => {
//     setMsg(val);
// }

// const socket = io('http://192.168.43.50:4567');

// const connectChat = () => {

//     socket.on('message', message => {
//         const prevChat = [...conversations];
//         setConversations(prevChat.concat(message));
//     })

// }

// const evalDef = async () => {
//     const name = await AsyncStorage.getItem('chatName');
//     const img = await AsyncStorage.getItem('chatImg');

//     setGroupImg(img);
//     setGroupName(name)
// }

// const sendChat = () => {

//     if (msg.length < 0) {

//     } else {

//         socket.emit('chatMessage', msg);
//         setMsg('');
//     }

// // <View style={style.container}>
//             {/* <View>

//                 <View style={style.topBar}>


//                     <Image source={require(`../../Assets/default_community.png`)} style={{ width: 40, height: 40, borderRadius: 50, marginLeft: 40, marginRight: 20 }} />
//                     <Text style={{ marginTop: 10, color: colors.dark, fontWeight: '700' }} >{groupName}</Text>
//                 </View> */}

//     {/* <FlatList
//                     data={conversations}
//                     renderItem={({chats}) => {
//                         <View style={{ flexDirection: 'row', alignItems: 'baseline' }} key={i} >
//                             <Image source={require('../../Assets/profile.png')}
//                                 style={{ width: 20, height: 20, borderRadius: 50, marginRight: 5, }} />

//                             <View style={style.externalText}>
//                                 <Text style={style.chatName}>{chats.user}</Text>
//                                 <Text>{chats.text}</Text>
//                                 <Text style={style.timeStampExt}>{chats.time}</Text>
//                             </View>

//                         </View>
//                     }}
//                     keyExtractor={item => item.text}
//                 /> */}

//     {/* <ScrollView >


//                     {conversations.map((chats, i) => {
//                         return (
//                             <View style={{ flexDirection: 'row', alignItems: 'baseline' }} key={i} >
//                                 <Image source={require('../../Assets/profile.png')}
//                                     style={{ width: 20, height: 20, borderRadius: 50, marginRight: 5, }} />

//                                 <View style={style.externalText}>
//                                     <Text style={style.chatName}>{chats.user}</Text>
//                                     <Text>{chats.text}</Text>
//                                     <Text style={style.timeStampExt}>{chats.time}</Text>
//                                 </View>

//                             </View>
//                         );
//                     })} */}





//     {/* <View style={style.internalText}>
//                         <Text>Hello Wealth</Text>
//                         <Text style={style.timeStampInt} >
//                             12:00
//                         </Text>
//                     </View> */}

//     {/* </ScrollView> */ }
//     {/* <Text ref={currentRef}></Text>
//             </View>
//             <View style={{ flexDirection: 'row' }}>

//                 <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 30 }}>

//                     <View style={style.searchBox}>
//                         <TextInput style={{ flex: 1, paddingLeft: 10 }} value={msg} onChangeText={(val) => setTextMsg(val)} placeholder='Message' />
//                     </View>

//                     <Pressable onPress={sendChat} style={style.searchButton}>
//                         <Feather name={'send'} size={28} color={'#ffffff'} />
//                     </Pressable>

//                 </View>
//             </View> */}
//     {/* </View> */ }