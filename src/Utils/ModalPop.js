import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react';
const Width = Dimensions.get('window').width;
const Modal_Height = 150;

const ModalPop = ({
    trigerMode,
    
}) => {


    return (
        <View style={style.container}>
            <View style={style.modalBody}>

                <Text style={{fontWeight:'700',fontSize:18,color:'#333333'}}>Update</Text>
                <Text style={{marginVertical:10}}>Please select an update option</Text>

                <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
                    <TouchableOpacity onPress={()=>trigerMode(false,'loss')} style={[style.actionButton,{marginHorizontal:20,backgroundColor:'red'}]}>
                        <Text style={{color:'#fff'}}>Lost</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>trigerMode(false,'win')} style={[style.actionButton, {backgroundColor:'green'}]}>
                        <Text style={{color:'#fff'}}>Won</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

export default ModalPop

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'

    },
    modalBody: {
        backgroundColor: '#ffffff',
        height: Modal_Height,
        width: Width - 80,
        padding:20,
        borderRadius:8
    },
    actionButton:{
        Width:100,
        height:35,
        borderRadius:8,
        borderWidth:1,
        borderColor:'#000000',
        padding:5,
        alignItems:'center',
        justifyContent:'center',
        marginTop:5
    }
})