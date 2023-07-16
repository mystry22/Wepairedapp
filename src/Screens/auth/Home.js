import { View, Text, StyleSheet, ScrollView, Image, TouchableWithoutFeedback, TextInput, TouchableOpacity } from 'react-native';
import React, { useEffect, useContext } from 'react';
import colors from '../../Utils/color';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { getUserDetails } from '../../Utils/requests';
import { AuthLoginContext } from '../../Provider/AuthLoginContext';
import { useNavigation } from '@react-navigation/native';


const Home = () => {
    const navigation = useNavigation();
    const { setFname, setLName, setMail, setBio, setUserID } = useContext(AuthLoginContext);


    useEffect(() => {
        getAllUsers();

    }, [])

    const locaData = [

        { community_name: 'The Deaf Community', Channel_ID: '81119278', Def_Image: require('../../Assets/deaf_community.png'), Sub_Text: 'united we stand, divided we fall' },
        { community_name: 'The Mute community', Channel_ID: '4110622', Def_Image: require('../../Assets/mute_community.png'), Sub_Text: 'We dream big over here' },
        { community_name: 'The Gospel Community', Channel_ID: '51219189', Def_Image: require('../../Assets/gospel_community.png'), Sub_Text: 'The beauty of the Gospel' },
        { community_name: 'The General Community', Channel_ID: '94963569', Def_Image: require('../../Assets/general_community.png'), Sub_Text: 'Meet new people share your views' }

    ]

    const getAllUsers = async () => {
        const res = await getUserDetails();
        setFname(res.postUser.name);
        setLName(res.postUser.lastName);
        setMail(res.postUser.email);
        setBio(res.postUser.bio);
        setUserID(res.postUser._id);

    }

    const keeps = () => {
        console.log('ok');
    }

    const gotochat = async (name, roomID) => {
        navigation.navigate('Chating', {
            screen: 'ChatScreenDef',
            params: {
                chatName: name,
                room_id: roomID
            }
        });

    }


    const goToCreate = () => {
        navigation.navigate('CreateCommunity');
    }
    return (
        <ScrollView style={style.container}>

            {/* community text */}
            <Text style={style.boldTitle}>New Community</Text>

            <Text style={style.forums}>Forums</Text>
            {/* Forum Scroll */}
            <ScrollView horizontal={true} style={{ marginBottom: 10 }}>

                <View style={style.forumsList}>
                    <Image source={require('../../Assets/politics.png')} style={style.images} />
                    <Text style={style.forumText}>Politics</Text>
                </View>
                <View style={style.forumsList}>
                    <Image source={require('../../Assets/football.png')} style={style.images} />
                    <Text style={style.forumText}>Football</Text>
                </View>
                <View style={style.forumsList}>
                    <Image source={require('../../Assets/game.png')} style={style.images} />
                    <Text style={style.forumText}>Games</Text>
                </View>
                <View style={style.forumsList}>
                    <Image source={require('../../Assets/music.png')} style={style.images} />
                    <Text style={style.forumText}>Music</Text>
                </View>
                <View style={style.forumsList}>
                    <Image source={require('../../Assets/comedy.png')} style={style.images} />
                    <Text style={style.forumText}>Comedy</Text>
                </View>

            </ScrollView>

            {/* community and Search Box */}

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                <Text style={style.forums}>Community</Text>

                <TouchableWithoutFeedback onPress={goToCreate}>
                    <Text style={{ color: colors.btn, fontSize: 14, fontWeight: '400', marginTop: 3 }} >Create new community</Text>
                </TouchableWithoutFeedback>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 30 }}>

                <View style={style.searchBox}>
                    <TextInput style={{ flex: 1, paddingLeft: 10 }} onChangeText={keeps} placeholder='Search for community' />
                </View>

                <TouchableOpacity onPress={keeps} style={style.searchButton}>
                    <AntDesign name={'search1'} size={20} color={'#ffffff'} />
                </TouchableOpacity>

            </View>

            {/* Default Communities */}

            {
                locaData.map(rooms => (
                    <TouchableWithoutFeedback onPress={() => gotochat(rooms.community_name, rooms.Channel_ID)} key={rooms.Channel_ID} >

                        <View style={style.communityContainer}>
                            <View style={style.holdCommunity}>
                                <Image source={rooms.Def_Image} style={style.communityImage} />

                                <View style={{ marginLeft: 10, paddingTop: 10 }}>
                                    <Text style={style.titleCommunity}>{rooms.community_name}</Text>
                                    <Text style={style.subTextCommunity}>{rooms.Sub_Text} </Text>
                                </View>
                            </View>

                            <AntDesign name='right' size={28} style={{ paddingTop: 10 }} />
                        </View>
                    </TouchableWithoutFeedback>
                ))
            }




            {/* <TouchableWithoutFeedback onPress={() => gotochat('The Mute community', '4110622')}>
                <View style={style.communityContainer}>
                    <View style={style.holdCommunity}>
                        <Image source={require('../../Assets/mute_community.png')} style={style.communityImage} />

                        <View style={{ marginLeft: 10, paddingTop: 10 }}>
                            <Text style={style.titleCommunity}>The Mute Community</Text>
                            <Text style={style.subTextCommunity}>We dream big over here </Text>
                        </View>
                    </View>

                    <AntDesign name='right' size={28} style={{ paddingTop: 10 }} />
                </View>

            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => gotochat('The Gospel Community', '51219189')}>
                <View style={style.communityContainer}>
                    <View style={style.holdCommunity}>
                        <Image source={require('../../Assets/gospel_community.png')} style={style.communityImage} />

                        <View style={{ marginLeft: 10, paddingTop: 10 }}>
                            <Text style={style.titleCommunity}>The Gospel Community</Text>
                            <Text style={style.subTextCommunity}>The beauty of the Gospel </Text>
                        </View>
                    </View>

                    <AntDesign name='right' size={28} style={{ paddingTop: 10 }} />
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => gotochat('The General Community', '94963569')}>
                <View style={style.communityContainer}>
                    <View style={style.holdCommunity}>
                        <Image source={require('../../Assets/general_community.png')} style={style.communityImage} />

                        <View style={{ marginLeft: 10, paddingTop: 10 }}>
                            <Text style={style.titleCommunity}>The General Community</Text>
                            <Text style={style.subTextCommunity}>Meet new people share your views </Text>
                        </View>
                    </View>

                    <AntDesign name='right' size={28} style={{ paddingTop: 10 }} />
                </View>
            </TouchableWithoutFeedback> */}

        </ScrollView>
    )
}

export default Home;

const style = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: colors.bg,
        flex: 1
    },
    boldTitle: {
        color: colors.darkText,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '500',
        marginBottom: 30
    },
    forums: {
        color: colors.dark,
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 10
    },
    forumsList: {
        height: 50,
        width: 60,
        marginRight: 10,
        borderRadius: 10,

    },
    images: {
        borderRadius: 10,
        height: '100%',
        width: '100%'
    },
    forumText: {
        fontSize: 14,
        alignSelf: 'center',
        color: colors.dark,
        fontWeight: '400'
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
    communityImage: {
        width: 70,
        height: 60,
        borderRadius: 10,
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
        borderBottomWidth: 1,
        paddingBottom: 10,
        borderBottomColor: '#EDE9E9'
    }
})