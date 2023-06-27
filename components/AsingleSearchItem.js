import { View, Text, Pressable, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

export default function ASingleSearchItem() {
  return (
    <TouchableOpacity style={styles.container}>
        <Image style={styles.imageStyle} source={require('../assets/images/avatar.png')}/>
        <View style={styles.midContainerStyle}> 
            <Text style={styles.chatNameStyle}>Dhinka Chika Dhin</Text>
        </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection:'row',
        backgroundColor: '#f7f7f8',
        alignItems: 'center',
        justifyContent:'space-between',
        borderRadius:5,
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
        height:45,
        width:45,
        borderRadius:50
    },
    midContainerStyle:{
        display:'flex',
        justifyContent:'flex-start',
        flexDirection:'row',
        width:'80%'
    },
    chatNameStyle:{
        fontSize:17,
        fontWeight:'bold',
        color:'#0274ed'
    }

  });