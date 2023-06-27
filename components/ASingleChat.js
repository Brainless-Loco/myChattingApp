import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { updateCurrentOpenChatRef } from '../redux/Actions';

export default function ASingleChat({navigation,roomId}) {

    const dispatch = useDispatch()

    const updateOpenChatId = (chatRef)=> dispatch(updateCurrentOpenChatRef(chatRef))
    
    return (
        <TouchableOpacity  onPress={()=>{
            updateOpenChatId(roomId)
            navigation.navigate('chat');
            }} style={styles.container}>
            <Image style={styles.imageStyle} source={require('../assets/images/avatar.png')}/>
            <View style={styles.midContainerStyle}> 
                <Text style={styles.chatNameStyle}>Dhinka Chika Dhin</Text>
                <Text>Total: 32 texts</Text>
            </View>
            <TouchableOpacity style={styles.deleteBtnContainerStyle}><Ionicons name="trash" size={24} color="#9c0615"/></TouchableOpacity>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection:'row',
        backgroundColor: '#f7f7f5',
        alignItems: 'center',
        justifyContent:'space-between',
        borderRadius:8,
        gap:12,
        margin:5,
        marginBottom:6,
        marginTop:2,
        padding:7,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    imageStyle:{
        height:60,
        width:60,
        borderRadius:50
    },
    midContainerStyle:{
        display:'flex',
        justifyContent:'flex-end',
        flexDirection:'column',
        width:'65%'
    },
    chatNameStyle:{
        fontSize:17,
        fontWeight:'bold',
        color:'#0274ed'
    },
    deleteBtnContainerStyle:{
        height:'100%',
        width:'10%',
        display:'flex',
        alignItems:'center',
        flexDirection:'row'
    }

  });